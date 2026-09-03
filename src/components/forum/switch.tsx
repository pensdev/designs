import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

type SwitchProps = {
  id?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  "aria-labelledby"?: string;
};

export function Switch({ id, checked, onCheckedChange, disabled, ...rest }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full border border-line-strong bg-canvas-subtle",
        "data-[state=checked]:border-brand data-[state=checked]:bg-brand",
        "disabled:cursor-not-allowed disabled:opacity-50",
      )}
      {...rest}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block size-5 translate-x-1 rounded-full bg-canvas-elevated shadow-(--shadow-1)",
          "transition-transform duration-[var(--duration-swift)] ease-[var(--ease-standard)]",
          "data-[state=checked]:translate-x-6 data-[state=checked]:bg-on-brand",
        )}
      />
    </SwitchPrimitive.Root>
  );
}
