type PaidForByProps = {
  committee: string;
  address?: string;
  independentExpenditure?: boolean;
};

export function PaidForBy({
  committee,
  address = "100 Civic Way, Washington, DC 20001",
  independentExpenditure,
}: PaidForByProps) {
  return (
    <p className="border-t border-line pt-3 text-xs leading-relaxed text-ink-muted">
      Paid for by {committee}
      {address ? `, ${address}` : "."}
      {independentExpenditure
        ? " Not authorized by any candidate or candidate’s committee."
        : null}
    </p>
  );
}
