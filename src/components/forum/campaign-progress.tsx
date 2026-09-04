import { Identifier } from "./identifier";
import { SegmentedMeter } from "./segmented-meter";
import { formatCount } from "@/lib/utils";

const SEGMENTS = 20;

type CampaignProgressProps = {
  current: number;
  goal: number;
  unit?: string;
  /** Plain rate of arrival, e.g. 412 in "the last 7 days". */
  recentCount?: number;
  recentWindow?: string;
  /** What actually happens when the goal is reached. */
  atGoal: string;
  updatedAt: string;
};

/**
 * A goal bar that refuses to manufacture urgency.
 *
 * No countdown, no "only 3 spots left", no bar engineered to sit at 94%, no
 * colour change as the number climbs. It states the count, the goal, the rate
 * things are actually arriving, and what happens when the goal is met —
 * including the fact that the act still counts afterwards, which scarcity
 * framing normally hides.
 */
export function CampaignProgress({
  current,
  goal,
  unit = "signatures",
  recentCount,
  recentWindow,
  atGoal,
  updatedAt,
}: CampaignProgressProps) {
  const pct = Math.min(100, Math.round((current / goal) * 100));
  const met = current >= goal;

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="m-0 font-display text-3xl font-semibold tabular-nums text-ink">
          {formatCount(current)}
          <span className="ml-2 text-base font-normal text-ink-muted">{unit}</span>
        </p>
        {met ? <Identifier tone="success">Goal met</Identifier> : null}
      </div>

      <div className="mt-3">
        <SegmentedMeter
          segments={SEGMENTS}
          filled={Math.round((pct / 100) * SEGMENTS)}
          tone="brand"
          label={`${pct}% of the ${formatCount(goal)} ${unit} goal`}
        />
        <p className="mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted">
          {pct}% of {formatCount(goal)} · updated {updatedAt}
        </p>
      </div>

      {recentCount != null && recentWindow ? (
        <p className="mt-3 mb-0 text-sm text-ink-muted">
          {formatCount(recentCount)} arrived in {recentWindow}.
        </p>
      ) : null}

      <p className="mt-2 mb-0 border-t border-line pt-2 text-sm text-ink-muted">{atGoal}</p>
    </div>
  );
}
