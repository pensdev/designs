import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/forum/badge";
import { Identifier } from "@/components/forum/identifier";
import { OfficialCard } from "@/components/forum/official-card";
import { Record, RecordSection } from "@/components/forum/record";
import { COLOR_GROUPS, OFFICIALS, THEME_ALLOWANCES, TYPE_ROWS } from "@/lib/forum-data";

export const Route = createFileRoute("/foundations")({ component: Foundations });

function Foundations() {
  const sample = OFFICIALS["11702"][0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mt-0 mb-2 font-display text-4xl">Foundations</h1>
      <p className="mt-0 mb-10 max-w-xl text-ink-muted">
        Structure, semantics, and brand are separate layers. Override only brand tokens.
      </p>

      <h2 className="mt-0 mb-2 font-display text-2xl">Two registers</h2>
      <p className="mt-0 mb-6 max-w-2xl text-ink-muted">
        Product surfaces sell an act. Record surfaces publish a fact. They do not share a container.
      </p>
      <div className="mb-12 grid gap-4 lg:grid-cols-2">
        <article className="rounded-lg border border-line bg-canvas-elevated p-5 shadow-(--shadow-border)">
          <p className="m-0 font-mono text-xs text-ink-subtle">Product</p>
          <h3 className="mt-2 mb-2 font-display text-xl">Contribution, principles, marketing</h3>
          <ul className="mb-0 list-disc pl-5 text-sm text-ink-muted">
            <li>8–12px radius, 1px line, soft shadow</li>
            <li>Generous padding, one primary CTA</li>
            <li>Brand may speak (fill, weight, chip style)</li>
          </ul>
        </article>
        <Record>
          <RecordSection>
            <p className="m-0 font-mono text-xs text-ink-subtle">Record</p>
            <h3 className="mt-2 mb-2 font-display text-xl">Official, bill, vote, receipt</h3>
            <ul className="mb-0 list-disc pl-5 text-sm leading-snug text-ink-muted">
              <li>2px radius max, no shadow</li>
              <li>Hairline rules between sections</li>
              <li>Tabular figures, tighter leading</li>
              <li>Themes cannot restyle this register</li>
            </ul>
          </RecordSection>
        </Record>
      </div>

      <h2 className="mt-0 mb-2 font-display text-2xl">Theme allowances</h2>
      <p className="mt-0 mb-4 max-w-2xl text-ink-muted">
        Civic navy is quietest. Campaign crimson is loudest. Advocacy forest sits in the middle. Locked
        rows cannot change with the brand overlay.
      </p>
      <div className="mb-12 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs text-ink-muted">
              <th className="py-2 pr-3 font-medium">Token</th>
              <th className="py-2 pr-3 font-medium">Civic navy</th>
              <th className="py-2 pr-3 font-medium">Campaign crimson</th>
              <th className="py-2 pr-3 font-medium">Advocacy forest</th>
              <th className="py-2 font-medium">Locked</th>
            </tr>
          </thead>
          <tbody>
            {THEME_ALLOWANCES.map((row) => (
              <tr key={row.token} className="border-b border-line align-top">
                <td className="py-3 pr-3 font-medium text-ink">{row.token}</td>
                <td className="py-3 pr-3 text-ink-muted">{row.civic}</td>
                <td className="py-3 pr-3 text-ink-muted">{row.crimson}</td>
                <td className="py-3 pr-3 text-ink-muted">{row.forest}</td>
                <td className="py-3">{row.locked ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-0 mb-2 font-display text-2xl">Official record — before / after</h2>
      <p className="mt-0 mb-6 max-w-2xl text-ink-muted">
        Same copy. Record register, serif initial, identifier box, provenance stamp.
      </p>
      <div className="mb-12 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-xs text-ink-subtle">Before</p>
          <div className="rounded-lg border border-official/20 bg-canvas-elevated p-5 shadow-(--shadow-border)">
            <div className="mb-4 flex items-center justify-between text-xs text-ink-muted">
              <span>Official record</span>
              <span>As of Sept 2, 2026</span>
            </div>
            <div className="flex gap-4">
              <div className="size-16 shrink-0 rounded-md bg-navy" aria-hidden="true" />
              <div>
                <Badge tone="info">NY-02</Badge>
                <h3 className="mt-1 mb-0 font-display text-xl">Rep. Alexandra Ruiz</h3>
                <p className="mt-0.5 mb-0 text-sm text-ink-muted">
                  U.S. House · 2nd District of New York
                </p>
              </div>
            </div>
            <p className="mt-4 mb-0 text-xs text-ink-muted">
              Source: Congress.gov member API · As of Sept 2, 2026
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2 font-mono text-xs text-ink-subtle">After</p>
          <OfficialCard official={sample} />
        </div>
      </div>

      <h2 className="mt-0 mb-4 font-display text-2xl">Color</h2>
      {COLOR_GROUPS.map((group) => (
        <div key={group.name} className="mb-8">
          <h3 className="mt-0 mb-3 text-lg font-medium">{group.name}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {group.swatches.map((s) => (
              <figure
                key={s.token}
                className="overflow-hidden rounded-md border border-line bg-canvas-elevated"
              >
                <div className="h-16" style={{ background: s.hex }} />
                <figcaption className="px-3 py-2 text-xs">
                  <span className="block font-medium text-ink">{s.token}</span>
                  <code className="font-mono text-ink-subtle">{s.hex}</code>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}

      <h2 className="mt-12 mb-2 font-display text-2xl">Typography</h2>
      <p className="mt-0 mb-6 text-ink-muted">
        Source Serif 4 for civic display. IBM Plex Sans for UI. IBM Plex Mono for bill numbers and
        FEC IDs.
      </p>
      <div className="divide-y divide-line border-y border-line">
        {TYPE_ROWS.map((row) => (
          <div key={row.token} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:items-baseline">
            <span className="font-mono text-xs text-ink-subtle">{row.token}</span>
            <p className={`m-0 ${row.className}`}>{row.sample}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 mb-2 font-display text-2xl">Space & type rules</h2>
      <ul className="mb-8 max-w-xl list-disc pl-5 text-sm text-ink-muted">
        <li>4px base scale: 4 8 12 16 20 24 32 40 48 64</li>
        <li>Public body stays at 16px. Compact record rows are 13px / 32px tall.</li>
        <li>One primary CTA per viewport. Recurring gifts are opt-in.</li>
        <li>Identifiers (NY-02, S. 214, FEC IDs) use a hairline box, never a pill.</li>
        <li>Gold is the provenance rule. It does not fill buttons or chips.</li>
      </ul>

      <div className="flex flex-wrap gap-2">
        <Identifier>NY-02</Identifier>
        <Identifier>S. 214</Identifier>
        <Identifier>C00412345</Identifier>
        <Badge tone="info">Introduced</Badge>
        <Badge tone="success">Verified</Badge>
        <Badge tone="danger">Rejected</Badge>
      </div>
    </div>
  );
}
