import { cloneElement, isValidElement } from "react";
import type {
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

/** Attach the hint/error ids to the control so they are announced, not just rendered. */
function describe(children: ReactNode, describedBy?: string) {
  if (!describedBy || !isValidElement(children)) return children;
  const element = children as ReactElement<{ "aria-describedby"?: string }>;
  const existing = element.props["aria-describedby"];
  return cloneElement(element, {
    "aria-describedby": existing ? `${existing} ${describedBy}` : describedBy,
  });
}

export function Field({ id, label, hint, error, optional, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-ink-subtle">optional</span>
        ) : null}
      </label>
      {describe(children, error ? errorId : hintId)}
      {hint && !error ? (
        <p id={hintId} className="text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlClass =
  "w-full rounded-md border bg-canvas-elevated px-3 text-ink placeholder:text-ink-subtle";

export function Input({
  className,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      className={cn(
        controlClass,
        "h-11 min-h-11",
        error ? "border-danger" : "border-line-strong",
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

export function Textarea({
  className,
  error,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return (
    <textarea
      className={cn(
        controlClass,
        "min-h-24 py-2",
        error ? "border-danger" : "border-line-strong",
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}
