//#region node_modules/.nitro/vite/services/ssr/assets/format-tXtmRiW7.js
/** Client-safe formatting shared by the data layer and the components. */
var DATE = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC"
});
var STAMP = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	hour: "numeric",
	minute: "2-digit",
	timeZone: "UTC",
	timeZoneName: "short"
});
/** "Sept 3, 2026" from an ISO date, without tripping over local timezones. */
function formatDate(iso) {
	const parsed = Date.parse(iso.length === 10 ? `${iso}T00:00:00Z` : iso);
	if (Number.isNaN(parsed)) return iso;
	return DATE.format(new Date(parsed));
}
/** "Sept 3, 2026, 2:14 PM UTC" — the retrieval moment on a provenance stamp. */
function formatStamp(iso) {
	const parsed = Date.parse(iso);
	if (Number.isNaN(parsed)) return iso;
	return STAMP.format(new Date(parsed));
}
//#endregion
export { formatStamp as n, formatDate as t };
