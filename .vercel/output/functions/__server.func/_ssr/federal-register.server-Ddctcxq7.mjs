import { getJson, provenanceNow } from "./http.server-CMucFbIw.mjs";
import { t as cached } from "./cache.server-Cex75eNO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/federal-register.server-Ddctcxq7.js
if (typeof window !== "undefined") throw new Error("@/lib/civic/federal-register.server is server-only.");
var BASE = "https://www.federalregister.gov/api/v1/documents.json";
var TTL_MS = 216e5;
/**
* Proposed rules with an open comment window.
*
* `comments_close_on` is a real regulatory deadline published by the agency —
* the one kind of countdown this system permits, because missing it actually
* forecloses the act.
*/
async function openCommentPeriods(limit = 5) {
	const params = new URLSearchParams({
		per_page: String(limit),
		order: "newest",
		"conditions[type][]": "PRORULE",
		"conditions[comment_date][gte]": (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	});
	for (const field of [
		"document_number",
		"title",
		"publication_date",
		"comments_close_on",
		"html_url",
		"agencies"
	]) params.append("fields[]", field);
	const url = `${BASE}?${params}`;
	return cached(`fr:comments:${limit}`, TTL_MS, async () => {
		const body = await getJson(url);
		const provenance = provenanceNow("Federal Register", "documents API", url);
		return {
			data: (body.results ?? []).map((raw) => ({
				documentNumber: raw.document_number ?? "",
				title: raw.title ?? "Untitled",
				agencies: (raw.agencies ?? []).map((a) => a.name ?? "").filter(Boolean),
				publicationDate: raw.publication_date ?? "",
				commentsCloseOn: raw.comments_close_on ?? void 0,
				htmlUrl: raw.html_url ?? ""
			})),
			provenance
		};
	});
}
//#endregion
export { openCommentPeriods };
