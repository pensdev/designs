import { i as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Moon, d as Check, l as ChevronUp, n as TriangleAlert, o as Menu, r as Sun, s as LoaderCircle, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as SelectItemIndicator, c as SelectScrollDownButton, d as SelectValue, f as SelectViewport, i as SelectItem, l as SelectScrollUpButton, n as SelectContent, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectTrigger } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BItfqQxd.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(amount, digits = 0) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(amount);
}
function formatCount(n) {
	return new Intl.NumberFormat("en-US").format(n);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,border-color,opacity] duration-[var(--duration-swift)] ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-brand text-on-brand hover:bg-brand-hover",
			secondary: "border border-line-strong bg-transparent text-ink hover:bg-canvas-subtle",
			ghost: "bg-transparent text-navy-700 hover:bg-canvas-subtle dark:text-ink",
			danger: "bg-danger text-canvas-elevated hover:opacity-90 dark:text-canvas",
			official: "bg-navy text-ink-inverse hover:bg-navy-900 dark:bg-official dark:text-canvas"
		},
		size: {
			sm: "h-10 min-h-10 rounded-md px-3 text-sm",
			md: "h-11 min-h-11 rounded-md px-4 text-sm",
			lg: "btn-size-lg rounded-md px-5 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, loading, disabled, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		disabled: disabled || loading,
		...props,
		children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "size-4 animate-spin",
			"aria-hidden": "true"
		}) : null, children]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-D-1ONawC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-canvas px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-ink-muted",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var ORGS = [
	"civic",
	"crimson",
	"forest"
];
var ORG_META = {
	civic: {
		label: "Civic navy",
		committee: "Open Record PAC",
		type: "pac",
		tone: "Quietest. Serif display, generous rules, gold only on provenance."
	},
	crimson: {
		label: "Campaign crimson",
		committee: "Ruiz for Congress",
		type: "campaign",
		tone: "Loudest. Tighter type, heavier display, larger primary, filled chips."
	},
	forest: {
		label: "Advocacy forest",
		committee: "Disclosure Fund",
		type: "c4",
		tone: "Middle. Brand fill, mid tracking, outline chips."
	}
};
var THEME_KEY = "forum-theme";
var ORG_KEY = "forum-org";
function readStoredTheme() {
	if (typeof window === "undefined") return "light";
	return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}
function readStoredOrg() {
	if (typeof window === "undefined") return "civic";
	const v = window.localStorage.getItem(ORG_KEY);
	return ORGS.includes(v) ? v : "civic";
}
function persistTheme(theme) {
	window.localStorage.setItem(THEME_KEY, theme);
}
function persistOrg(org) {
	window.localStorage.setItem(ORG_KEY, org);
}
function applyDocumentTheme(theme, org) {
	const root = document.documentElement;
	root.setAttribute("data-theme", theme);
	root.setAttribute("data-org", org);
}
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	const [org, setOrgState] = (0, import_react.useState)("civic");
	(0, import_react.useEffect)(() => {
		const t = readStoredTheme();
		const o = readStoredOrg();
		setThemeState(t);
		setOrgState(o);
		applyDocumentTheme(t, o);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
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
		}
	}), [theme, org]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var TRIGGER_SIZE = {
	sm: "h-10 min-h-10 text-sm",
	md: "h-11 min-h-11 text-sm"
};
/**
* The system's dropdown. Built on Radix so keyboard, typeahead, and collision
* handling are correct, and styled in the record register: hairline box, 2px
* radius, no pill, gold marking the chosen row the way it marks the active nav
* item. The panel is the one surface allowed a shadow — it floats over content,
* so it has to separate from it.
*/
function Select({ id, value, onValueChange, options, placeholder = "Select…", size = "md", disabled, className, ...aria }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
		value,
		onValueChange,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
			id,
			...aria,
			className: cn("group flex w-full items-center justify-between gap-2", "rounded-record border border-line-strong bg-canvas px-3 text-ink", "transition-[border-color,background-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]", "hover:bg-canvas-subtle", "data-[state=open]:border-accent", "data-[placeholder]:text-ink-subtle", "disabled:cursor-not-allowed disabled:opacity-50", TRIGGER_SIZE[size], className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "size-4 shrink-0 text-ink-subtle transition-transform duration-[var(--duration-swift)] ease-[var(--ease-standard)] group-data-[state=open]:rotate-180",
					"aria-hidden": "true"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			position: "popper",
			sideOffset: 4,
			className: cn("select-panel z-50 overflow-hidden", "rounded-record border border-line-strong bg-canvas-elevated shadow-(--shadow-2)", "max-h-(--radix-select-content-available-height)", "w-(--radix-select-trigger-width)"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {
					className: "flex h-6 items-center justify-center border-b border-line bg-canvas-elevated text-ink-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
					className: "p-0",
					children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: option.value,
						className: cn("relative flex cursor-pointer items-center justify-between gap-3", "border-l-2 border-transparent border-b border-b-line px-3 py-2.5 text-sm text-ink last:border-b-0", "outline-none select-none", "data-[highlighted]:bg-canvas-subtle", "data-[state=checked]:border-l-gold data-[state=checked]:font-medium", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: option.label }), option.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs font-normal text-ink-muted",
								children: option.hint
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5 shrink-0 text-gold-700 dark:text-gold-400",
								"aria-hidden": "true"
							})
						})]
					}, option.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {
					className: "flex h-6 items-center justify-center border-t border-line bg-canvas-elevated text-ink-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				})
			]
		}) })]
	});
}
var NAV = [
	{
		to: "/",
		label: "Overview"
	},
	{
		to: "/foundations",
		label: "Foundations"
	},
	{
		to: "/components",
		label: "Components"
	},
	{
		to: "/patterns",
		label: "Patterns"
	},
	{
		to: "/live",
		label: "Live data"
	}
];
var ORG_OPTIONS = ORGS.map((o) => ({
	value: o,
	label: ORG_META[o].label,
	hint: ORG_META[o].tone
}));
function AppShell({ children }) {
	const { theme, org, setTheme, setOrg } = useTheme();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b border-line bg-canvas",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2 no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-bold tracking-tight text-ink",
							children: "Forum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs tracking-widest text-ink-subtle uppercase sm:inline",
							children: "DS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-4 hidden items-center gap-1 md:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("border-b-2 px-3 py-2 text-sm no-underline", pathname === item.to ? "border-gold font-medium text-ink" : "border-transparent text-ink-muted hover:text-ink"),
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden w-44 sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									id: "org-select",
									"aria-label": "Brand theme",
									size: "sm",
									value: org,
									onValueChange: setOrg,
									options: ORG_OPTIONS
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								size: "sm",
								"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
								onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "md:hidden",
								"aria-expanded": open,
								"aria-label": "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line px-4 py-3 md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1",
						"aria-label": "Mobile",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: cn("border-l-2 px-3 py-3 text-base no-underline", pathname === item.to ? "border-gold font-medium text-ink" : "border-transparent text-ink-muted"),
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-3 block text-xs text-ink-muted",
						htmlFor: "org-select-mobile",
						children: "Brand theme"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "org-select-mobile",
							"aria-label": "Brand theme",
							value: org,
							onValueChange: setOrg,
							options: ORG_OPTIONS
						})
					})
				]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children })]
	});
}
var styles_default = "/assets/styles-Dv5swdw5.css";
var APP_NAME = "Forum Design System";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Forum is a civic design system for political technology: campaigns, advocacy, donations, and official records."
			},
			{
				name: "theme-color",
				content: "#1B314C"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		"data-theme": "light",
		"data-org": "civic",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `try{var t=localStorage.getItem('forum-theme')||'light';var o=localStorage.getItem('forum-org')||'civic';document.documentElement.setAttribute('data-theme',t);document.documentElement.setAttribute('data-org',o);}catch(e){}` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-eh4d2JFo.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./components-dIEm3rqd.mjs");
var Route$3 = createFileRoute("/components")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./foundations-CjQ-vQvY.mjs");
var Route$2 = createFileRoute("/foundations")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
/** Deliberately off-system: the "before" specimen keeps the old framework look. */
var $$splitComponentImporter$1 = () => import("./live-Dr5drvC-.mjs");
var Route$1 = createFileRoute("/live")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
/** Every live panel reports the same three states, so none of them can fake one. */
/** Census + Congress.gov, chained: address → district → sitting members. */
var $$splitComponentImporter = () => import("./patterns-Cxz4jgRI.mjs");
var Route = createFileRoute("/patterns")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	ComponentsRoute: Route$3.update({
		id: "/components",
		path: "/components",
		getParentRoute: () => Route$5
	}),
	FoundationsRoute: Route$2.update({
		id: "/foundations",
		path: "/foundations",
		getParentRoute: () => Route$5
	}),
	LiveRoute: Route$1.update({
		id: "/live",
		path: "/live",
		getParentRoute: () => Route$5
	}),
	PatternsRoute: Route.update({
		id: "/patterns",
		path: "/patterns",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Button as a, formatUsd as c, ORG_META as i, Select as n, cn as o, useTheme as r, formatCount as s, router_exports as t };
