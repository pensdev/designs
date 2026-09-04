import { ExternalLink } from "lucide-react";
import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection } from "./record";

type BallotItemProps = {
  kind: "candidate" | "measure";
  identifier: string;
  title: string;
  subtitle?: string;
  summary: string;
  /** Who wrote the plain-language summary. Never omit this. */
  summaryBy: string;
  yesMeans?: string;
  noMeans?: string;
  fullTextHref: string;
  fullTextLabel?: string;
  source: string;
  api: string;
  asOf: string;
};

/**
 * A ballot line in plain language, with the summary attributed.
 *
 * Who wrote the plain-language version is the whole ballgame: a summary by the
 * Secretary of State, by the measure's sponsor, and by an advocacy group are
 * three different documents, and a reader deciding a vote is entitled to know
 * which one they are reading. The attribution is required, the official full
 * text is always one link away, and for measures the yes/no consequences are
 * given equal space and identical styling so the layout does not argue a side.
 */
export function BallotItem({
  kind,
  identifier,
  title,
  subtitle,
  summary,
  summaryBy,
  yesMeans,
  noMeans,
  fullTextHref,
  fullTextLabel = "Read the official full text",
  source,
  api,
  asOf,
}: BallotItemProps) {
  return (
    <Record>
      <RecordSection className="flex flex-wrap items-center gap-2">
        <Identifier tone="info">{kind === "measure" ? "Ballot measure" : "Candidate"}</Identifier>
        <Identifier>{identifier}</Identifier>
      </RecordSection>

      <RecordSection>
        <h3 className="mt-0 mb-1 font-display text-xl leading-snug text-ink">{title}</h3>
        {subtitle ? (
          <p className="m-0 text-sm leading-snug text-ink-muted">{subtitle}</p>
        ) : null}
      </RecordSection>

      <RecordSection>
        <p className="mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase">
          Plain language
        </p>
        <p className="m-0 text-sm leading-relaxed text-ink">{summary}</p>
        <p className="mt-2 mb-0 text-xs text-ink-muted">Summary written by {summaryBy}.</p>
      </RecordSection>

      {yesMeans && noMeans ? (
        <RecordSection className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase">
              A yes vote
            </p>
            <p className="m-0 text-sm leading-snug text-ink">{yesMeans}</p>
          </div>
          <div>
            <p className="mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase">
              A no vote
            </p>
            <p className="m-0 text-sm leading-snug text-ink">{noMeans}</p>
          </div>
        </RecordSection>
      ) : null}

      <RecordSection>
        <a
          href={fullTextHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-2"
        >
          {fullTextLabel}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </RecordSection>

      <RecordSection>
        <ProvenanceStamp source={source} retrieved={asOf} api={api} />
      </RecordSection>
    </Record>
  );
}
