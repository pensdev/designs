import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/forum";
import { useTheme } from "@/components/theme-provider";
import { ORG_META, ORGS } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/foundations", label: "Foundations" },
  { to: "/components", label: "Components" },
  { to: "/patterns", label: "Patterns" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const { theme, org, setTheme, setOrg } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-xl font-bold tracking-tight text-ink">Forum</span>
            <span className="hidden text-xs tracking-widest text-ink-subtle uppercase sm:inline">
              DS
            </span>
          </Link>
          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm no-underline",
                  pathname === item.to
                    ? "bg-canvas-subtle font-medium text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <label className="sr-only" htmlFor="org-select">
              Brand theme
            </label>
            <select
              id="org-select"
              value={org}
              onChange={(e) => setOrg(e.target.value as (typeof ORGS)[number])}
              className="hidden h-10 max-w-40 rounded-md border border-line-strong bg-canvas-elevated px-2 text-sm text-ink sm:block"
            >
              {ORGS.map((o) => (
                <option key={o} value={o}>
                  {ORG_META[o].label}
                </option>
              ))}
            </select>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="md:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-line px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-base no-underline",
                    pathname === item.to ? "bg-canvas-subtle text-ink" : "text-ink-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <label className="mt-3 block text-xs text-ink-muted" htmlFor="org-select-mobile">
              Brand theme
            </label>
            <select
              id="org-select-mobile"
              value={org}
              onChange={(e) => setOrg(e.target.value as (typeof ORGS)[number])}
              className="mt-1 h-11 w-full rounded-md border border-line-strong bg-canvas-elevated px-2 text-sm"
            >
              {ORGS.map((o) => (
                <option key={o} value={o}>
                  {ORG_META[o].label}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </header>
      <main>{children}</main>
    </div>
  );
}
