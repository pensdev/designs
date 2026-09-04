import { cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldRowProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  /** Action that sits beside the control — a Button, sized by the row, not itself. */
  action: ReactNode;
  /** Width of the action column from the sm breakpoint up. */
  actionClassName?: string;
  children: ReactNode;
};

/**
 * A labelled control with an action beside it — the lookup row.
 *
 * Two things are enforced here rather than left to each call site. The action
 * is pinned to the 44px form-control height, because `size="lg"` reads
 * --tone-btn-lg, which is theme-variable (48px civic, 56px crimson, 50px
 * forest) and would misalign the row by a different amount per brand. And the
 * label sits above the whole row while hint and error sit below it, so the
 * control and the action are siblings on one baseline — aligning their bottom
 * edges instead would break the moment a hint appeared under the input.
 */
/** Attach the hint/error ids to the control so they are announced, not just rendered. */
function describe(children: ReactNode, describedBy?: string) {
  if (!describedBy || !isValidElement(children)) return children;
  const element = children as ReactElement<{ "aria-describedby"?: string }>;
  const existing = element.props["aria-describedby"];
  return cloneElement(element, {
    "aria-describedby": existing ? `${existing} ${describedBy}` : describedBy,
  });
}

export function FieldRow({
  id,
  label,
  hint,
  error,
  optional,
  action,
  actionClassName = "sm:w-40",
  children,
}: FieldRowProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-ink-subtle">optional</span> : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">{describe(children, error ? errorId : hintId)}</div>
        <div
          className={cn(
            "shrink-0 [&>button]:h-11 [&>button]:min-h-11 [&>button]:w-full",
            actionClassName,
          )}
        >
          {action}
        </div>
      </div>

      {hint && !error ? (
        <p id={hintId} className="mt-1.5 mb-0 text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 mb-0 text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
