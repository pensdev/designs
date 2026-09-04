import { Callout } from "./callout";
import { cn } from "@/lib/utils";

type ProvenanceStampProps = {
  source: string;
  retrieved: string;
  api: string;
  className?: string;
};

export function ProvenanceStamp({ source, retrieved, api, className }: ProvenanceStampProps) {
  return (
    <Callout rule="var(--forum-gold)" className={cn("py-1.5", className)}>
      <p className="m-0 font-mono text-xs leading-snug text-ink-muted">
        {source} · {retrieved} · {api}
      </p>
    </Callout>
  );
}
