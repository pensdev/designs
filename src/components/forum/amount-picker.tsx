import { cn, formatUsd } from "@/lib/utils";
import { Input } from "./field";

type AmountPickerProps = {
  amounts: number[];
  value: number | "other";
  otherValue: string;
  suggested?: number;
  onChange: (value: number | "other") => void;
  onOtherChange: (value: string) => void;
};

export function AmountPicker({
  amounts,
  value,
  otherValue,
  suggested,
  onChange,
  onOtherChange,
}: AmountPickerProps) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Contribution amount">
        {amounts.map((amount) => {
          const pressed = value === amount;
          return (
            <button
              key={amount}
              type="button"
              aria-pressed={pressed}
              onClick={() => onChange(amount)}
              className={cn(
                "flex min-h-12 flex-col items-center justify-center rounded-md border px-2 py-2 font-semibold tabular-nums",
                "transition-[background-color,border-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]",
                pressed
                  ? "border-brand bg-official-soft text-navy-900 dark:text-ink"
                  : "border-line-strong bg-canvas text-ink hover:bg-canvas-subtle",
              )}
            >
              {formatUsd(amount)}
              {suggested === amount ? (
                <span className="text-xs font-medium text-ink-muted">Suggested</span>
              ) : null}
            </button>
          );
        })}
        <button
          type="button"
          aria-pressed={value === "other"}
          onClick={() => onChange("other")}
          className={cn(
            "flex min-h-12 items-center justify-center rounded-md border px-2 font-semibold",
            "transition-[background-color,border-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]",
            value === "other"
              ? "border-brand bg-official-soft text-navy-900 dark:text-ink"
              : "border-line-strong bg-canvas text-ink hover:bg-canvas-subtle",
          )}
        >
          Other
        </button>
      </div>
      {value === "other" ? (
        <div className="mt-3">
          <label htmlFor="other-amount" className="sr-only">
            Other amount in dollars
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-ink-muted">
              $
            </span>
            <Input
              id="other-amount"
              inputMode="decimal"
              className="pl-7"
              value={otherValue}
              onChange={(e) => onOtherChange(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder="0"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
