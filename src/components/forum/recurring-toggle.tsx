import { ChoiceGroup } from "./choice-group";

type Period = "monthly" | "quarterly";

type RecurringToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  period?: Period;
};

const PERIOD_LABEL: Record<Period, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
};

export function RecurringToggle({
  checked,
  onCheckedChange,
  period = "monthly",
}: RecurringToggleProps) {
  return (
    <div className="rounded-record border border-line bg-canvas px-3 py-3">
      <p className="m-0 text-sm font-medium text-ink">Schedule</p>
      <p className="mt-0.5 mb-3 text-xs text-ink-muted">
        One-time unless you choose otherwise. You can cancel anytime.
      </p>
      <ChoiceGroup
        label="Contribution schedule"
        value={checked ? "recurring" : "once"}
        onChange={(v) => onCheckedChange(v === "recurring")}
        options={[
          { value: "once", label: "One-time" },
          { value: "recurring", label: PERIOD_LABEL[period] },
        ]}
      />
    </div>
  );
}
