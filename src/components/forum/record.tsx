import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RecordDensity = "regular" | "compact";

type RecordProps = HTMLAttributes<HTMLDivElement> & {
  density?: RecordDensity;
  children: ReactNode;
};

export function Record({ density = "regular", className, children, ...props }: RecordProps) {
  return (
    <div
      data-density={density}
      className={cn(
        "overflow-hidden rounded-record border border-line bg-canvas-elevated leading-snug shadow-none tabular-nums",
        density === "compact" && "text-dense",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function RecordSection({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-b border-line px-4 py-3 last:border-b-0 [[data-density=compact]_&]:px-3 [[data-density=compact]_&]:py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
