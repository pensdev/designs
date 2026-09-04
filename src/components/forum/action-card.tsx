import { Button } from "./button";
import { Card } from "./card";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { formatCount } from "@/lib/utils";

export type ActionKind = "call" | "email" | "petition";

const KIND_LABEL: Record<ActionKind, string> = {
  call: "Call",
  email: "Email",
  petition: "Petition",
};

const KIND_UNIT: Record<ActionKind, string> = {
  call: "calls placed",
  email: "emails sent",
  petition: "signatures",
};

type ActionCardProps = {
  kind: ActionKind;
  title: string;
  ask: string;
  target: string;
  count: number;
  updatedAt: string;
  source: string;
  api: string;
  actionLabel: string;
  onAction?: () => void;
};

/**
 * One civic act, with a count that is allowed to be unimpressive.
 * The number is whatever it is, stamped with the moment it was true — it never
 * animates upward, never rounds up, and there is no "join 10,000 others" when
 * there are 412. If the count is small, the small count is the honest thing.
 */
export function ActionCard({
  kind,
  title,
  ask,
  target,
  count,
  updatedAt,
  source,
  api,
  actionLabel,
  onAction,
}: ActionCardProps) {
  return (
    <Card variant="action" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Identifier tone="info">{KIND_LABEL[kind]}</Identifier>
        <Identifier>{target}</Identifier>
      </div>

      <div>
        <h3 className="mt-0 mb-1 font-display text-2xl text-ink">{title}</h3>
        <p className="m-0 text-sm leading-snug text-ink-muted">{ask}</p>
      </div>

      <div className="border-y border-line py-3">
        <p className="m-0 font-display text-3xl font-semibold tabular-nums text-ink">
          {formatCount(count)}
          <span className="ml-2 text-base font-normal text-ink-muted">{KIND_UNIT[kind]}</span>
        </p>
        <p className="mt-1 mb-0 text-xs text-ink-muted">Counted as of {updatedAt}.</p>
      </div>

      <Button type="button" variant="primary" size="lg" className="w-full" onClick={onAction}>
        {actionLabel}
      </Button>

      <ProvenanceStamp source={source} retrieved={updatedAt} api={api} />
    </Card>
  );
}
