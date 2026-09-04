import { toCivicError } from "./http.server-CMucFbIw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cache.server-Cex75eNO.js
if (typeof window !== "undefined") throw new Error("@/lib/civic/cache.server is server-only.");
var store = /* @__PURE__ */ new Map();
/** Bounded so a long-lived server cannot grow this without limit. */
var MAX_ENTRIES = 200;
function remember(key, entry) {
	if (store.size >= MAX_ENTRIES && !store.has(key)) {
		const oldest = store.keys().next().value;
		if (oldest !== void 0) store.delete(oldest);
	}
	store.set(key, entry);
}
/**
* Fetch through a TTL cache that degrades honestly.
*
* A fresh hit is returned as-is. On a miss the loader runs. If the loader
* fails but an expired entry exists, that entry comes back with `stale: true`
* and its *original* provenance — so the stamp shows when the data was really
* retrieved, and the UI can say why it has not moved. Only a failure with
* nothing cached is an error.
*/
async function cached(key, ttlMs, load) {
	const now = Date.now();
	const hit = store.get(key);
	if (hit && hit.expiresAt > now) return {
		ok: true,
		data: hit.data,
		provenance: hit.provenance,
		stale: false
	};
	try {
		const { data, provenance } = await load();
		remember(key, {
			data,
			provenance,
			expiresAt: now + ttlMs
		});
		return {
			ok: true,
			data,
			provenance,
			stale: false
		};
	} catch (cause) {
		const error = toCivicError(cause);
		if (hit) return {
			ok: true,
			data: hit.data,
			provenance: hit.provenance,
			stale: true,
			staleReason: error
		};
		throw cause;
	}
}
//#endregion
export { cached as t };
