import { useMemo, useState } from "react";
import {
  AmountPicker,
  Button,
  Card,
  Field,
  IdentityBar,
  Input,
  PaidForBy,
  Receipt,
  RecurringToggle,
} from "@/components/forum";
import { SAMPLE_AMOUNTS } from "@/lib/forum-data";
import { ORG_META, type Org } from "@/lib/theme";
import { formatUsd } from "@/lib/utils";

export function ContributeForm({ org }: { org: Org }) {
  const meta = ORG_META[org];
  const [amount, setAmount] = useState<number | "other">(50);
  const [other, setOther] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [coverFee, setCoverFee] = useState(false);
  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | undefined>();

  const resolved = useMemo(() => {
    if (amount === "other") {
      const n = Number.parseFloat(other);
      return Number.isFinite(n) ? n : 0;
    }
    return amount;
  }, [amount, other]);

  const fee = Math.round((resolved * 0.029 + 0.3) * 100) / 100;
  const total = Math.round((resolved + (coverFee ? fee : 0)) * 100) / 100;
  const needsWork = resolved >= 200;

  function submit() {
    setError(undefined);
    if (resolved < 1) {
      setError("Enter an amount of at least $1.");
      return;
    }
    if (needsWork && (!occupation.trim() || !employer.trim())) {
      setError("Occupation and employer are required at $200 and above.");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <Receipt
        id={`R-2026-${Math.floor(100000 + resolved * 13)}`}
        amount={total}
        period={monthly ? "monthly" : "once"}
        committee={meta.committee}
      />
    );
  }

  return (
    <Card variant="action" className="max-w-md">
      <IdentityBar orgName={meta.committee} orgType={meta.type} verified />
      <h2 className="mt-0 mb-1 font-display text-2xl text-ink">Contribute</h2>
      <p className="mt-0 mb-4 text-sm text-ink-muted">
        One-time or monthly. Recurring stays off until you turn it on.
      </p>
      <AmountPicker
        amounts={SAMPLE_AMOUNTS}
        value={amount}
        otherValue={other}
        suggested={50}
        onChange={setAmount}
        onOtherChange={setOther}
      />
      <div className="mt-4">
        <RecurringToggle checked={monthly} onCheckedChange={setMonthly} />
      </div>
      <label className="mt-3 flex items-start gap-2 text-sm text-ink">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-navy"
          checked={coverFee}
          onChange={(e) => setCoverFee(e.target.checked)}
        />
        Cover the {formatUsd(fee, 2)} processing fee
      </label>
      {needsWork ? (
        <div className="mt-4 grid gap-3">
          <Field id="occupation" label="Occupation">
            <Input
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Field>
          <Field id="employer" label="Employer" hint="Required by federal reporting at $200+.">
            <Input id="employer" value={employer} onChange={(e) => setEmployer(e.target.value)} />
          </Field>
        </div>
      ) : null}
      {error ? (
        <p className="mt-3 mb-0 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
      <Button
        type="button"
        variant="primary"
        size="lg"
        className="mt-5 w-full"
        loading={status === "loading"}
        onClick={submit}
      >
        Contribute {formatUsd(total || 0, total % 1 === 0 ? 0 : 2)}
        {monthly ? " monthly" : ""}
      </Button>
      <PaidForBy
        committee={meta.committee}
        independentExpenditure={meta.type !== "campaign"}
      />
    </Card>
  );
}
