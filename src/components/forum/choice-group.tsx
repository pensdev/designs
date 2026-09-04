import { useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

type Choice<T extends string> = { value: T; label: string };

type ChoiceGroupProps<T extends string> = {
  label: string;
  value: T;
  options: readonly Choice<T>[];
  onChange: (value: T) => void;
  className?: string;
};

const STEP: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

/**
 * Two-or-three position segmented control. Squared, hairline, no tray — the
 * system has no pill switches, because a binary choice in a civic flow should
 * name both of its states.
 */
export function ChoiceGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: ChoiceGroupProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.findIndex((o) => o.value === value);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = STEP[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (selected + step + options.length) % options.length;
    onChange(options[next].value);
    ref.current?.querySelectorAll("button")[next]?.focus();
  }

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cn("flex overflow-hidden rounded-record border border-line-strong", className)}
    >
      {options.map((option, i) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-11 flex-1 px-3 text-sm font-medium",
              "transition-[background-color,color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]",
              i > 0 && "border-l border-line-strong",
              isSelected
                ? "bg-brand text-on-brand"
                : "bg-canvas text-ink-muted hover:bg-canvas-subtle hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
