import { formatCount } from "@/lib/utils";

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
          <div className="h-1.5 overflow-hidden rounded-full bg-canvas-subtle">
            <div
              className="h-full rounded-full bg-brand"
              style={{ width: `${pct}%` }}
            />
          </div>
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
