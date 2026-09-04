import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ActionCard,
  AlertBanner,
  BallotItem,
  BillStatus,
  CampaignProgress,
  ElectionCountdown,
  PetitionSignature,
  PollingPlace,
  RaceResult,
  RepLookup,
  ScriptCard,
  Button,
  Card,
  Field,
  Identifier,
  Input,
  RecurringToggle,
  RollCallTable,
  Section,
  Select,
} from "@/components/forum";
import type { LookupOutcome, SignatureVisibility } from "@/components/forum";
import {
  CALL_SCRIPT,
  DEMO_TODAY,
  DEMO_TODAY_ISO,
  DISTRICT_MATCHES,
  ELECTION_MILESTONES,
  OFFICIALS,
  POLLING_HOURS,
  RACE_CANDIDATES,
  SAMPLE_ROLL,
} from "@/lib/forum-data";

export const Route = createFileRoute("/components")({ component: ComponentsPage });

const OFFICE_OPTIONS = [
  { value: "house", label: "U.S. House" },
  { value: "senate", label: "U.S. Senate" },
  { value: "state-house", label: "State House" },
  { value: "state-senate", label: "State Senate" },
  { value: "council", label: "City Council" },
] as const;

type Office = (typeof OFFICE_OPTIONS)[number]["value"];

function resolveDistrict(query: string): LookupOutcome {
  const key = query.trim().toLowerCase().replace(/\s+/gu, " ");
  const hit = DISTRICT_MATCHES[key];
  if (!hit) {
    return {
      status: "notice",
      title: "No sample record for that address.",
      detail: "Try “12 Bay Shore Rd, Babylon NY” or the ZIP 11702.",
    };
  }
  return {
    status: "match",
    match: {
      query: query.trim(),
      district: hit.district,
      precision: hit.precision,
      method: hit.method,
      asOf: DEMO_TODAY,
      officials: OFFICIALS[hit.officialsKey] ?? [],
    },
  };
}

function ComponentsPage() {
  const [loading, setLoading] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [errorOn, setErrorOn] = useState(false);
  const [office, setOffice] = useState<Office>("house");
  const [scriptNote, setScriptNote] = useState("");
  const [sigName, setSigName] = useState("Alexandra Ruiz");
  const [sigLocality, setSigLocality] = useState("Babylon, NY");
  const [sigVisibility, setSigVisibility] = useState<SignatureVisibility>("public");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mt-0 mb-2 font-display text-4xl">Components</h1>
      <p className="mt-0 mb-10 max-w-2xl text-ink-muted">
        Primary is the only filled brand button on a page. Official is navy. Danger is reserved for
        irreversible acts.
      </p>

      <Section label="Action" title="Buttons" className="pb-12">
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
      </Section>

      <Section
        label="Labels"
        title="Identifiers"
        lede="One shape for every small label. A status is a tone on the identifier box, not a separate filled pill."
        className="pb-12"
      >
        <div className="mb-3 flex flex-wrap gap-2">
          <Identifier>NY-02</Identifier>
          <Identifier>S. 214</Identifier>
          <Identifier>FEC C00412345</Identifier>
        </div>
        <div className="flex flex-wrap gap-2">
          <Identifier tone="info">Introduced</Identifier>
          <Identifier tone="success">Filed</Identifier>
          <Identifier tone="warning">Deadline Friday</Identifier>
          <Identifier tone="danger">Rejected</Identifier>
          <Identifier tone="muted">Draft</Identifier>
        </div>
      </Section>

      <Section
        label="Input"
        title="Field, select and schedule"
        lede="Controls share one geometry. The select is ours, not the OS one, so it matches the rest of the form in every browser."
        className="pb-12"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mt-0 mb-4 font-display text-xl">Field</h3>
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
              <div className="mt-4">
                <Field id="demo-office" label="Office sought">
                  <Select<Office>
                    id="demo-office"
                    aria-label="Office sought"
                    value={office}
                    onValueChange={setOffice}
                    options={OFFICE_OPTIONS}
                  />
                </Field>
              </div>
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
            <h3 className="mt-0 mb-4 font-display text-xl">Recurring choice</h3>
            <RecurringToggle checked={monthly} onCheckedChange={setMonthly} />
            <p className="mt-3 mb-0 text-sm text-ink-muted">
              Current: {monthly ? "monthly" : "one-time"}
            </p>
          </div>
        </div>
      </Section>

      <Section
        label="Notice"
        title="Callouts"
        lede="Every notice is the provenance stamp's shape: hairline box, no fill, a ruled left edge that carries the tone."
        className="pb-12"
      >
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
      </Section>

      <Section label="Record" title="Bill status" className="pb-12">
        <BillStatus
          number="S. 214"
          title="Digital Disclosure Act"
          stage="Committee"
          chamber="Senate"
          updatedAt="Sept 1, 2026"
        />
      </Section>

      <Section
        label="Record"
        title="Roll call · compact"
        lede="32px rows, 13px Plex, mono identifiers, hairline dividers."
        className="pb-12"
      >
        <RollCallTable votes={SAMPLE_ROLL} density="compact" />
      </Section>

      <Section
        label="Advocacy"
        title="Asking for one act"
        lede="Every surface here states a real number with the moment it was true, and none of them manufacture scarcity to get the click."
        className="pb-12"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ActionCard
            kind="call"
            title="Ask your rep to vote yes on H.R. 118"
            ask="Two minutes on the phone during office hours. Staff tally every call."
            target="NY-02"
            count={1204}
            updatedAt={DEMO_TODAY}
            source="Internal action log"
            api="actions"
            actionLabel="Get the call script"
          />
          <Card>
            <h3 className="mt-0 mb-4 font-display text-xl">Campaign progress</h3>
            <CampaignProgress
              current={18420}
              goal={25000}
              recentCount={412}
              recentWindow="the last 7 days"
              atGoal="At 25,000 we file the comment with the agency. Signatures after that are still delivered — the goal is a filing threshold, not a cutoff."
              updatedAt="today, 4:10 p.m. ET"
            />
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ScriptCard
            office={CALL_SCRIPT.office}
            district={CALL_SCRIPT.district}
            phone={CALL_SCRIPT.phone}
            hours={CALL_SCRIPT.hours}
            opener={CALL_SCRIPT.opener}
            ask={CALL_SCRIPT.ask}
            points={CALL_SCRIPT.points}
            note={scriptNote}
            onNoteChange={setScriptNote}
            lastCalledAt="Aug 14, 2026"
          />
          <Card>
            <h3 className="mt-0 mb-1 font-display text-xl">Signature visibility</h3>
            <p className="mt-0 mb-4 text-sm text-ink-muted">
              Switch the control and read the explanation change. Unlisted is not anonymous, and
              the copy says so.
            </p>
            <PetitionSignature
              name={sigName}
              onNameChange={setSigName}
              locality={sigLocality}
              onLocalityChange={setSigLocality}
              visibility={sigVisibility}
              onVisibilityChange={setSigVisibility}
              signatureNumber={18421}
              recipient="the Federal Register docket"
            />
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="mt-0 mb-1 font-display text-xl">Representative lookup</h3>
          <p className="mt-0 mb-4 max-w-2xl text-sm text-ink-muted">
            Try the street address, then try the bare ZIP <code className="font-mono">11702</code>{" "}
            to see the centroid warning. A ZIP is a guess, and the component says which one it made.
          </p>
          <RepLookup
            resolve={resolveDistrict}
            initialQuery="12 Bay Shore Rd, Babylon NY"
            resolveOnMount
          />
        </div>
      </Section>

      <Section
        label="Elections"
        title="Civic information"
        lede="Record register throughout. These publish facts from official sources, so a brand overlay cannot restyle them and nothing here counts down in seconds."
        className="pb-12"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ElectionCountdown
            election="Nov 2026 general"
            asOf={DEMO_TODAY_ISO}
            asOfDisplay={DEMO_TODAY}
            milestones={ELECTION_MILESTONES}
            source="NY State Board of Elections"
            api="calendar"
          />
          <PollingPlace
            name="Babylon Town Hall — Annex B"
            address="200 East Sunrise Highway, Lindenhurst, NY 11757"
            hours={POLLING_HOURS}
            idRequired={false}
            idDetail="New York does not require photo ID to vote in person if you have voted in this county before. First-time voters who registered by mail without providing ID may be asked for it."
            accessibility="Step-free entrance on the north side. Accessible ballot marking device available at all hours."
            verifyHref="https://www.elections.ny.gov/"
            source="NY State Board of Elections"
            api="pollsite"
            asOf={DEMO_TODAY}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <BallotItem
            kind="measure"
            identifier="Prop 1"
            title="Public Records Modernization Amendment"
            subtitle="Statewide ballot proposal · Nov 3, 2026"
            summary="Requires state agencies to publish public records in machine-readable formats within 30 days of a request, and to keep an online index of what they hold."
            summaryBy="the NY State Board of Elections"
            yesMeans="Agencies must publish records in machine-readable formats and maintain a public index."
            noMeans="Current disclosure rules stay as they are, and formats remain at each agency's discretion."
            fullTextHref="https://www.elections.ny.gov/"
            source="NY State Board of Elections"
            api="ballot"
            asOf={DEMO_TODAY}
          />
          <RaceResult
            race="U.S. House · 2nd District of New York"
            candidates={RACE_CANDIDATES}
            reportingPct={72}
            source="Associated Press"
            api="elections"
            updatedAt="Nov 3, 2026, 11:42 p.m. ET"
          />
        </div>
      </Section>
    </div>
  );
}
