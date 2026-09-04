import { cached } from "./cache.server.ts";
import { getJson, provenanceNow } from "./http.server.ts";
import { formatDate } from "./format.ts";
import type { BillSummary, ChamberVote, CivicResult, CongressMember } from "./types";

if (typeof window !== "undefined") throw new Error("@/lib/civic/congress.server is server-only.");

const BASE = "https://api.congress.gov/v3";
const TTL_MS = 60 * 60 * 1000;

/**
 * DEMO_KEY is api.data.gov's shared key: it works with no setup but throttles at
 * roughly 30 requests an hour per IP. A free key in CONGRESS_API_KEY raises that
 * to 1,000/hour. The key is read from the server environment only and is
 * scrubbed out of every provenance URL.
 */
function apiKey() {
  return process.env.CONGRESS_API_KEY?.trim() || "DEMO_KEY";
}

export function usingDemoKey() {
  return apiKey() === "DEMO_KEY";
}

function endpoint(path: string, params: Record<string, string> = {}) {
  return `${BASE}${path}?${new URLSearchParams({ format: "json", api_key: apiKey(), ...params })}`;
}

/* -------------------------------------------------------------------------- */

type MemberResponse = {
  members?: Array<{
    bioguideId?: string;
    name?: string;
    partyName?: string;
    state?: string;
    district?: number;
    url?: string;
    depiction?: { imageUrl?: string };
    terms?: { item?: Array<{ chamber?: string }> };
  }>;
};

/** "Garbarino, Andrew R." → "Rep. Andrew R. Garbarino". */
function displayName(name: string, chamber: "House" | "Senate") {
  const prefix = chamber === "Senate" ? "Sen." : "Rep.";
  const [last, rest] = name.split(",").map((part) => part.trim());
  return rest ? `${prefix} ${rest} ${last}` : `${prefix} ${name}`;
}

export async function membersForDistrict(
  congress: number,
  state: string,
  district: string,
): Promise<CivicResult<CongressMember[]>> {
  const url = endpoint(`/member/congress/${congress}/${state}/${Number.parseInt(district, 10)}`, {
    currentMember: "true",
    limit: "5",
  });

  return cached(`congress:member:${congress}:${state}:${district}`, TTL_MS, async () => {
    const body = await getJson<MemberResponse>(url);
    const provenance = provenanceNow("Congress.gov", "member API", url);
    const data = (body.members ?? []).map((raw): CongressMember => {
      const chamber: "House" | "Senate" =
        raw.terms?.item?.at(-1)?.chamber === "Senate" ? "Senate" : "House";
      const name = raw.name ?? "Unknown";
      const districtLabel =
        chamber === "Senate"
          ? `${state}-Sen`
          : `${state}-${String(raw.district ?? district).padStart(2, "0")}`;
      return {
        bioguideId: raw.bioguideId ?? name,
        name,
        displayName: displayName(name, chamber),
        party: raw.partyName,
        state: raw.state ?? state,
        district: raw.district,
        chamber,
        districtLabel,
        url: raw.url,
        imageUrl: raw.depiction?.imageUrl,
      };
    });
    return { data, provenance };
  });
}

/* -------------------------------------------------------------------------- */

type BillResponse = {
  bill?: {
    congress?: number;
    type?: string;
    number?: string;
    title?: string;
    originChamber?: string;
    updateDate?: string;
    laws?: unknown[];
    latestAction?: { actionDate?: string; text?: string };
  };
};

/**
 * Map the latest action onto the five stages the BillStatus component draws.
 * Deliberately conservative: anything it cannot place confidently stays at
 * "Introduced" rather than advancing a bill it has not seen advance.
 */
function deriveStage(text: string, hasLaw: boolean): BillSummary["stage"] {
  const t = text.toLowerCase();
  if (hasLaw || t.includes("became public law") || t.includes("signed by president")) return "Enacted";
  if (t.includes("passed") || t.includes("agreed to") || t.includes("cleared for white house"))
    return "Passed";
  if (t.includes("on the house calendar") || t.includes("placed on the union calendar") ||
      t.includes("floor") || t.includes("rule provides") || t.includes("considered"))
    return "Floor";
  if (t.includes("referred to") || t.includes("committee") || t.includes("markup")) return "Committee";
  return "Introduced";
}

export async function billSummary(
  congress: number,
  type: string,
  number: string,
): Promise<CivicResult<BillSummary>> {
  const url = endpoint(`/bill/${congress}/${type.toLowerCase()}/${number}`);

  return cached(`congress:bill:${congress}:${type}:${number}`, TTL_MS, async () => {
    const body = await getJson<BillResponse>(url);
    const provenance = provenanceNow("Congress.gov", "bill API", url);
    const bill = body.bill;
    if (!bill) throw new Error("no bill");

    const actionText = bill.latestAction?.text ?? "";
    const label = `${(bill.type ?? type).replace(/([A-Z])/gu, "$1").toUpperCase()} ${bill.number ?? number}`
      .replace(/^HR /u, "H.R. ")
      .replace(/^S /u, "S. ")
      .replace(/^HRES /u, "H.Res. ")
      .replace(/^SRES /u, "S.Res. ");

    return {
      provenance,
      data: {
        congress: bill.congress ?? congress,
        type: bill.type ?? type,
        number: bill.number ?? number,
        label,
        title: bill.title ?? "Untitled",
        originChamber: bill.originChamber === "Senate" ? "Senate" : "House",
        stage: deriveStage(actionText, Array.isArray(bill.laws) && bill.laws.length > 0),
        latestActionText: actionText,
        latestActionDate: bill.latestAction?.actionDate ?? "",
        updatedDisplay: bill.updateDate ? formatDate(bill.updateDate) : "",
      } satisfies BillSummary,
    };
  });
}

/* -------------------------------------------------------------------------- */

type HouseVoteResponse = {
  houseRollCallVotes?: Array<{
    rollCallNumber?: number;
    legislationNumber?: string;
    legislationType?: string;
    legislationUrl?: string;
    result?: string;
    startDate?: string;
    voteQuestion?: string;
  }>;
};

/**
 * Recent House roll calls, chamber-level.
 *
 * These are the chamber's results, not one member's positions — fetching a
 * member's Yea/Nay costs an extra request per roll call, which DEMO_KEY cannot
 * carry. The RollCallTable is fed the chamber result and labelled as such
 * rather than implying a member voted a way we did not read.
 */
export async function recentHouseVotes(limit = 5): Promise<CivicResult<ChamberVote[]>> {
  const url = endpoint("/house-vote", { limit: String(limit) });

  return cached(`congress:house-vote:${limit}`, TTL_MS, async () => {
    const body = await getJson<HouseVoteResponse>(url);
    const provenance = provenanceNow("Congress.gov", "house-vote API", url);
    const data = (body.houseRollCallVotes ?? []).map((raw): ChamberVote => {
      const legislation =
        raw.legislationType && raw.legislationNumber
          ? `${raw.legislationType} ${raw.legislationNumber}`
          : undefined;
      return {
        roll: String(raw.rollCallNumber ?? ""),
        question: raw.voteQuestion || (legislation ? `On ${legislation}` : "Roll call vote"),
        result: raw.result ?? "—",
        date: raw.startDate ? raw.startDate.slice(0, 10) : "",
        legislationLabel: legislation,
        sourceUrl: raw.legislationUrl,
      };
    });
    return { data, provenance };
  });
}
