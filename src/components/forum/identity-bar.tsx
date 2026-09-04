import { Identifier } from "./identifier";

const TYPE_LABEL: Record<string, string> = {
  campaign: "Campaign",
  pac: "PAC",
  c4: "501(c)(4)",
  c3: "501(c)(3)",
};

type IdentityBarProps = {
  orgName: string;
  orgType: "campaign" | "pac" | "c4" | "c3";
  verified?: boolean;
};

export function IdentityBar({ orgName, orgType, verified }: IdentityBarProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 border-b border-line pb-3 text-xs text-ink-muted">
      <span className="font-medium text-ink">
        {orgName}
        <span className="font-normal text-ink-muted"> · {TYPE_LABEL[orgType]}</span>
      </span>
      {verified ? (
        <Identifier tone="success">Verified</Identifier>
      ) : (
        <Identifier tone="muted">Unverified</Identifier>
      )}
    </div>
  );
}
