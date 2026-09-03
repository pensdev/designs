import { Badge } from "./badge";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";

const STAGES = ["Introduced", "Committee", "Floor", "Passed", "Enacted"] as const;
type Stage = (typeof STAGES)[number];

type BillStatusProps = {
  number: string;
  title: string;
  stage: Stage;
  chamber: "House" | "Senate";
  updatedAt: string;
};

export function BillStatus({ number, title, stage, chamber, updatedAt }: BillStatusProps) {
  const idx = STAGES.indexOf(stage);
  return (
    <Record>
      <RecordSection className="flex flex-wrap items-center gap-2">
        <Identifier>{number}</Identifier>
        <Identifier>{chamber}</Identifier>
        <Badge tone="info">{stage}</Badge>
      </RecordSection>
      <RecordSection>
        <p className="m-0 text-sm font-medium leading-snug text-ink">{title}</p>
      </RecordSection>
      <RecordSection>
        <ol className="m-0 flex list-none gap-px p-0" aria-label="Legislative stage">
          {STAGES.map((s, i) => (
            <li
              key={s}
              className={`h-1 flex-1 ${i <= idx ? "bg-official" : "bg-canvas-subtle"}`}
              title={s}
            />
          ))}
        </ol>
        <p className="mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted">{STAGES.join(" · ")}</p>
      </RecordSection>
      <RecordSection>
        <ProvenanceStamp source="Congress.gov" retrieved={updatedAt} api="bill API" />
      </RecordSection>
    </Record>
  );
}
