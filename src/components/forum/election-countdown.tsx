import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";
import { cn } from "@/lib/utils";

export type ElectionMilestone = {
  label: string;
  /** ISO date, used for the day count. */
  iso: string;
  display: string;
  /** Where the deadline differs by method — mail vs in person, etc. */
  note?: string;
};

type ElectionCountdownProps = {
  election: string;
  /** Reference date the counts are computed from, so the record is reproducible. */
  asOf: string;
  asOfDisplay: string;
  milestones: readonly ElectionMilestone[];
  source: string;
  api: string;
};

const DAY = 86_400_000;

function daysBetween(fromIso: string, toIso: string) {
  return Math.round((Date.parse(toIso) - Date.parse(fromIso)) / DAY);
}

/**
 * Dated election milestones, counted in days and nothing smaller.
 *
 * No ticking clock, no seconds, no red as the date approaches, no bar draining
 * to empty. A registration deadline is a fact with a date on it, and the honest
 * unit is days. Passed milestones stay on the record, dimmed rather than
 * deleted, because "did I miss it?" is the question people actually arrive with.
 */
export function ElectionCountdown({
  election,
  asOf,
  asOfDisplay,
  milestones,
  source,
  api,
}: ElectionCountdownProps) {
  return (
    <Record>
      <RecordSection className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
        <span>Key dates</span>
        <Identifier>{election}</Identifier>
      </RecordSection>

      {milestones.map((milestone) => {
        const days = daysBetween(asOf, milestone.iso);
        const passed = days < 0;
        return (
          <RecordSection
            key={milestone.label}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1"
          >
            <p
              className={cn(
                "m-0 text-sm leading-snug",
                passed ? "text-ink-subtle" : "font-medium text-ink",
              )}
            >
              {milestone.label}
            </p>
            <div className="flex shrink-0 items-center gap-2 justify-self-end">
              <span
                className={cn(
                  "font-mono text-dense tabular-nums",
                  passed ? "text-ink-subtle" : "text-ink",
                )}
              >
                {milestone.display}
              </span>
              {passed ? (
                <Identifier tone="muted">passed</Identifier>
              ) : days === 0 ? (
                <Identifier tone="info">today</Identifier>
              ) : (
                <Identifier>
                  in {days} {days === 1 ? "day" : "days"}
                </Identifier>
              )}
            </div>
            {milestone.note ? (
              <p className="col-start-1 m-0 text-xs leading-snug text-ink-muted">
                {milestone.note}
              </p>
            ) : null}
          </RecordSection>
        );
      })}

      <RecordSection>
        <ProvenanceStamp source={source} retrieved={asOfDisplay} api={api} />
      </RecordSection>
    </Record>
  );
}
