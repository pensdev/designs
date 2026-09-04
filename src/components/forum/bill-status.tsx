import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";
import { SegmentedMeter } from "./segmented-meter";

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
        <Identifier tone="info">{stage}</Identifier>
      </RecordSection>
      <RecordSection>
        <p className="m-0 text-sm font-medium leading-snug text-ink">{title}</p>
      </RecordSection>
      <RecordSection>
        <SegmentedMeter
          segments={STAGES.length}
          filled={idx + 1}
          titles={STAGES}
          label={`Legislative stage ${idx + 1} of ${STAGES.length}: ${stage}`}
        />
        <p className="mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted">{STAGES.join(" · ")}</p>
      </RecordSection>
      <RecordSection>
        <ProvenanceStamp source="Congress.gov" retrieved={updatedAt} api="bill API" />
      </RecordSection>
    </Record>
  );
}
