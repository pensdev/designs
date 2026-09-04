import { n as provenanceNow$1 } from "./api-BloUmbTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/http.server-CMucFbIw.js
if (typeof window !== "undefined") throw new Error("@/lib/civic/http.server is server-only. Call it from a createServerFn handler, never from a component.");
var DEFAULT_TIMEOUT_MS = 8e3;
/** Never let an API key reach a provenance stamp or a log line. */
function scrubUrl(url) {
	const parsed = new URL(url);
	if (parsed.searchParams.has("api_key")) parsed.searchParams.set("api_key", "REDACTED");
	return parsed.toString();
}
function provenanceNow(source, api, url) {
	return provenanceNow$1(source, api, url ? scrubUrl(url) : void 0);
}
var CivicFetchError = class extends Error {
	civic;
	constructor(civic) {
		super(civic.message);
		this.civic = civic;
	}
};
/**
* One JSON GET with a hard timeout, mapping every failure onto a sentence the
* UI can show. Upstream status codes and stack traces never reach the client:
* a rate limit and a 500 are different problems for the reader, and everything
* else is noise.
*/
async function getJson(url, { timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	let response;
	try {
		response = await fetch(url, {
			signal: controller.signal,
			headers: { accept: "application/json" }
		});
	} catch (cause) {
		const timedOut = cause instanceof Error && cause.name === "AbortError";
		throw new CivicFetchError({
			kind: timedOut ? "timeout" : "network",
			message: timedOut ? "The source did not respond in time. Nothing below has been updated." : "Could not reach the source. Nothing below has been updated."
		});
	} finally {
		clearTimeout(timer);
	}
	if (response.status === 429) throw new CivicFetchError({
		kind: "rate_limited",
		status: 429,
		message: "The source is rate limiting this key. Add a free api.data.gov key to raise the ceiling."
	});
	if (response.status === 404) throw new CivicFetchError({
		kind: "not_found",
		status: 404,
		message: "The source has no record matching that request."
	});
	if (!response.ok) throw new CivicFetchError({
		kind: "upstream",
		status: response.status,
		message: `The source returned an error (${response.status}). Nothing below has been updated.`
	});
	try {
		return await response.json();
	} catch {
		throw new CivicFetchError({
			kind: "upstream",
			message: "The source returned a response this app could not read."
		});
	}
}
function toCivicError(cause) {
	if (cause instanceof CivicFetchError) return cause.civic;
	return {
		kind: "upstream",
		message: "Something went wrong reading from the source."
	};
}
//#endregion
export { getJson, provenanceNow, toCivicError };
