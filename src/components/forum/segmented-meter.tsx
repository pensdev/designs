import { cn } from "@/lib/utils";

type SegmentedMeterProps = {
  segments: number;
  /** How many leading segments read as filled. */
  filled: number;
  /** Accessible description of the value, e.g. "Stage 3 of 5: Floor". */
  label: string;
  /** Optional per-segment tooltip, used where segments are named stages. */
  titles?: readonly string[];
  tone?: "brand" | "official";
  className?: string;
};

/**
 * The system's only progress language: flat segments, hairline gaps, square
 * ends. Stages and quantities look the same so a filled bar always reads as a
 * count of something, never as a marketing gauge.
 */
export function SegmentedMeter({
  segments,
  filled,
  label,
  titles,
  tone = "official",
  className,
}: SegmentedMeterProps) {
  return (
    <div role="img" aria-label={label} className={cn("flex h-1.5 gap-px", className)}>
      {Array.from({ length: segments }, (_, i) => (
        <span
          key={i}
          title={titles?.[i]}
          className={cn(
            "flex-1",
            i < filled
              ? tone === "brand"
                ? "bg-brand"
                : "bg-official"
              : "bg-canvas-subtle",
          )}
        />
      ))}
    </div>
  );
}
