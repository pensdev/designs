import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  applyDocumentTheme,
  persistOrg,
  persistTheme,
  readStoredOrg,
  readStoredTheme,
  type Org,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  org: Org;
  setTheme: (theme: Theme) => void;
  setOrg: (org: Org) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [org, setOrgState] = useState<Org>("civic");

  useEffect(() => {
    const t = readStoredTheme();
    const o = readStoredOrg();
    setThemeState(t);
    setOrgState(o);
    applyDocumentTheme(t, o);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      org,
      setTheme: (next) => {
        setThemeState(next);
        persistTheme(next);
        applyDocumentTheme(next, org);
      },
      setOrg: (next) => {
        setOrgState(next);
        persistOrg(next);
        applyDocumentTheme(theme, next);
      },
    }),
    [theme, org],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
