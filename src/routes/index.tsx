import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Card, ComplianceFooter, Section } from "@/components/forum";
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
      <section className="bg-band text-band-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="m-0 font-mono text-xs tracking-widest text-band-muted uppercase">
            Forum Design System · v0.1
          </p>
          <h1 className="mt-3 mb-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            Political tech, built to be believed.
          </h1>
          <p className="mt-0 mb-8 max-w-xl text-lg text-band-muted">
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
                className="border-band-line text-band-ink hover:bg-navy-800"
              >
                Foundations
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-band-ink">
            <span className="tone-chip px-2 py-1">WCAG 2.2 AA floor</span>
            <span className="tone-chip px-2 py-1">Tokens first</span>
            <span className="tone-chip px-2 py-1">Themable brand</span>
            <span className="tone-chip px-2 py-1">Light + dark</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Section
          label="Doctrine"
          title="Principles"
          lede="Decision filters. If a campaign overlay fights a principle, the principle wins."
          className="pb-14"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <Card key={p.title} className="p-5">
                <h3 className="mt-0 mb-2 font-display text-xl">{p.title}</h3>
                <p className="m-0 text-sm text-ink-muted">{p.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          label="Patterns"
          title="Working references"
          lede="Not mockups. These run, validate, and disclose exactly as a shipped surface would."
          className="pb-14"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mt-0 mb-2 font-display text-xl">Contribution</h3>
              <p className="mt-0 mb-6 max-w-md text-sm text-ink-muted">
                Amount in the button. Recurring is a named choice, not a pre-checked switch.
                Employer only when the law requires it. The receipt is a page, not a toast.
              </p>
              <ContributeForm org={org} />
            </div>
            <div>
              <h3 className="mt-0 mb-2 font-display text-xl">Official record</h3>
              <p className="mt-0 mb-6 max-w-md text-sm text-ink-muted">
                Party is optional chrome. Office, district, and as-of date are the identity.
              </p>
              <OfficialLookup />
            </div>
          </div>
        </Section>

        <div className="py-10">
          <ComplianceFooter committee={meta.committee} orgType={meta.type} />
        </div>
      </div>
    </div>
  );
}
