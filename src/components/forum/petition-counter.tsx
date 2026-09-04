import { SegmentedMeter } from "./segmented-meter";
import { formatCount } from "@/lib/utils";

const SEGMENTS = 20;

type PetitionCounterProps = {
  current: number;
  goal?: number;
  updatedAt: string;
};

export function PetitionCounter({ current, goal, updatedAt }: PetitionCounterProps) {
  const pct = goal ? Math.min(100, Math.round((current / goal) * 100)) : 0;
  return (
    <div>
      <p className="m-0 font-display text-3xl font-semibold tabular-nums text-ink">
        {formatCount(current)}
        <span className="ml-2 text-base font-normal text-ink-muted">signatures</span>
      </p>
      {goal ? (
        <div className="mt-2">
          <SegmentedMeter
            segments={SEGMENTS}
            filled={Math.round((pct / 100) * SEGMENTS)}
            tone="brand"
            label={`${pct}% of the ${formatCount(goal)} signature goal`}
          />
          <p className="mt-1 mb-0 text-xs text-ink-muted">
            Goal {formatCount(goal)} · Updated {updatedAt}
          </p>
        </div>
      ) : (
        <p className="mt-1 mb-0 text-xs text-ink-muted">Updated {updatedAt}</p>
      )}
    </div>
  );
}
