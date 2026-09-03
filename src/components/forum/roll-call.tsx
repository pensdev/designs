import { Identifier } from "./identifier";
import { ProvenanceStamp } from "./provenance-stamp";
import { Record, RecordSection, type RecordDensity } from "./record";
import { cn } from "@/lib/utils";

export type VotePosition = {
  roll: string;
  question: string;
  position: "Yea" | "Nay" | "Present" | "Not voting";
  date: string;
};

export function VoteRow({ vote }: { vote: VotePosition }) {
  return (
    <tr className="h-8 border-b border-line last:border-b-0">
      <td className="px-3 font-mono text-dense tabular-nums text-ink">{vote.roll}</td>
      <td className="px-3 text-dense text-ink">{vote.question}</td>
      <td className="px-3">
        <Identifier>{vote.position}</Identifier>
      </td>
      <td className="px-3 text-right font-mono text-dense tabular-nums text-ink-muted">
        {vote.date}
      </td>
    </tr>
  );
}

type RollCallTableProps = {
  votes: VotePosition[];
  density?: RecordDensity;
  embedded?: boolean;
  source?: string;
  retrieved?: string;
  api?: string;
};

export function RollCallTable({
  votes,
  density = "compact",
  embedded,
  source = "Congress.gov",
  retrieved = "Sept 2, 2026",
  api = "vote API",
}: RollCallTableProps) {
  const table = (
    <div className={cn("overflow-x-auto", density === "compact" && "text-dense")}>
      <table className="w-full min-w-lg border-collapse text-left">
        <thead>
          <tr className="h-8 border-b border-line text-ink-muted">
            <th className="px-3 font-mono text-xs font-medium">Roll</th>
            <th className="px-3 text-xs font-medium">Question</th>
            <th className="px-3 text-xs font-medium">Position</th>
            <th className="px-3 text-right text-xs font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote) => (
            <VoteRow key={vote.roll + vote.question} vote={vote} />
          ))}
        </tbody>
      </table>
    </div>
  );

  if (embedded) return table;

  return (
    <Record density={density}>
      <RecordSection className="px-0 py-0">{table}</RecordSection>
      <RecordSection>
        <ProvenanceStamp source={source} retrieved={retrieved} api={api} />
      </RecordSection>
    </Record>
  );
}
