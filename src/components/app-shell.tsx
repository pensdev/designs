import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button, Select } from "@/components/forum";
import { useTheme } from "@/components/theme-provider";
import { ORG_META, ORGS, type Org } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/foundations", label: "Foundations" },
  { to: "/components", label: "Components" },
  { to: "/patterns", label: "Patterns" },
  { to: "/live", label: "Live data" },
] as const;

const ORG_OPTIONS = ORGS.map((o) => ({
  value: o,
  label: ORG_META[o].label,
  hint: ORG_META[o].tone,
}));

export function AppShell({ children }: { children: ReactNode }) {
  const { theme, org, setTheme, setOrg } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-canvas">
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
                  "border-b-2 px-3 py-2 text-sm no-underline",
                  pathname === item.to
                    ? "border-gold font-medium text-ink"
                    : "border-transparent text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden w-44 sm:block">
              <Select<Org>
                id="org-select"
                aria-label="Brand theme"
                size="sm"
                value={org}
                onValueChange={setOrg}
                options={ORG_OPTIONS}
              />
            </div>
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
                    "border-l-2 px-3 py-3 text-base no-underline",
                    pathname === item.to
                      ? "border-gold font-medium text-ink"
                      : "border-transparent text-ink-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <label className="mt-3 block text-xs text-ink-muted" htmlFor="org-select-mobile">
              Brand theme
            </label>
            <div className="mt-1">
              <Select<Org>
                id="org-select-mobile"
                aria-label="Brand theme"
                value={org}
                onValueChange={setOrg}
                options={ORG_OPTIONS}
              />
            </div>
          </div>
        ) : null}
      </header>
      <main>{children}</main>
    </div>
  );
}
