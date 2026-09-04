/**
 * Client-safe contracts for the civic data layer.
 *
 * The design system's whole claim is that a provenance stamp is true, so every
 * fetch returns the stamp alongside the payload rather than letting a call site
 * write one by hand. `retrievedAt` is when the bytes actually arrived — served
 * from cache, it stays the original time, and `stale` says so.
 */

export type Provenance = {
  /** Publisher, as it should read on the stamp. */
  source: string;
  /** Which endpoint family produced this, e.g. "geocoder". */
  api: string;
  /** ISO timestamp of the upstream response that produced this payload. */
  retrievedAt: string;
  /** Same moment, formatted for the stamp. */
  retrievedDisplay: string;
  /** Request URL with any API key stripped. */
  url?: string;
};

export type CivicErrorKind =
  | "network"
  | "timeout"
  | "rate_limited"
  | "not_found"
  | "upstream"
  | "bad_input";

export type CivicError = {
  kind: CivicErrorKind;
  /** Sentence fit for an AlertBanner. Never a raw stack or status line. */
  message: string;
  status?: number;
};

export type CivicResult<T> =
  | {
      ok: true;
      data: T;
      provenance: Provenance;
      /**
       * True when the upstream call failed and this is the last good payload.
       * The provenance still carries the original retrieval time, so a stale
       * answer can never present itself as fresh.
       */
      stale: boolean;
      /** Set with `stale`, explaining what went wrong upstream. */
      staleReason?: CivicError;
    }
  | { ok: false; error: CivicError; provenance: Provenance };

/* -------------------------------------------------------------------------- */
/* Census geocoder                                                            */
/* -------------------------------------------------------------------------- */

export type DistrictLookup =
  | {
      kind: "match";
      /** Census's normalized address — it may differ from what was typed. */
      matchedAddress: string;
      state: string;
      stateFips: string;
      districtNumber: string;
      /** "NY-02", or "NY-AL" for at-large. */
      district: string;
      congress: number;
    }
  | {
      /**
       * A ZIP alone. Census returns no match, and we do not fabricate a
       * centroid: ZIPs routinely span districts, so the honest answer is to ask
       * for a street address rather than to guess one.
       */
      kind: "needs_address";
      message: string;
    }
  | { kind: "no_match"; message: string };

/* -------------------------------------------------------------------------- */
/* Congress.gov                                                               */
/* -------------------------------------------------------------------------- */

export type CongressMember = {
  bioguideId: string;
  name: string;
  /** "Rep. Andrew R. Garbarino" — chamber-prefixed display form. */
  displayName: string;
  party?: string;
  state: string;
  district?: number;
  chamber: "House" | "Senate";
  /** "NY-02" or "NY-Sen". */
  districtLabel: string;
  url?: string;
  imageUrl?: string;
};

export type BillSummary = {
  congress: number;
  type: string;
  number: string;
  /** "H.R. 118" */
  label: string;
  title: string;
  originChamber: "House" | "Senate";
  stage: "Introduced" | "Committee" | "Floor" | "Passed" | "Enacted";
  latestActionText: string;
  latestActionDate: string;
  updatedDisplay: string;
};

export type ChamberVote = {
  roll: string;
  question: string;
  result: string;
  date: string;
  legislationLabel?: string;
  sourceUrl?: string;
};

/* -------------------------------------------------------------------------- */
/* Federal Register                                                           */
/* -------------------------------------------------------------------------- */

export type CommentPeriod = {
  documentNumber: string;
  title: string;
  agencies: string[];
  publicationDate: string;
  /** ISO date the comment window closes, when the document has one. */
  commentsCloseOn?: string;
  htmlUrl: string;
};
