import { Badge } from "./badge";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";
import { formatUsd } from "@/lib/utils";

type ReceiptProps = {
  id: string;
  amount: number;
  period: "once" | "monthly";
  committee: string;
  last4?: string;
};

export function Receipt({ id, amount, period, committee, last4 = "4242" }: ReceiptProps) {
  return (
    <Record>
      <RecordSection className="flex items-center justify-between gap-3">
        <Badge tone="success">Recorded</Badge>
        <Identifier>{id}</Identifier>
      </RecordSection>
      <RecordSection>
        <h3 className="mt-0 mb-1 font-display text-2xl text-ink">Thank you.</h3>
        <p className="m-0 text-sm leading-snug text-ink-muted">
          {formatUsd(amount)}
          {period === "monthly" ? " monthly" : " one-time"} to {committee}.
        </p>
      </RecordSection>
      <RecordSection>
        <dl className="m-0 grid grid-cols-2 gap-y-2 font-mono text-xs tabular-nums text-ink">
          <dt className="text-ink-muted">Card</dt>
          <dd className="m-0 text-right">•••• {last4}</dd>
          <dt className="text-ink-muted">Period</dt>
          <dd className="m-0 text-right">{period === "monthly" ? "Monthly" : "One-time"}</dd>
        </dl>
      </RecordSection>
      <RecordSection>
        <ProvenanceStamp source="Example Processor" retrieved="Sept 2, 2026" api="payments" />
      </RecordSection>
    </Record>
  );
}
