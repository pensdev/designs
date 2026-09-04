import { ExternalLink } from "lucide-react";
import { AlertBanner } from "./alert-banner";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";

export type PollingHours = { day: string; hours: string };

type PollingPlaceProps = {
  name: string;
  address: string;
  hours: readonly PollingHours[];
  /** Whether ID is required at all — the single fact people most often get wrong. */
  idRequired: boolean;
  idDetail: string;
  accessibility: string;
  verifyHref: string;
  source: string;
  api: string;
  asOf: string;
};

/**
 * Where to vote, when, and what to bring.
 *
 * ID rules are the most consequential and most misremembered fact on this card,
 * so the yes/no is stated as its own labelled row before any of the detail —
 * a voter who reads nothing else should still leave with the right answer. And
 * because polling places move and rules change late, the card ends by telling
 * people to verify rather than implying it is authoritative forever.
 */
export function PollingPlace({
  name,
  address,
  hours,
  idRequired,
  idDetail,
  accessibility,
  verifyHref,
  source,
  api,
  asOf,
}: PollingPlaceProps) {
  return (
    <Record>
      <RecordSection className="flex items-center justify-between gap-3 text-xs text-ink-muted">
        <span>Polling place</span>
        <Identifier>as of {asOf}</Identifier>
      </RecordSection>

      <RecordSection>
        <h3 className="mt-0 mb-1 font-display text-xl leading-snug text-ink">{name}</h3>
        <p className="m-0 text-sm leading-snug text-ink-muted">{address}</p>
      </RecordSection>

      <RecordSection>
        <p className="mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase">
          Hours
        </p>
        <dl className="m-0 grid grid-cols-[1fr_auto] gap-y-1.5 text-dense">
          {hours.map((row) => (
            <div key={row.day} className="contents">
              <dt className="text-ink-muted">{row.day}</dt>
              <dd className="m-0 text-right font-mono tabular-nums text-ink">{row.hours}</dd>
            </div>
          ))}
        </dl>
      </RecordSection>

      <RecordSection className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="m-0 text-sm font-medium text-ink">Photo ID</p>
        <Identifier tone={idRequired ? "warning" : "success"}>
          {idRequired ? "Required" : "Not required"}
        </Identifier>
        <p className="m-0 w-full text-xs leading-snug text-ink-muted">{idDetail}</p>
      </RecordSection>

      <RecordSection>
        <p className="mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase">
          Access
        </p>
        <p className="m-0 text-sm leading-snug text-ink">{accessibility}</p>
      </RecordSection>

      <RecordSection>
        <AlertBanner tone="warning" title="Confirm before you go.">
          Polling places and hours change close to election day. Your county board is the only
          authority.
        </AlertBanner>
        <a
          href={verifyHref}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-2"
        >
          Check your county board
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </RecordSection>

      <RecordSection>
        <ProvenanceStamp source={source} retrieved={asOf} api={api} />
      </RecordSection>
    </Record>
  );
}
