import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  /** Short label set in the left margin column, legislative-document style. */
  label?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  headingLevel?: "h2" | "h3";
};

/**
 * Page section with a margin column. The label sits out in the margin under a
 * gold rule; the title and lede sit on a narrow measure against the wide
 * content grid below. Sections are separated by a rule, not by whitespace.
 */
export function Section({
  label,
  title,
  lede,
  children,
  className,
  headingLevel = "h2",
}: SectionProps) {
  const Heading = headingLevel;
  return (
    <section className={cn("border-t border-line pt-8", className)}>
      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
        <div>
          {label ? (
            <p className="m-0 border-t-2 border-gold pt-2 font-mono text-xs tracking-widest text-ink-subtle uppercase">
              {label}
            </p>
          ) : null}
        </div>
        <div>
          <Heading className="mt-0 mb-2 font-display text-3xl">{title}</Heading>
          {lede ? <p className="mt-0 mb-0 max-w-2xl text-ink-muted">{lede}</p> : null}
        </div>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
