type ComplianceFooterProps = {
  committee: string;
  orgType: "campaign" | "pac" | "c4" | "c3";
};

const LEGAL: Record<ComplianceFooterProps["orgType"], string> = {
  campaign:
    "Contributions are not tax deductible. Federal law requires us to use best efforts to collect and report the name, mailing address, occupation, and name of employer of individuals whose contributions exceed $200 in an election cycle.",
  pac: "Contributions to this PAC are not tax deductible. Paid political advertising.",
  c4: "Contributions to a 501(c)(4) social welfare organization are not tax deductible. This communication is not paid for by a candidate.",
  c3: "Contributions may be tax deductible as charitable contributions to the extent permitted by law. This organization does not endorse or oppose candidates.",
};

export function ComplianceFooter({ committee, orgType }: ComplianceFooterProps) {
  return (
    <footer className="border-t border-line pt-6 text-xs leading-relaxed text-ink-muted">
      <p className="m-0 font-medium text-ink">{committee}</p>
      <p className="mt-2 mb-0">{LEGAL[orgType]}</p>
      <p className="mt-3 mb-0">Privacy · Contact · Committee address on file with the FEC.</p>
    </footer>
  );
}
