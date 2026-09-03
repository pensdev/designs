import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, ComplianceFooter } from "@/components/forum";
import { ContributeForm } from "@/components/patterns/contribute-form";
import { OfficialLookup } from "@/components/patterns/official-lookup";
import { useTheme } from "@/components/theme-provider";
import { PRINCIPLES } from "@/lib/forum-data";
import { ORG_META } from "@/lib/theme";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { org } = useTheme();
  const meta = ORG_META[org];

  return (
    <div>
      <section className="bg-navy-900 text-ink-inverse">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="m-0 text-xs font-semibold tracking-widest text-hero-muted uppercase">
            Forum Design System · v0.1
          </p>
          <h1 className="mt-3 mb-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            Political tech, built to be believed.
          </h1>
          <p className="mt-0 mb-8 max-w-xl text-lg text-hero-muted">
            A civic product layer for campaigns, advocacy orgs, donation flows, field tools, and
            policy dashboards. Brand sits on top. Structure, compliance, and action stay stable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/patterns" className="no-underline">
              <Button
                type="button"
                size="lg"
                style={{ backgroundColor: "var(--hero-cta-bg)", color: "var(--hero-cta-fg)" }}
              >
                Open live patterns
              </Button>
            </Link>
            <Link to="/foundations" className="no-underline">
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="border-ink-inverse/30 text-ink-inverse hover:bg-navy-800"
              >
                Foundations
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-xs text-ink-inverse">
            <span className="tone-chip rounded-full px-3 py-1">WCAG 2.2 AA floor</span>
            <span className="tone-chip rounded-full px-3 py-1">Tokens first</span>
            <span className="tone-chip rounded-full px-3 py-1">Themable brand</span>
            <span className="tone-chip rounded-full px-3 py-1">Light + dark</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mt-0 mb-2 font-display text-3xl">Principles</h2>
        <p className="mt-0 mb-8 max-w-xl text-ink-muted">
          Decision filters. If a campaign overlay fights a principle, the principle wins.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-line bg-canvas-elevated p-5 shadow-(--shadow-border)"
            >
              <h3 className="mt-0 mb-2 font-display text-xl">{p.title}</h3>
              <p className="m-0 text-sm text-ink-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-subtle">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="m-0 text-xs font-semibold tracking-widest text-ink-subtle uppercase">
              Pattern
            </p>
            <h2 className="mt-2 mb-2 font-display text-3xl">Contribution</h2>
            <p className="mt-0 mb-6 text-ink-muted">
              Amount in the button. Recurring opt-in. Employer only when the law requires it. Receipt
              is a page, not a toast.
            </p>
            <ContributeForm org={org} />
          </div>
          <div>
            <p className="m-0 text-xs font-semibold tracking-widest text-ink-subtle uppercase">
              Pattern
            </p>
            <h2 className="mt-2 mb-2 font-display text-3xl">Official record</h2>
            <p className="mt-0 mb-6 text-ink-muted">
              Party is optional chrome. Office, district, and as-of date are the identity.
            </p>
            <OfficialLookup />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ComplianceFooter committee={meta.committee} orgType={meta.type} />
      </div>
    </div>
  );
}
