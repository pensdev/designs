import { createServerFn } from "@tanstack/react-start";
import { provenanceNow } from "./provenance.ts";
import type {
  BillSummary,
  ChamberVote,
  CivicResult,
  CommentPeriod,
  CongressMember,
  DistrictLookup,
} from "./types";

/**
 * Server functions are the only way the browser touches these sources.
 *
 * Two reasons it is not a client fetch: the Congress.gov key must never reach
 * the bundle, and the Census and Federal Register endpoints do not serve CORS
 * headers a browser would accept. Every handler returns a CivicResult, so a
 * failure arrives as data the UI can render rather than a thrown promise.
 */

/** Wrap a server-only loader so an unexpected throw still returns a stamped result. */
async function guard<T>(
  source: string,
  api: string,
  run: () => Promise<CivicResult<T>>,
): Promise<CivicResult<T>> {
  try {
    return await run();
  } catch (cause) {
    const { toCivicError } = await import("./http.server.ts");
    return { ok: false, error: toCivicError(cause), provenance: provenanceNow(source, api) };
  }
}

export const lookupDistrictFn = createServerFn({ method: "GET" })
  .inputValidator((address: string) => address)
  .handler(async ({ data }): Promise<CivicResult<DistrictLookup>> =>
    guard("U.S. Census Bureau", "geocoder", async () => {
      const { lookupDistrict } = await import("./census.server.ts");
      return lookupDistrict(data);
    }),
  );

export const membersForDistrictFn = createServerFn({ method: "GET" })
  .inputValidator((input: { congress: number; state: string; district: string }) => input)
  .handler(async ({ data }): Promise<CivicResult<CongressMember[]>> =>
    guard("Congress.gov", "member API", async () => {
      const { membersForDistrict } = await import("./congress.server.ts");
      return membersForDistrict(data.congress, data.state, data.district);
    }),
  );

export const billSummaryFn = createServerFn({ method: "GET" })
  .inputValidator((input: { congress: number; type: string; number: string }) => input)
  .handler(async ({ data }): Promise<CivicResult<BillSummary>> =>
    guard("Congress.gov", "bill API", async () => {
      const { billSummary } = await import("./congress.server.ts");
      return billSummary(data.congress, data.type, data.number);
    }),
  );

export const recentHouseVotesFn = createServerFn({ method: "GET" })
  .inputValidator((limit: number) => limit)
  .handler(async ({ data }): Promise<CivicResult<ChamberVote[]>> =>
    guard("Congress.gov", "house-vote API", async () => {
      const { recentHouseVotes } = await import("./congress.server.ts");
      return recentHouseVotes(data);
    }),
  );

export const openCommentPeriodsFn = createServerFn({ method: "GET" })
  .inputValidator((limit: number) => limit)
  .handler(async ({ data }): Promise<CivicResult<CommentPeriod[]>> =>
    guard("Federal Register", "documents API", async () => {
      const { openCommentPeriods } = await import("./federal-register.server.ts");
      return openCommentPeriods(data);
    }),
  );
