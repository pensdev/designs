import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./router-70g7az7m.mjs";
import { d as SAMPLE_ROLL, l as RollCallTable, r as Identifier, t as Badge } from "./forum-data-CsVLBEg-.mjs";
import { i as RecurringToggle, n as Field, r as Input, t as Card } from "./recurring-toggle-CAqtk0SX.mjs";
import { n as BillStatus, t as AlertBanner } from "./bill-status-BXuBG7MK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/components-C6F1B5Aw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComponentsPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [monthly, setMonthly] = (0, import_react.useState)(false);
	const [errorOn, setErrorOn] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-0 mb-2 font-display text-4xl",
				children: "Components"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-10 max-w-xl text-ink-muted",
				children: "Primary is the only filled brand button on a page. Official is navy. Danger is reserved for irreversible acts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-4 font-display text-2xl",
					children: "Buttons"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "lg",
							loading,
							onClick: () => {
								setLoading(true);
								window.setTimeout(() => setLoading(false), 900);
							},
							children: "Contribute $50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							children: "Share"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							children: "Skip for now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "official",
							children: "View record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "danger",
							children: "Cancel monthly gift"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-0 mb-4 font-display text-2xl",
						children: "Status vs identifier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "info",
								children: "Introduced"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "success",
								children: "Filed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "warning",
								children: "Deadline Friday"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "danger",
								children: "Rejected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "muted",
								children: "Draft"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "NY-02" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "S. 214" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "FEC C00412345" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-4 font-display text-2xl",
					children: "Field"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "demo-email",
					label: "Email",
					hint: !errorOn ? "Used for the receipt only." : void 0,
					error: errorOn ? "Enter a valid email." : void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "demo-email",
						type: "email",
						error: errorOn,
						placeholder: "you@example.org",
						defaultValue: errorOn ? "not-an-email" : ""
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "size-4 accent-navy",
						checked: errorOn,
						onChange: (e) => setErrorOn(e.target.checked)
					}), "Show error state"]
				})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-0 mb-4 font-display text-2xl",
						children: "Recurring toggle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecurringToggle, {
						checked: monthly,
						onCheckedChange: setMonthly
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 mb-0 text-sm text-ink-muted",
						children: ["Current: ", monthly ? "monthly" : "one-time"]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-4 font-display text-2xl",
					children: "Alert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "info",
							title: "Source attached.",
							children: "Vote positions include chamber, date, and the originating API."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "warning",
							title: "Comment period closes Sept 12.",
							children: "Source: Federal Register. This is a real deadline, not a marketing timer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "danger",
							title: "Card declined.",
							children: "The processor returned insufficient funds. No charge was recorded."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-4 font-display text-2xl",
					children: "Bill status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillStatus, {
					number: "S. 214",
					title: "Digital Disclosure Act",
					stage: "Committee",
					chamber: "Senate",
					updatedAt: "Sept 1, 2026"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-0 mb-2 font-display text-2xl",
					children: "Roll call · compact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-4 text-sm text-ink-muted",
					children: "32px rows, 13px Plex, mono identifiers, hairline dividers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RollCallTable, {
					votes: SAMPLE_ROLL,
					density: "compact"
				})
			] })
		]
	});
}
//#endregion
export { ComponentsPage as component };
