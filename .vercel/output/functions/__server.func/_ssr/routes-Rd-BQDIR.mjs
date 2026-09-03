import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button, o as useTheme, s as ORG_META } from "./router-70g7az7m.mjs";
import { a as PRINCIPLES } from "./forum-data-CsVLBEg-.mjs";
import { i as OfficialLookup, n as ContributeForm, t as ComplianceFooter } from "./official-lookup-DkwZ3kK0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Rd-BQDIR.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { org } = useTheme();
	const meta = ORG_META[org];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy-900 text-ink-inverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 text-xs font-semibold tracking-widest text-hero-muted uppercase",
						children: "Forum Design System · v0.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 mb-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl",
						children: "Political tech, built to be believed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0 mb-8 max-w-xl text-lg text-hero-muted",
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
								className: "border-ink-inverse/30 text-ink-inverse hover:bg-navy-800",
								children: "Foundations"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-2 text-xs text-ink-inverse",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tone-chip rounded-full px-3 py-1",
								children: "WCAG 2.2 AA floor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tone-chip rounded-full px-3 py-1",
								children: "Tokens first"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tone-chip rounded-full px-3 py-1",
								children: "Themable brand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tone-chip rounded-full px-3 py-1",
								children: "Light + dark"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-2 font-display text-3xl",
					children: "Principles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-8 max-w-xl text-ink-muted",
					children: "Decision filters. If a campaign overlay fights a principle, the principle wins."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-canvas-elevated p-5 shadow-(--shadow-border)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-2 font-display text-xl",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 text-sm text-ink-muted",
							children: p.body
						})]
					}, p.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-canvas-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 text-xs font-semibold tracking-widest text-ink-subtle uppercase",
						children: "Pattern"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 mb-2 font-display text-3xl",
						children: "Contribution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0 mb-6 text-ink-muted",
						children: "Amount in the button. Recurring opt-in. Employer only when the law requires it. Receipt is a page, not a toast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributeForm, { org })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 text-xs font-semibold tracking-widest text-ink-subtle uppercase",
						children: "Pattern"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 mb-2 font-display text-3xl",
						children: "Official record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0 mb-6 text-ink-muted",
						children: "Party is optional chrome. Office, district, and as-of date are the identity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLookup, {})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceFooter, {
				committee: meta.committee,
				orgType: meta.type
			})
		})
	] });
}
//#endregion
export { Home as component };
