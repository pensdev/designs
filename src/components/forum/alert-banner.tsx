import { CircleAlert, Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AlertBannerProps = {
  tone?: "info" | "warning" | "danger";
  title: string;
  children?: ReactNode;
};

const ICONS = {
  info: Info,
  warning: TriangleAlert,
  danger: CircleAlert,
};

export function AlertBanner({ tone = "info", title, children }: AlertBannerProps) {
  const Icon = ICONS[tone];
  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-md border px-4 py-3 text-sm text-ink",
        tone === "info" && "border-info/25 bg-info-soft",
        tone === "warning" && "border-warning/30 bg-warning-soft",
        tone === "danger" && "border-danger/30 bg-danger-soft",
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div>
        <p className="m-0 font-semibold">{title}</p>
        {children ? <p className="mt-1 mb-0 text-ink-muted">{children}</p> : null}
      </div>
    </div>
  );
}
