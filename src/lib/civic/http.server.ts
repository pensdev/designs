import type { CivicError, Provenance } from "./types";
import { provenanceNow as buildProvenance } from "./provenance.ts";

if (typeof window !== "undefined") {
  throw new Error(
    "@/lib/civic/http.server is server-only. Call it from a createServerFn handler, never from a component.",
  );
}

const DEFAULT_TIMEOUT_MS = 8_000;

/** Never let an API key reach a provenance stamp or a log line. */
export function scrubUrl(url: string) {
  const parsed = new URL(url);
  if (parsed.searchParams.has("api_key")) parsed.searchParams.set("api_key", "REDACTED");
  return parsed.toString();
}

export function provenanceNow(source: string, api: string, url?: string): Provenance {
  return buildProvenance(source, api, url ? scrubUrl(url) : undefined);
}

export class CivicFetchError extends Error {
  readonly civic: CivicError;
  constructor(civic: CivicError) {
    super(civic.message);
    this.civic = civic;
  }
}

/**
 * One JSON GET with a hard timeout, mapping every failure onto a sentence the
 * UI can show. Upstream status codes and stack traces never reach the client:
 * a rate limit and a 500 are different problems for the reader, and everything
 * else is noise.
 */
export async function getJson<T>(
  url: string,
  { timeoutMs = DEFAULT_TIMEOUT_MS }: { timeoutMs?: number } = {},
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let response: Response;

  try {
    response = await fetch(url, {
      signal: controller.signal,
      headers: { accept: "application/json" },
    });
  } catch (cause) {
    const timedOut = cause instanceof Error && cause.name === "AbortError";
    throw new CivicFetchError({
      kind: timedOut ? "timeout" : "network",
      message: timedOut
        ? "The source did not respond in time. Nothing below has been updated."
        : "Could not reach the source. Nothing below has been updated.",
    });
  } finally {
    clearTimeout(timer);
  }

  if (response.status === 429) {
    throw new CivicFetchError({
      kind: "rate_limited",
      status: 429,
      message:
        "The source is rate limiting this key. Add a free api.data.gov key to raise the ceiling.",
    });
  }
  if (response.status === 404) {
    throw new CivicFetchError({
      kind: "not_found",
      status: 404,
      message: "The source has no record matching that request.",
    });
  }
  if (!response.ok) {
    throw new CivicFetchError({
      kind: "upstream",
      status: response.status,
      message: `The source returned an error (${response.status}). Nothing below has been updated.`,
    });
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new CivicFetchError({
      kind: "upstream",
      message: "The source returned a response this app could not read.",
    });
  }
}

export function toCivicError(cause: unknown): CivicError {
  if (cause instanceof CivicFetchError) return cause.civic;
  return { kind: "upstream", message: "Something went wrong reading from the source." };
}
