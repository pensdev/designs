import { Switch } from "./switch";

type RecurringToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  period?: "monthly" | "quarterly";
};

export function RecurringToggle({
  checked,
  onCheckedChange,
  period = "monthly",
}: RecurringToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-line bg-canvas px-3 py-3">
      <div>
        <p id="recurring-label" className="text-sm font-medium text-ink">
          Make this {period}
        </p>
        <p className="text-xs text-ink-muted">Off unless you turn it on. You can cancel anytime.</p>
      </div>
      <Switch
        id="recurring"
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-labelledby="recurring-label"
      />
    </div>
  );
}
