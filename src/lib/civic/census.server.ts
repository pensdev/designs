import { cached } from "./cache.server.ts";
import { getJson, provenanceNow } from "./http.server.ts";
import type { CivicResult, DistrictLookup } from "./types";

if (typeof window !== "undefined") throw new Error("@/lib/civic/census.server is server-only.");

const BASE = "https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress";
const TTL_MS = 24 * 60 * 60 * 1000;

/** FIPS → USPS. Census returns numeric state codes on the district record. */
const STATE_BY_FIPS: Record<string, string> = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT",
  "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID", "17": "IL",
  "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD",
  "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE",
  "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND",
  "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD",
  "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV",
  "55": "WI", "56": "WY", "72": "PR",
};

type GeocodeResponse = {
  result?: {
    addressMatches?: Array<{
      matchedAddress?: string;
      geographies?: Record<string, Array<Record<string, unknown>>>;
    }>;
  };
};

const ZIP_ONLY = /^\d{5}(-\d{4})?$/u;

function readDistrict(record: Record<string, unknown>) {
  const cdKey = Object.keys(record).find((k) => /^CD\d+$/u.test(k));
  const number = cdKey ? String(record[cdKey]) : undefined;
  const stateFips = String(record.STATE ?? "");
  const session = cdKey ? Number.parseInt(cdKey.slice(2), 10) : Number.NaN;
  return { number, stateFips, congress: session };
}

/**
 * Address → congressional district, via the Census geocoder.
 *
 * A bare ZIP short-circuits before the network call. Census returns no match
 * for one, and that is the correct answer rather than a shortcoming: ZIPs cross
 * district lines, so there is no honest district to return. The component asks
 * for a street address instead of guessing.
 */
export async function lookupDistrict(query: string): Promise<CivicResult<DistrictLookup>> {
  const address = query.trim();

  if (!address) {
    return {
      ok: false,
      error: { kind: "bad_input", message: "Enter a street address to resolve a district." },
      provenance: provenanceNow("U.S. Census Bureau", "geocoder"),
    };
  }

  if (ZIP_ONLY.test(address)) {
    return {
      ok: true,
      stale: false,
      data: {
        kind: "needs_address",
        message:
          "A ZIP code does not determine a congressional district — ZIPs regularly span two or more. Enter a street address.",
      },
      provenance: provenanceNow("U.S. Census Bureau", "geocoder"),
    };
  }

  const url = `${BASE}?${new URLSearchParams({
    address,
    benchmark: "Public_AR_Current",
    vintage: "Current_Current",
    layers: "54",
    format: "json",
  })}`;

  return cached<DistrictLookup>(`census:${address.toLowerCase()}`, TTL_MS, async () => {
    const body = await getJson<GeocodeResponse>(url);
    const provenance = provenanceNow("U.S. Census Bureau", "geocoder", url);
    const match = body.result?.addressMatches?.[0];

    if (!match) {
      return {
        provenance,
        data: {
          kind: "no_match",
          message: "The Census geocoder could not match that address.",
        } satisfies DistrictLookup,
      };
    }

    const layer = Object.entries(match.geographies ?? {}).find(([name]) =>
      /congressional district/iu.test(name),
    );
    const record = layer?.[1]?.[0];
    if (!record) {
      return {
        provenance,
        data: {
          kind: "no_match",
          message: "That address matched, but no congressional district was returned for it.",
        } satisfies DistrictLookup,
      };
    }

    const { number, stateFips, congress } = readDistrict(record);
    const state = STATE_BY_FIPS[stateFips] ?? stateFips;
    const atLarge = number === "00" || number === "98";
    const districtNumber = number ?? "";

    return {
      provenance,
      data: {
        kind: "match",
        matchedAddress: match.matchedAddress ?? address,
        state,
        stateFips,
        districtNumber,
        district: atLarge ? `${state}-AL` : `${state}-${districtNumber}`,
        congress,
      } satisfies DistrictLookup,
    };
  });
}
