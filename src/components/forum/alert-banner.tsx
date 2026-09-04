import type { ReactNode } from "react";
import { Callout } from "./callout";

type Tone = "info" | "warning" | "danger";

type AlertBannerProps = {
  tone?: Tone;
  title: string;
  children?: ReactNode;
};

const RULE: Record<Tone, string> = {
  info: "var(--forum-info)",
  warning: "var(--forum-warning)",
  danger: "var(--forum-danger)",
};

const LABEL: Record<Tone, string> = {
  info: "Note",
  warning: "Notice",
  danger: "Problem",
};

const LABEL_COLOR: Record<Tone, string> = {
  info: "text-info",
  warning: "text-warning",
  danger: "text-danger",
};

export function AlertBanner({ tone = "info", title, children }: AlertBannerProps) {
  return (
    <Callout role="status" rule={RULE[tone]} className="py-2.5">
      <p className={`m-0 font-mono text-xs tracking-widest uppercase ${LABEL_COLOR[tone]}`}>
        {LABEL[tone]}
      </p>
      <p className="mt-1 mb-0 text-sm leading-snug font-semibold text-ink">{title}</p>
      {children ? (
        <p className="mt-1 mb-0 text-sm leading-snug text-ink-muted">{children}</p>
      ) : null}
    </Callout>
  );
}
