import { useState } from "react";
import { Button } from "./button";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";
import { RollCallTable, type VotePosition } from "./roll-call";

export type Official = {
  name: string;
  office: string;
  district: string;
  party?: string;
  phone?: string;
  nextEvent?: string;
  asOf: string;
  source: string;
  api: string;
  votes?: VotePosition[];
};

type OfficialCardProps = {
  official: Official;
  onCall?: () => void;
  onWrite?: () => void;
  onRecord?: () => void;
};

function portraitInitial(name: string) {
  const stripped = name.replace(/^(Rep\.|Sen\.|Del\.)\s+/u, "");
  return stripped.charAt(0).toUpperCase();
}

export function OfficialCard({ official, onCall, onWrite, onRecord }: OfficialCardProps) {
  const [open, setOpen] = useState(false);
  const votes = official.votes ?? [];

  return (
    <Record>
      <RecordSection className="flex items-center justify-between gap-3 text-xs text-ink-muted">
        <span>Official record</span>
        <Identifier>{official.district}</Identifier>
      </RecordSection>
      <RecordSection className="flex gap-4">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-record border border-line bg-canvas font-display text-2xl leading-none text-ink"
          aria-hidden="true"
        >
          {portraitInitial(official.name)}
        </div>
        <div className="min-w-0">
          <h3 className="mt-0 mb-0 font-display text-xl text-ink">{official.name}</h3>
          <p className="mt-1 mb-0 text-sm leading-snug text-ink-muted">{official.office}</p>
        </div>
      </RecordSection>
      {official.nextEvent ? (
        <RecordSection>
          <p className="m-0 text-sm leading-snug text-ink-muted">{official.nextEvent}</p>
        </RecordSection>
      ) : null}
      <RecordSection className="flex flex-wrap gap-2">
        <Button type="button" variant="official" size="sm" onClick={onCall}>
          Call office
        </Button>
        <Button type="button" variant="secondary" size="sm" onClick={onWrite}>
          Write
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            setOpen((v) => !v);
            onRecord?.();
          }}
        >
          Voting record
        </Button>
      </RecordSection>
      {open && votes.length > 0 ? (
        <RecordSection className="px-0 py-0">
          <RollCallTable votes={votes} density="compact" embedded />
        </RecordSection>
      ) : null}
      <RecordSection>
        <ProvenanceStamp source={official.source} retrieved={official.asOf} api={official.api} />
      </RecordSection>
    </Record>
  );
}
