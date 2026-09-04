import { useCallback, useEffect, useState } from "react";
import { AlertBanner } from "./alert-banner";
import { Button } from "./button";
import { Card } from "./card";
import { FieldRow } from "./field-row";
import { Input } from "./field";
import { Identifier } from "./identifier";
import { OfficialCard, type Official } from "./official-card";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";

export type MatchPrecision = "rooftop" | "centroid";

export type DistrictMatch = {
  /** Exactly what the person typed, echoed back unaltered. */
  query: string;
  /** What the geocoder actually matched, when it differs from the query. */
  matchedAddress?: string;
  district: string;
  precision: MatchPrecision;
  method: string;
  asOf: string;
  officials: Official[];
};

/**
 * What a lookup can come back with. A notice is a legitimate answer — "a ZIP
 * cannot resolve to a district" is information, not a failure — so it is kept
 * distinct from an error, which means the source could not be read at all.
 */
export type LookupOutcome =
  | { status: "match"; match: DistrictMatch }
  | { status: "notice"; title: string; detail: string; source?: ProvenanceProps }
  | { status: "error"; title: string; detail: string; source?: ProvenanceProps };

type ProvenanceProps = { source: string; retrieved: string; api: string };

type RepLookupProps = {
  /** Sync for sample data, async for a live source — the component takes both. */
  resolve: (query: string) => LookupOutcome | Promise<LookupOutcome>;
  initialQuery?: string;
  /** Resolve on mount, so a live demo shows a real answer without a click. */
  resolveOnMount?: boolean;
};

const PRECISION_LABEL: Record<MatchPrecision, string> = {
  rooftop: "Rooftop match",
  centroid: "ZIP centroid",
};

/**
 * Address → district → member, with the middle step shown instead of hidden.
 *
 * Every civic product does this lookup and almost none admit it can be wrong.
 * The resolution trail names the method and the precision, echoes back the
 * address the geocoder actually matched when it differs from what was typed,
 * and any caveat lands before the member card rather than after — acting on the
 * wrong member is the real failure mode.
 */
export function RepLookup({ resolve, initialQuery = "", resolveOnMount }: RepLookupProps) {
  const [query, setQuery] = useState(initialQuery);
  const [outcome, setOutcome] = useState<LookupOutcome | null>(null);
  const [pending, setPending] = useState(false);

  const lookup = useCallback(
    async (value: string) => {
      setPending(true);
      try {
        setOutcome(await resolve(value));
      } finally {
        setPending(false);
      }
    },
    [resolve],
  );

  useEffect(() => {
    if (!resolveOnMount) return;
    void lookup(initialQuery);
    // Mount-only: re-running on a new `resolve` identity would refetch on every
    // parent render, which for a live source means a request per keystroke.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolveOnMount, initialQuery]);

  const match = outcome?.status === "match" ? outcome.match : null;

  return (
    <div className="grid gap-4">
      <Card>
        <h3 className="mt-0 mb-1 font-display text-2xl text-ink">Find your representative</h3>
        <p className="mt-0 mb-4 text-sm leading-snug text-ink-muted">
          A street address resolves to one district. A ZIP code does not.
        </p>
        <FieldRow
          id="rep-address"
          label="Street address"
          action={
            <Button type="button" variant="official" loading={pending} onClick={() => void lookup(query)}>
              Look up
            </Button>
          }
        >
          <Input
            id="rep-address"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") void lookup(query);
            }}
            placeholder="12 Bay Shore Rd, Babylon NY"
            autoComplete="street-address"
          />
        </FieldRow>
      </Card>

      {outcome?.status === "notice" || outcome?.status === "error" ? (
        <div className="grid gap-3">
          <AlertBanner
            tone={outcome.status === "error" ? "danger" : "warning"}
            title={outcome.title}
          >
            {outcome.detail}
          </AlertBanner>
          {outcome.source ? <ProvenanceStamp {...outcome.source} /> : null}
        </div>
      ) : null}

      {match ? (
        <>
          <Record>
            <RecordSection className="flex items-center justify-between gap-3 text-xs text-ink-muted">
              <span>Resolution</span>
              <Identifier>{match.district}</Identifier>
            </RecordSection>
            <RecordSection>
              <dl className="m-0 grid grid-cols-[8rem_1fr] gap-y-2 text-dense">
                <dt className="text-ink-muted">Address entered</dt>
                <dd className="m-0 font-mono tabular-nums text-ink">{match.query}</dd>
                {match.matchedAddress && match.matchedAddress !== match.query ? (
                  <>
                    <dt className="text-ink-muted">Matched as</dt>
                    <dd className="m-0 font-mono tabular-nums text-ink">{match.matchedAddress}</dd>
                  </>
                ) : null}
                <dt className="text-ink-muted">Matched district</dt>
                <dd className="m-0 font-mono tabular-nums text-ink">{match.district}</dd>
                <dt className="text-ink-muted">Match precision</dt>
                <dd className="m-0">
                  <Identifier tone={match.precision === "rooftop" ? "success" : "warning"}>
                    {PRECISION_LABEL[match.precision]}
                  </Identifier>
                </dd>
                <dt className="text-ink-muted">Method</dt>
                <dd className="m-0 font-mono text-ink">{match.method}</dd>
              </dl>
            </RecordSection>
          </Record>

          {match.precision === "centroid" ? (
            <AlertBanner tone="warning" title="This ZIP spans more than one district.">
              The member below is the best guess for the centre of {match.query}. Enter a street
              address before calling, writing, or citing this district.
            </AlertBanner>
          ) : null}

          {match.officials.map((official) => (
            <OfficialCard key={official.name} official={official} />
          ))}
        </>
      ) : null}
    </div>
  );
}
