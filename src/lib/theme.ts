export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const ORGS = ["civic", "crimson", "forest"] as const;
export type Org = (typeof ORGS)[number];

export const ORG_META: Record<
  Org,
  {
    label: string;
    committee: string;
    type: "pac" | "c4" | "c3" | "campaign";
    tone: string;
  }
> = {
  civic: {
    label: "Civic navy",
    committee: "Open Record PAC",
    type: "pac",
    tone: "Quietest. Serif display, generous rules, gold only on provenance.",
  },
  crimson: {
    label: "Campaign crimson",
    committee: "Ruiz for Congress",
    type: "campaign",
    tone: "Loudest. Tighter type, heavier display, larger primary, filled chips.",
  },
  forest: {
    label: "Advocacy forest",
    committee: "Disclosure Fund",
    type: "c4",
    tone: "Middle. Brand fill, mid tracking, outline chips.",
  },
};

const THEME_KEY = "forum-theme";
const ORG_KEY = "forum-org";

export function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const v = window.localStorage.getItem(THEME_KEY);
  return v === "dark" ? "dark" : "light";
}

export function readStoredOrg(): Org {
  if (typeof window === "undefined") return "civic";
  const v = window.localStorage.getItem(ORG_KEY);
  return ORGS.includes(v as Org) ? (v as Org) : "civic";
}

export function persistTheme(theme: Theme) {
  window.localStorage.setItem(THEME_KEY, theme);
}

export function persistOrg(org: Org) {
  window.localStorage.setItem(ORG_KEY, org);
}

export function applyDocumentTheme(theme: Theme, org: Org) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.setAttribute("data-org", org);
}
