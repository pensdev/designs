import { formatStamp } from "./format.ts";
import type { Provenance } from "./types";

/** Client-safe stamp builder, used when a failure happens before any request. */
export function provenanceNow(source: string, api: string, url?: string): Provenance {
  const retrievedAt = new Date().toISOString();
  return { source, api, retrievedAt, retrievedDisplay: formatStamp(retrievedAt), url };
}
