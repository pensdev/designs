import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Identifier({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-record border border-line bg-canvas px-1.5 py-0.5 font-mono text-xs font-medium tabular-nums text-ink",
        className,
      )}
      {...props}
    />
  );
}
