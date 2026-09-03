import { ProvenanceStamp } from "./provenance-stamp";

type SourceCitationProps = {
  source: string;
  href?: string;
  publishedAt: string;
  api?: string;
};

/** @deprecated Use ProvenanceStamp. Kept as a thin adapter. */
export function SourceCitation({ source, publishedAt, api = "record" }: SourceCitationProps) {
  return <ProvenanceStamp source={source} retrieved={publishedAt} api={api} />;
}
