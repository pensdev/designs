import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertBanner,
  Badge,
  BillStatus,
  Button,
  Card,
  Field,
  Identifier,
  Input,
  RecurringToggle,
  RollCallTable,
} from "@/components/forum";
import { SAMPLE_ROLL } from "@/lib/forum-data";

export const Route = createFileRoute("/components")({ component: ComponentsPage });

function ComponentsPage() {
  const [loading, setLoading] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [errorOn, setErrorOn] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mt-0 mb-2 font-display text-4xl">Components</h1>
      <p className="mt-0 mb-10 max-w-xl text-ink-muted">
        Primary is the only filled brand button on a page. Official is navy. Danger is reserved for
        irreversible acts.
      </p>

      <section className="mb-12">
        <h2 className="mt-0 mb-4 font-display text-2xl">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            size="lg"
            loading={loading}
            onClick={() => {
              setLoading(true);
              window.setTimeout(() => setLoading(false), 900);
            }}
          >
            Contribute $50
          </Button>
          <Button type="button" variant="secondary">
            Share
          </Button>
          <Button type="button" variant="ghost">
            Skip for now
          </Button>
          <Button type="button" variant="official">
            View record
          </Button>
          <Button type="button" variant="danger">
            Cancel monthly gift
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mt-0 mb-4 font-display text-2xl">Status vs identifier</h2>
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge tone="info">Introduced</Badge>
          <Badge tone="success">Filed</Badge>
          <Badge tone="warning">Deadline Friday</Badge>
          <Badge tone="danger">Rejected</Badge>
          <Badge tone="muted">Draft</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Identifier>NY-02</Identifier>
          <Identifier>S. 214</Identifier>
          <Identifier>FEC C00412345</Identifier>
        </div>
      </section>

      <section className="mb-12 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mt-0 mb-4 font-display text-2xl">Field</h2>
          <Card>
            <Field
              id="demo-email"
              label="Email"
              hint={!errorOn ? "Used for the receipt only." : undefined}
              error={errorOn ? "Enter a valid email." : undefined}
            >
              <Input
                id="demo-email"
                type="email"
                error={errorOn}
                placeholder="you@example.org"
                defaultValue={errorOn ? "not-an-email" : ""}
              />
            </Field>
            <label className="mt-4 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-navy"
                checked={errorOn}
                onChange={(e) => setErrorOn(e.target.checked)}
              />
              Show error state
            </label>
          </Card>
        </div>
        <div>
          <h2 className="mt-0 mb-4 font-display text-2xl">Recurring toggle</h2>
          <RecurringToggle checked={monthly} onCheckedChange={setMonthly} />
          <p className="mt-3 mb-0 text-sm text-ink-muted">
            Current: {monthly ? "monthly" : "one-time"}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mt-0 mb-4 font-display text-2xl">Alert</h2>
        <div className="grid gap-3">
          <AlertBanner tone="info" title="Source attached.">
            Vote positions include chamber, date, and the originating API.
          </AlertBanner>
          <AlertBanner tone="warning" title="Comment period closes Sept 12.">
            Source: Federal Register. This is a real deadline, not a marketing timer.
          </AlertBanner>
          <AlertBanner tone="danger" title="Card declined.">
            The processor returned insufficient funds. No charge was recorded.
          </AlertBanner>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mt-0 mb-4 font-display text-2xl">Bill status</h2>
        <BillStatus
          number="S. 214"
          title="Digital Disclosure Act"
          stage="Committee"
          chamber="Senate"
          updatedAt="Sept 1, 2026"
        />
      </section>

      <section>
        <h2 className="mt-0 mb-2 font-display text-2xl">Roll call · compact</h2>
        <p className="mt-0 mb-4 text-sm text-ink-muted">
          32px rows, 13px Plex, mono identifiers, hairline dividers.
        </p>
        <RollCallTable votes={SAMPLE_ROLL} density="compact" />
      </section>
    </div>
  );
}
