import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const identifierVariants = cva(
  "inline-flex items-center rounded-record border bg-canvas px-1.5 py-0.5 font-mono text-xs font-medium tabular-nums",
  {
    variants: {
      tone: {
        neutral: "border-line text-ink",
        info: "border-info/45 text-info",
        success: "border-success/45 text-success",
        warning: "border-warning/45 text-warning",
        danger: "border-danger/45 text-danger",
        muted: "border-line text-ink-subtle",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

/**
 * The only small-label component in the system. Identifiers (NY-02, S. 214) and
 * statuses (Introduced, Recorded) share one hairline box — status is a tone on
 * the same shape, never a filled pill.
 */
export function Identifier({
  className,
  tone,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof identifierVariants>) {
  return <span className={cn(identifierVariants({ tone }), className)} {...props} />;
}

export { identifierVariants };
