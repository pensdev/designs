import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";
import { SegmentedMeter } from "./segmented-meter";
import { formatCount } from "@/lib/utils";

const SEGMENTS = 20;

export type RaceCandidate = {
  name: string;
  party?: string;
  votes: number;
};

type RaceResultProps = {
  race: string;
  candidates: readonly RaceCandidate[];
  reportingPct: number;
  /** Present only once an outlet has actually called it. Never inferred from the margin. */
  called?: { winner: string; by: string; at: string };
  source: string;
  api: string;
  updatedAt: string;
};

/**
 * Returns with AP-style restraint.
 *
 * Two rules do the work. A race is uncalled until a named outlet calls it — the
 * component will not infer a winner from a margin, however large, and the call
 * carries the name of whoever made it. And bars are never coloured by party:
 * this system already holds that party is optional chrome, and a red-vs-blue
 * bar at 12% reporting reads as a result when it is a fragment of one.
 */
export function RaceResult({
  race,
  candidates,
  reportingPct,
  called,
  source,
  api,
  updatedAt,
}: RaceResultProps) {
  const total = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
  const ranked = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <Record>
      <RecordSection className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-ink-muted">{race}</span>
        {called ? (
          <Identifier tone="info">Called</Identifier>
        ) : (
          <Identifier tone="muted">Not called</Identifier>
        )}
      </RecordSection>

      <RecordSection>
        <SegmentedMeter
          segments={SEGMENTS}
          filled={Math.round((reportingPct / 100) * SEGMENTS)}
          label={`${reportingPct}% of precincts reporting`}
        />
        <p className="mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted">
          {reportingPct}% of precincts reporting · {formatCount(total)} votes counted
        </p>
      </RecordSection>

      <RecordSection className="grid gap-3">
        {ranked.map((candidate) => {
          const share = total > 0 ? (candidate.votes / total) * 100 : 0;
          return (
            <div key={candidate.name}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="m-0 text-sm leading-snug text-ink">
                  {candidate.name}
                  {candidate.party ? (
                    <span className="ml-1.5 text-xs text-ink-subtle">{candidate.party}</span>
                  ) : null}
                </p>
                <p className="m-0 font-mono text-dense tabular-nums text-ink">
                  {formatCount(candidate.votes)}
                  <span className="ml-2 text-ink-muted">{share.toFixed(1)}%</span>
                </p>
              </div>
              <SegmentedMeter
                className="mt-1.5"
                segments={SEGMENTS}
                filled={Math.round((share / 100) * SEGMENTS)}
                label={`${candidate.name}: ${share.toFixed(1)} percent`}
              />
            </div>
          );
        })}
      </RecordSection>

      <RecordSection>
        {called ? (
          <p className="m-0 text-sm leading-snug text-ink">
            Called for {called.winner} by {called.by} at {called.at}.
          </p>
        ) : (
          <p className="m-0 text-sm leading-snug text-ink-muted">
            Leading is not winning. No outlet has called this race, and margins move as late,
            provisional, and mail ballots are counted.
          </p>
        )}
      </RecordSection>

      <RecordSection>
        <ProvenanceStamp source={source} retrieved={updatedAt} api={api} />
      </RecordSection>
    </Record>
  );
}
