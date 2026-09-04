import type { CivicError, CivicResult, Provenance } from "./types";
import { toCivicError } from "./http.server.ts";

if (typeof window !== "undefined") {
  throw new Error("@/lib/civic/cache.server is server-only.");
}

type Entry = { data: unknown; provenance: Provenance; expiresAt: number };

const store = new Map<string, Entry>();

/** Bounded so a long-lived server cannot grow this without limit. */
const MAX_ENTRIES = 200;

function remember(key: string, entry: Entry) {
  if (store.size >= MAX_ENTRIES && !store.has(key)) {
    const oldest = store.keys().next().value;
    if (oldest !== undefined) store.delete(oldest);
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
export async function cached<T>(
  key: string,
  ttlMs: number,
  load: () => Promise<{ data: T; provenance: Provenance }>,
): Promise<CivicResult<T>> {
  const now = Date.now();
  const hit = store.get(key);

  if (hit && hit.expiresAt > now) {
    return { ok: true, data: hit.data as T, provenance: hit.provenance, stale: false };
  }

  try {
    const { data, provenance } = await load();
    remember(key, { data, provenance, expiresAt: now + ttlMs });
    return { ok: true, data, provenance, stale: false };
  } catch (cause) {
    const error: CivicError = toCivicError(cause);
    if (hit) {
      return {
        ok: true,
        data: hit.data as T,
        provenance: hit.provenance,
        stale: true,
        staleReason: error,
      };
    }
    throw cause;
  }
}

/** Test seam. */
export function clearCivicCache() {
  store.clear();
}
