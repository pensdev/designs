import { Phone } from "lucide-react";
import { AlertBanner } from "./alert-banner";
import { Button } from "./button";
import { Card } from "./card";
import { Identifier } from "./identifier";
import { Record, RecordSection } from "./record";
import { Textarea } from "./field";

type ScriptCardProps = {
  office: string;
  district: string;
  phone: string;
  hours: string;
  opener: string;
  ask: string;
  points: readonly string[];
  note: string;
  onNoteChange: (value: string) => void;
  /** Set when this person has called this office before. */
  lastCalledAt?: string;
  onCall?: () => void;
};

/**
 * A call script. The script itself sits in the record register, because it is a
 * document you read aloud, not a product surface.
 *
 * The "you've called before" state deliberately does not scold or gate. Staff
 * tally every call separately, so calling twice is useful, and the component
 * says so rather than implying the caller is double-dipping.
 */
export function ScriptCard({
  office,
  district,
  phone,
  hours,
  opener,
  ask,
  points,
  note,
  onNoteChange,
  lastCalledAt,
  onCall,
}: ScriptCardProps) {
  return (
    <Card variant="action" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="m-0 font-display text-2xl text-ink">Call script</h3>
        <Identifier>{district}</Identifier>
      </div>
      <p className="m-0 text-sm leading-snug text-ink-muted">
        {office} · {hours}
      </p>

      {lastCalledAt ? (
        <AlertBanner tone="info" title={`You called this office on ${lastCalledAt}.`}>
          Calling again is useful. Staff log each call separately, so a second call is counted, not
          discarded.
        </AlertBanner>
      ) : null}

      <Record>
        <RecordSection>
          <p className="m-0 text-sm leading-relaxed text-ink">{opener}</p>
        </RecordSection>
        <RecordSection>
          <p className="m-0 text-sm leading-relaxed font-medium text-ink">{ask}</p>
        </RecordSection>
        <RecordSection>
          <p className="mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase">
            If they ask why
          </p>
          <ul className="m-0 list-disc pl-5 text-sm leading-snug text-ink-muted">
            {points.map((point) => (
              <li key={point} className="mb-1 last:mb-0">
                {point}
              </li>
            ))}
          </ul>
        </RecordSection>
      </Record>

      <div>
        <label htmlFor="script-note" className="mb-1.5 block text-sm font-medium text-ink">
          Your own reason
          <span className="ml-1.5 font-normal text-ink-subtle">optional</span>
        </label>
        <Textarea
          id="script-note"
          value={note}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder="One sentence about why this matters where you live."
        />
        <p className="mt-1.5 mb-0 text-xs text-ink-muted">
          Staff remember the specific story, not the script. Say it in your own words.
        </p>
      </div>

      <Button type="button" variant="official" size="lg" className="w-full" onClick={onCall}>
        <Phone className="size-4" aria-hidden="true" />
        Call {phone}
      </Button>
    </Card>
  );
}
