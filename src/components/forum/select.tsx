import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption<T extends string> = {
  value: T;
  label: string;
  /** Optional second line, set in the muted voice. */
  hint?: string;
};

type SelectProps<T extends string> = {
  id?: string;
  value: T;
  onValueChange: (value: T) => void;
  options: readonly SelectOption<T>[];
  placeholder?: string;
  size?: "sm" | "md";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

const TRIGGER_SIZE = {
  sm: "h-10 min-h-10 text-sm",
  md: "h-11 min-h-11 text-sm",
} as const;

/**
 * The system's dropdown. Built on Radix so keyboard, typeahead, and collision
 * handling are correct, and styled in the record register: hairline box, 2px
 * radius, no pill, gold marking the chosen row the way it marks the active nav
 * item. The panel is the one surface allowed a shadow — it floats over content,
 * so it has to separate from it.
 */
export function Select<T extends string>({
  id,
  value,
  onValueChange,
  options,
  placeholder = "Select…",
  size = "md",
  disabled,
  className,
  ...aria
}: SelectProps<T>) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectPrimitive.Trigger
        id={id}
        {...aria}
        className={cn(
          "group flex w-full items-center justify-between gap-2",
          "rounded-record border border-line-strong bg-canvas px-3 text-ink",
          "transition-[border-color,background-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]",
          "hover:bg-canvas-subtle",
          "data-[state=open]:border-accent",
          "data-[placeholder]:text-ink-subtle",
          "disabled:cursor-not-allowed disabled:opacity-50",
          TRIGGER_SIZE[size],
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            className="size-4 shrink-0 text-ink-subtle transition-transform duration-[var(--duration-swift)] ease-[var(--ease-standard)] group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={4}
          className={cn(
            "select-panel z-50 overflow-hidden",
            "rounded-record border border-line-strong bg-canvas-elevated shadow-(--shadow-2)",
            "max-h-(--radix-select-content-available-height)",
            "w-(--radix-select-trigger-width)",
          )}
        >
          <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center border-b border-line bg-canvas-elevated text-ink-subtle">
            <ChevronUp className="size-3.5" aria-hidden="true" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-0">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "relative flex cursor-pointer items-center justify-between gap-3",
                  "border-l-2 border-transparent border-b border-b-line px-3 py-2.5 text-sm text-ink last:border-b-0",
                  "outline-none select-none",
                  "data-[highlighted]:bg-canvas-subtle",
                  "data-[state=checked]:border-l-gold data-[state=checked]:font-medium",
                  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}
              >
                <span className="min-w-0">
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  {option.hint ? (
                    <span className="mt-0.5 block text-xs font-normal text-ink-muted">
                      {option.hint}
                    </span>
                  ) : null}
                </span>
                <SelectPrimitive.ItemIndicator asChild>
                  <Check className="size-3.5 shrink-0 text-gold-700 dark:text-gold-400" aria-hidden="true" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center border-t border-line bg-canvas-elevated text-ink-subtle">
            <ChevronDown className="size-3.5" aria-hidden="true" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
