import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BillStatus, ComplianceFooter, RollCallTable } from "@/components/forum";
import { ContributeForm } from "@/components/patterns/contribute-form";
import { OfficialLookup } from "@/components/patterns/official-lookup";
import { PetitionForm } from "@/components/patterns/petition-form";
import { useTheme } from "@/components/theme-provider";
import { SAMPLE_ROLL } from "@/lib/forum-data";
import { ORG_META } from "@/lib/theme";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/patterns")({ component: PatternsPage });

const TABS = [
  { id: "contribute", label: "Contribute" },
  { id: "petition", label: "Petition" },
  { id: "official", label: "Official" },
] as const;

type Tab = (typeof TABS)[number]["id"];

function PatternsPage() {
  const { org } = useTheme();
  const meta = ORG_META[org];
  const [tab, setTab] = useState<Tab>("contribute");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mt-0 mb-2 font-display text-4xl">Patterns</h1>
      <p className="mt-0 mb-8 max-w-2xl text-ink-muted">
        Working references, not mockups. Switch the brand theme in the header to see civic navy,
        campaign crimson, or advocacy forest.
      </p>

      <div
        role="tablist"
        aria-label="Pattern"
        className="mb-8 flex gap-6 overflow-auto border-b border-line"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "-mb-px min-h-11 border-b-2 px-1 text-sm font-medium whitespace-nowrap",
              tab === t.id
                ? "border-brand text-ink"
                : "border-transparent text-ink-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "contribute" ? <ContributeForm org={org} /> : null}
      {tab === "petition" ? <PetitionForm org={org} /> : null}
      {tab === "official" ? (
        <div className="grid gap-6">
          <OfficialLookup />
          <div className="grid gap-6 lg:grid-cols-2">
            <BillStatus
              number="H.R. 118"
              title="Public Record Modernization Act"
              stage="Floor"
              chamber="House"
              updatedAt="Sept 2, 2026"
            />
            <RollCallTable votes={SAMPLE_ROLL} density="compact" />
          </div>
        </div>
      ) : null}

      <div className="mt-12">
        <ComplianceFooter committee={meta.committee} orgType={meta.type} />
      </div>
    </div>
  );
}
