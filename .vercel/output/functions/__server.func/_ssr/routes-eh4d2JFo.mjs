import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Card } from "./official-card-OEpN-px-.mjs";
import { t as Section } from "./section-CDX1i6Va.mjs";
import { a as Button, i as ORG_META, r as useTheme } from "./router-D-1ONawC.mjs";
import { l as PRINCIPLES } from "./forum-data-CsslN1Aj.mjs";
import { i as OfficialLookup, n as ContributeForm, t as ComplianceFooter } from "./official-lookup-Cogh94RA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-eh4d2JFo.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { org } = useTheme();
	const meta = ORG_META[org];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-band text-band-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 font-mono text-xs tracking-widest text-band-muted uppercase",
					children: "Forum Design System · v0.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 mb-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl",
					children: "Political tech, built to be believed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-8 max-w-xl text-lg text-band-muted",
					children: "A civic product layer for campaigns, advocacy orgs, donation flows, field tools, and policy dashboards. Brand sits on top. Structure, compliance, and action stay stable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/patterns",
						className: "no-underline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "lg",
							style: {
								backgroundColor: "var(--hero-cta-bg)",
								color: "var(--hero-cta-fg)"
							},
							children: "Open live patterns"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/foundations",
						className: "no-underline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							size: "lg",
							className: "border-band-line text-band-ink hover:bg-navy-800",
							children: "Foundations"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-2 font-mono text-xs text-band-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tone-chip px-2 py-1",
							children: "WCAG 2.2 AA floor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tone-chip px-2 py-1",
							children: "Tokens first"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tone-chip px-2 py-1",
							children: "Themable brand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tone-chip px-2 py-1",
							children: "Light + dark"
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Doctrine",
				title: "Principles",
				lede: "Decision filters. If a campaign overlay fights a principle, the principle wins.",
				className: "pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-2 font-display text-xl",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 text-sm text-ink-muted",
							children: p.body
						})]
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Patterns",
				title: "Working references",
				lede: "Not mockups. These run, validate, and disclose exactly as a shipped surface would.",
				className: "pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-2 font-display text-xl",
							children: "Contribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0 mb-6 max-w-md text-sm text-ink-muted",
							children: "Amount in the button. Recurring is a named choice, not a pre-checked switch. Employer only when the law requires it. The receipt is a page, not a toast."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributeForm, { org })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-2 font-display text-xl",
							children: "Official record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0 mb-6 max-w-md text-sm text-ink-muted",
							children: "Party is optional chrome. Office, district, and as-of date are the identity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLookup, {})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceFooter, {
					committee: meta.committee,
					orgType: meta.type
				})
			})
		]
	})] });
}
//#endregion
export { Home as component };
