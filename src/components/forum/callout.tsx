import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  /** Color of the rule down the left edge. */
  rule: string;
  children: ReactNode;
};

/**
 * The ruled callout: hairline box, no fill, a colored rule down the left edge.
 * Root of the notice family — provenance stamps and alerts are the same shape,
 * separated only by the color of the rule.
 */
export function Callout({ rule, className, style, children, ...props }: CalloutProps) {
  const ruled: CSSProperties = { borderLeftWidth: 3, borderLeftColor: rule, ...style };
  return (
    <div
      className={cn("rounded-record border border-line bg-canvas px-3 py-2 text-ink", className)}
      style={ruled}
      {...props}
    >
      {children}
    </div>
  );
}
