import { cn } from "@/lib/utils";

type ProvenanceStampProps = {
  source: string;
  retrieved: string;
  api: string;
  className?: string;
};

export function ProvenanceStamp({ source, retrieved, api, className }: ProvenanceStampProps) {
  return (
    <p
      className={cn(
        "m-0 border border-line bg-canvas px-2.5 py-1.5 font-mono text-xs leading-snug text-ink-muted",
        className,
      )}
      style={{ borderLeftWidth: 2, borderLeftColor: "var(--forum-gold)" }}
    >
      {source} · {retrieved} · {api}
    </p>
  );
}
