import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { n as formatStamp } from "./format-tXtmRiW7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BloUmbTZ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Client-safe stamp builder, used when a failure happens before any request. */
function provenanceNow(source, api, url) {
	const retrievedAt = (/* @__PURE__ */ new Date()).toISOString();
	return {
		source,
		api,
		retrievedAt,
		retrievedDisplay: formatStamp(retrievedAt),
		url
	};
}
var api_exports = /* @__PURE__ */ __exportAll({
	billSummaryFn_createServerFn_handler: () => billSummaryFn_createServerFn_handler,
	lookupDistrictFn_createServerFn_handler: () => lookupDistrictFn_createServerFn_handler,
	membersForDistrictFn_createServerFn_handler: () => membersForDistrictFn_createServerFn_handler,
	openCommentPeriodsFn_createServerFn_handler: () => openCommentPeriodsFn_createServerFn_handler,
	recentHouseVotesFn_createServerFn_handler: () => recentHouseVotesFn_createServerFn_handler
});
/**
* Server functions are the only way the browser touches these sources.
*
* Two reasons it is not a client fetch: the Congress.gov key must never reach
* the bundle, and the Census and Federal Register endpoints do not serve CORS
* headers a browser would accept. Every handler returns a CivicResult, so a
* failure arrives as data the UI can render rather than a thrown promise.
*/
/** Wrap a server-only loader so an unexpected throw still returns a stamped result. */
async function guard(source, api, run) {
	try {
		return await run();
	} catch (cause) {
		const { toCivicError } = await import("./http.server-CMucFbIw.mjs");
		return {
			ok: false,
			error: toCivicError(cause),
			provenance: provenanceNow(source, api)
		};
	}
}
var lookupDistrictFn_createServerFn_handler = createServerRpc({
	id: "450dd64493f400bf39426705c8fc5fc62b84435568f6c57e8d067bceca538af3",
	name: "lookupDistrictFn",
	filename: "src/lib/civic/api.ts"
}, (opts) => lookupDistrictFn.__executeServer(opts));
var lookupDistrictFn = createServerFn({ method: "GET" }).inputValidator((address) => address).handler(lookupDistrictFn_createServerFn_handler, async ({ data }) => guard("U.S. Census Bureau", "geocoder", async () => {
	const { lookupDistrict } = await import("./census.server-BIhNYANX.mjs");
	return lookupDistrict(data);
}));
var membersForDistrictFn_createServerFn_handler = createServerRpc({
	id: "aea8591007effe06498b0741e454d7393e6191c397773fa275ec502df84e49c5",
	name: "membersForDistrictFn",
	filename: "src/lib/civic/api.ts"
}, (opts) => membersForDistrictFn.__executeServer(opts));
var membersForDistrictFn = createServerFn({ method: "GET" }).inputValidator((input) => input).handler(membersForDistrictFn_createServerFn_handler, async ({ data }) => guard("Congress.gov", "member API", async () => {
	const { membersForDistrict } = await import("./congress.server-BDW9UU3k.mjs");
	return membersForDistrict(data.congress, data.state, data.district);
}));
var billSummaryFn_createServerFn_handler = createServerRpc({
	id: "f628e49994503a9d60aca02d0563ed5c9fccec77087c12f1fd2b695b2faf77b6",
	name: "billSummaryFn",
	filename: "src/lib/civic/api.ts"
}, (opts) => billSummaryFn.__executeServer(opts));
var billSummaryFn = createServerFn({ method: "GET" }).inputValidator((input) => input).handler(billSummaryFn_createServerFn_handler, async ({ data }) => guard("Congress.gov", "bill API", async () => {
	const { billSummary } = await import("./congress.server-BDW9UU3k.mjs");
	return billSummary(data.congress, data.type, data.number);
}));
var recentHouseVotesFn_createServerFn_handler = createServerRpc({
	id: "ea37967b92d2233c7eb0f423f01ec621732de99dde76393f35681ba1c58a7809",
	name: "recentHouseVotesFn",
	filename: "src/lib/civic/api.ts"
}, (opts) => recentHouseVotesFn.__executeServer(opts));
var recentHouseVotesFn = createServerFn({ method: "GET" }).inputValidator((limit) => limit).handler(recentHouseVotesFn_createServerFn_handler, async ({ data }) => guard("Congress.gov", "house-vote API", async () => {
	const { recentHouseVotes } = await import("./congress.server-BDW9UU3k.mjs");
	return recentHouseVotes(data);
}));
var openCommentPeriodsFn_createServerFn_handler = createServerRpc({
	id: "e31db09dc67b663df1b551967caba72f34f6518ceb6b82e35c98fec8afa94047",
	name: "openCommentPeriodsFn",
	filename: "src/lib/civic/api.ts"
}, (opts) => openCommentPeriodsFn.__executeServer(opts));
var openCommentPeriodsFn = createServerFn({ method: "GET" }).inputValidator((limit) => limit).handler(openCommentPeriodsFn_createServerFn_handler, async ({ data }) => guard("Federal Register", "documents API", async () => {
	const { openCommentPeriods } = await import("./federal-register.server-Ddctcxq7.mjs");
	return openCommentPeriods(data);
}));
//#endregion
export { provenanceNow as n, api_exports as t };
