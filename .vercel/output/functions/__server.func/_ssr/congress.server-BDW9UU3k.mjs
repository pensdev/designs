import { t as formatDate } from "./format-tXtmRiW7.mjs";
import { getJson, provenanceNow } from "./http.server-CMucFbIw.mjs";
import { t as cached } from "./cache.server-Cex75eNO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/congress.server-BDW9UU3k.js
if (typeof window !== "undefined") throw new Error("@/lib/civic/congress.server is server-only.");
var BASE = "https://api.congress.gov/v3";
var TTL_MS = 36e5;
/**
* DEMO_KEY is api.data.gov's shared key: it works with no setup but throttles at
* roughly 30 requests an hour per IP. A free key in CONGRESS_API_KEY raises that
* to 1,000/hour. The key is read from the server environment only and is
* scrubbed out of every provenance URL.
*/
function apiKey() {
	return process.env.CONGRESS_API_KEY?.trim() || "DEMO_KEY";
}
function endpoint(path, params = {}) {
	return `${BASE}${path}?${new URLSearchParams({
		format: "json",
		api_key: apiKey(),
		...params
	})}`;
}
/** "Garbarino, Andrew R." → "Rep. Andrew R. Garbarino". */
function displayName(name, chamber) {
	const prefix = chamber === "Senate" ? "Sen." : "Rep.";
	const [last, rest] = name.split(",").map((part) => part.trim());
	return rest ? `${prefix} ${rest} ${last}` : `${prefix} ${name}`;
}
async function membersForDistrict(congress, state, district) {
	const url = endpoint(`/member/congress/${congress}/${state}/${Number.parseInt(district, 10)}`, {
		currentMember: "true",
		limit: "5"
	});
	return cached(`congress:member:${congress}:${state}:${district}`, TTL_MS, async () => {
		const body = await getJson(url);
		const provenance = provenanceNow("Congress.gov", "member API", url);
		return {
			data: (body.members ?? []).map((raw) => {
				const chamber = raw.terms?.item?.at(-1)?.chamber === "Senate" ? "Senate" : "House";
				const name = raw.name ?? "Unknown";
				const districtLabel = chamber === "Senate" ? `${state}-Sen` : `${state}-${String(raw.district ?? district).padStart(2, "0")}`;
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
					imageUrl: raw.depiction?.imageUrl
				};
			}),
			provenance
		};
	});
}
/**
* Map the latest action onto the five stages the BillStatus component draws.
* Deliberately conservative: anything it cannot place confidently stays at
* "Introduced" rather than advancing a bill it has not seen advance.
*/
function deriveStage(text, hasLaw) {
	const t = text.toLowerCase();
	if (hasLaw || t.includes("became public law") || t.includes("signed by president")) return "Enacted";
	if (t.includes("passed") || t.includes("agreed to") || t.includes("cleared for white house")) return "Passed";
	if (t.includes("on the house calendar") || t.includes("placed on the union calendar") || t.includes("floor") || t.includes("rule provides") || t.includes("considered")) return "Floor";
	if (t.includes("referred to") || t.includes("committee") || t.includes("markup")) return "Committee";
	return "Introduced";
}
async function billSummary(congress, type, number) {
	const url = endpoint(`/bill/${congress}/${type.toLowerCase()}/${number}`);
	return cached(`congress:bill:${congress}:${type}:${number}`, TTL_MS, async () => {
		const body = await getJson(url);
		const provenance = provenanceNow("Congress.gov", "bill API", url);
		const bill = body.bill;
		if (!bill) throw new Error("no bill");
		const actionText = bill.latestAction?.text ?? "";
		const label = `${(bill.type ?? type).replace(/([A-Z])/gu, "$1").toUpperCase()} ${bill.number ?? number}`.replace(/^HR /u, "H.R. ").replace(/^S /u, "S. ").replace(/^HRES /u, "H.Res. ").replace(/^SRES /u, "S.Res. ");
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
				updatedDisplay: bill.updateDate ? formatDate(bill.updateDate) : ""
			}
		};
	});
}
/**
* Recent House roll calls, chamber-level.
*
* These are the chamber's results, not one member's positions — fetching a
* member's Yea/Nay costs an extra request per roll call, which DEMO_KEY cannot
* carry. The RollCallTable is fed the chamber result and labelled as such
* rather than implying a member voted a way we did not read.
*/
async function recentHouseVotes(limit = 5) {
	const url = endpoint("/house-vote", { limit: String(limit) });
	return cached(`congress:house-vote:${limit}`, TTL_MS, async () => {
		const body = await getJson(url);
		const provenance = provenanceNow("Congress.gov", "house-vote API", url);
		return {
			data: (body.houseRollCallVotes ?? []).map((raw) => {
				const legislation = raw.legislationType && raw.legislationNumber ? `${raw.legislationType} ${raw.legislationNumber}` : void 0;
				return {
					roll: String(raw.rollCallNumber ?? ""),
					question: raw.voteQuestion || (legislation ? `On ${legislation}` : "Roll call vote"),
					result: raw.result ?? "—",
					date: raw.startDate ? raw.startDate.slice(0, 10) : "",
					legislationLabel: legislation,
					sourceUrl: raw.legislationUrl
				};
			}),
			provenance
		};
	});
}
//#endregion
export { billSummary, membersForDistrict, recentHouseVotes };
