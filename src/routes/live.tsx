import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  AlertBanner,
  BillStatus,
  Callout,
  Card,
  Identifier,
  ProvenanceStamp,
  Record,
  RecordSection,
  RepLookup,
  RollCallTable,
  Section,
  type LookupOutcome,
  type VotePosition,
} from "@/components/forum";
import {
  billSummaryFn,
  formatDate,
  lookupDistrictFn,
  membersForDistrictFn,
  openCommentPeriodsFn,
  recentHouseVotesFn,
  type BillSummary,
  type ChamberVote,
  type CivicResult,
  type CommentPeriod,
  type Provenance,
} from "@/lib/civic";

export const Route = createFileRoute("/live")({ component: LivePage });

/* -------------------------------------------------------------------------- */
/* Shared plumbing                                                            */
/* -------------------------------------------------------------------------- */

type Async<T> = { state: "loading" } | { state: "done"; result: CivicResult<T> };

function useCivic<T>(load: () => Promise<CivicResult<T>>, deps: unknown[] = []) {
  const [value, setValue] = useState<Async<T>>({ state: "loading" });
  useEffect(() => {
    let live = true;
    setValue({ state: "loading" });
    load().then((result) => {
      if (live) setValue({ state: "done", result });
    });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return value;
}

function stamp(provenance: Provenance) {
  return {
    source: provenance.source,
    retrieved: provenance.retrievedDisplay,
    api: provenance.api,
  };
}

/** Every live panel reports the same three states, so none of them can fake one. */
function Panel<T>({
  value,
  children,
}: {
  value: Async<T>;
  children: (data: T, provenance: Provenance, stale: boolean) => React.ReactNode;
}) {
  if (value.state === "loading") {
    return (
      <Callout rule="var(--forum-line-strong)">
        <p className="m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase">Reading</p>
        <p className="mt-1 mb-0 text-sm text-ink-muted">Waiting on the source.</p>
      </Callout>
    );
  }
  if (!value.result.ok) {
    return (
      <div className="grid gap-3">
        <AlertBanner tone="danger" title="Could not read from the source.">
          {value.result.error.message}
        </AlertBanner>
        <ProvenanceStamp {...stamp(value.result.provenance)} />
      </div>
    );
  }
  return (
    <div className="grid gap-3">
      {value.result.stale ? (
        <AlertBanner tone="warning" title="Showing the last good response.">
          {value.result.staleReason?.message} The stamp below is when this data was actually
          retrieved, not now.
        </AlertBanner>
      ) : null}
      {children(value.result.data, value.result.provenance, value.result.stale)}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** Census + Congress.gov, chained: address → district → sitting members. */
async function resolveLive(query: string): Promise<LookupOutcome> {
  const lookup = await lookupDistrictFn({ data: query });

  if (!lookup.ok) {
    return {
      status: "error",
      title: "The geocoder could not be reached.",
      detail: lookup.error.message,
      source: stamp(lookup.provenance),
    };
  }

  const found = lookup.data;
  if (found.kind !== "match") {
    return {
      status: "notice",
      title:
        found.kind === "needs_address"
          ? "A ZIP alone cannot resolve a district."
          : "No district matched that address.",
      detail: found.message,
      source: stamp(lookup.provenance),
    };
  }

  const members = await membersForDistrictFn({
    data: { congress: found.congress, state: found.state, district: found.districtNumber },
  });

  return {
    status: "match",
    match: {
      query,
      matchedAddress: found.matchedAddress,
      district: found.district,
      precision: "rooftop",
      method: `Census geocoder · ${found.congress}th Congress`,
      asOf: lookup.provenance.retrievedDisplay,
      officials: members.ok
        ? members.data.map((member) => ({
            name: member.displayName,
            office:
              member.chamber === "Senate"
                ? `U.S. Senate · ${member.state}`
                : `U.S. House · District ${member.district} of ${member.state}`,
            district: member.districtLabel,
            party: member.party,
            asOf: members.provenance.retrievedDisplay,
            source: members.provenance.source,
            api: members.provenance.api,
          }))
        : [],
    },
  };
}

/* -------------------------------------------------------------------------- */

function LivePage() {
  const bill = useCivic<BillSummary>(() =>
    billSummaryFn({ data: { congress: 119, type: "hr", number: "1" } }),
  );
  const votes = useCivic<ChamberVote[]>(() => recentHouseVotesFn({ data: 6 }));
  const comments = useCivic<CommentPeriod[]>(() => openCommentPeriodsFn({ data: 4 }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mt-0 mb-2 font-display text-4xl">Live data</h1>
      <p className="mt-0 mb-10 max-w-2xl text-ink-muted">
        The same components, fed by the Census geocoder, the Congress.gov API, and the Federal
        Register. Every provenance stamp on this page is generated from the response that produced
        the data above it — nothing here is a string literal.
      </p>

      <Section
        label="Census"
        title="Address to district"
        lede="A street address resolves to exactly one district and the trail shows how. A ZIP resolves to nothing, and the component says so rather than guessing a centroid."
        className="pb-12"
      >
        <RepLookup
          resolve={resolveLive}
          initialQuery="12 Bay Shore Rd, Babylon NY"
          resolveOnMount
        />
      </Section>

      <Section
        label="Congress.gov"
        title="Bill status"
        lede="Stage is derived conservatively from the latest action: anything the mapping cannot place with confidence stays at Introduced rather than advancing a bill it has not seen advance."
        className="pb-12"
      >
        <Panel value={bill}>
          {(data, provenance) => (
            <div className="grid gap-3">
              <BillStatus
                number={data.label}
                title={data.title}
                stage={data.stage}
                chamber={data.originChamber}
                updatedAt={provenance.retrievedDisplay}
              />
              <Callout rule="var(--forum-line-strong)">
                <p className="m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase">
                  Latest action
                </p>
                <p className="mt-1 mb-0 text-sm text-ink">
                  {data.latestActionDate ? `${formatDate(data.latestActionDate)} — ` : ""}
                  {data.latestActionText}
                </p>
              </Callout>
            </div>
          )}
        </Panel>
      </Section>

      <Section
        label="Congress.gov"
        title="Recent House roll calls"
        lede="Chamber results, not one member's positions. Reading a member's Yea or Nay costs an extra request per roll call, so the table shows the chamber outcome and is labelled as such."
        className="pb-12"
      >
        <Panel value={votes}>
          {(data, provenance) => (
            <RollCallTable
              votes={[...data]
                .sort((a, b) => b.date.localeCompare(a.date))
                .map(
                  (vote): VotePosition => ({
                    roll: vote.roll,
                    question:
                      vote.legislationLabel && !vote.question.includes(vote.legislationLabel)
                        ? `${vote.question} (${vote.legislationLabel})`
                        : vote.question,
                    position: vote.result,
                    date: vote.date,
                  }),
                )}
              density="compact"
              positionHeader="Result"
              source={provenance.source}
              retrieved={provenance.retrievedDisplay}
              api={provenance.api}
            />
          )}
        </Panel>
      </Section>

      <Section
        label="Federal Register"
        title="Open comment periods"
        lede="The one countdown this system permits. A comment deadline is a real regulatory date published by the agency, and missing it genuinely forecloses the act."
        className="pb-12"
      >
        <Panel value={comments}>
          {(data, provenance) => (
            <div className="grid gap-3">
              <Record>
                <RecordSection className="flex items-center justify-between gap-3 text-xs text-ink-muted">
                  <span>Proposed rules open for comment</span>
                  <Identifier>{data.length} shown</Identifier>
                </RecordSection>
                {data.map((doc) => (
                  <RecordSection key={doc.documentNumber} className="grid gap-1">
                    <a
                      href={doc.htmlUrl}
                      className="text-sm leading-snug font-medium text-accent underline underline-offset-2"
                    >
                      {doc.title}
                    </a>
                    <p className="m-0 text-xs leading-snug text-ink-muted">
                      {doc.agencies.join(", ")}
                    </p>
                    <p className="m-0 font-mono text-xs tabular-nums text-ink">
                      Comments close {doc.commentsCloseOn ? formatDate(doc.commentsCloseOn) : "—"}
                    </p>
                  </RecordSection>
                ))}
                <RecordSection>
                  <ProvenanceStamp {...stamp(provenance)} />
                </RecordSection>
              </Record>
            </div>
          )}
        </Panel>
      </Section>

      <Section label="Notes" title="What is not wired" className="pb-12">
        <Card>
          <p className="mt-0 mb-3 text-sm leading-relaxed text-ink-muted">
            Race results, polling places, and ballot items stay on sample data. AP Elections is a
            paid feed, and Google Civic retired its representative and voter-info endpoints, so
            there is no free national source for any of the three.
          </p>
          <p className="m-0 text-sm leading-relaxed text-ink-muted">
            Congress.gov runs on api.data.gov&rsquo;s shared <code className="font-mono">DEMO_KEY</code>{" "}
            unless <code className="font-mono">CONGRESS_API_KEY</code> is set on the server, which
            throttles at roughly 30 requests an hour per IP. Responses are cached, and a throttled
            call falls back to the last good payload with its original timestamp.
          </p>
        </Card>
      </Section>
    </div>
  );
}
