import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as formatCount, n as Button, o as useTheme, r as cn, s as ORG_META } from "./router-70g7az7m.mjs";
import { d as SAMPLE_ROLL, l as RollCallTable, o as ProvenanceStamp } from "./forum-data-CsVLBEg-.mjs";
import { n as Field, r as Input, t as Card } from "./recurring-toggle-CAqtk0SX.mjs";
import { n as BillStatus, t as AlertBanner } from "./bill-status-BXuBG7MK.mjs";
import { a as PaidForBy, i as OfficialLookup, n as ContributeForm, r as IdentityBar, t as ComplianceFooter } from "./official-lookup-DkwZ3kK0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patterns-D-yFjtQz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PetitionCounter({ current, goal, updatedAt }) {
	const pct = goal ? Math.min(100, Math.round(current / goal * 100)) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "m-0 font-display text-3xl font-semibold tabular-nums text-ink",
		children: [formatCount(current), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 text-base font-normal text-ink-muted",
			children: "signatures"
		})]
	}), goal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 overflow-hidden rounded-full bg-canvas-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-brand",
				style: { width: `${pct}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 mb-0 text-xs text-ink-muted",
			children: [
				"Goal ",
				formatCount(goal),
				" · Updated ",
				updatedAt
			]
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-1 mb-0 text-xs text-ink-muted",
		children: ["Updated ", updatedAt]
	})] });
}
function PetitionForm({ org }) {
	const meta = ORG_META[org];
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [zip, setZip] = (0, import_react.useState)("");
	const [count, setCount] = (0, import_react.useState)(18420);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)();
	function submit() {
		setError(void 0);
		if (!name.trim() || !email.trim() || zip.trim().length < 5) {
			setError("Name, email, and a 5-digit ZIP are required.");
			return;
		}
		setCount((c) => c + 1);
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		variant: "action",
		className: "max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityBar, {
				orgName: meta.committee,
				orgType: meta.type
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
				tone: "warning",
				title: "Comment period closes Sept 12.",
				children: "Source: Federal Register. This is a real deadline, not a marketing timer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 mb-2 font-display text-2xl text-ink",
				children: "Require disclosure on paid issue ads"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-4 text-sm text-ink-muted",
				children: "Signatures are delivered as a docket comment to the agency — not added to a hidden list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetitionCounter, {
				current: count,
				goal: 25e3,
				updatedAt: "today, 4:10 p.m. ET"
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 mb-0 rounded-md bg-success-soft px-3 py-3 text-sm text-success",
				role: "status",
				children: [
					"Signed. District offices matching ",
					zip,
					" will receive this comment."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "pet-name",
						label: "Full name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pet-name",
							value: name,
							onChange: (e) => setName(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "pet-email",
						label: "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pet-email",
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "pet-zip",
						label: "ZIP code",
						hint: "Used only to resolve your district.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pet-zip",
							inputMode: "numeric",
							maxLength: 5,
							value: zip,
							onChange: (e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 text-sm text-danger",
						role: "alert",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "lg",
						className: "w-full",
						onClick: submit,
						children: "Sign the petition"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
					source: "Federal Register",
					retrieved: "Aug 28, 2026",
					api: "docket"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaidForBy, {
				committee: meta.committee,
				independentExpenditure: meta.type !== "campaign"
			})
		]
	});
}
var TABS = [
	{
		id: "contribute",
		label: "Contribute"
	},
	{
		id: "petition",
		label: "Petition"
	},
	{
		id: "official",
		label: "Official"
	}
];
function PatternsPage() {
	const { org } = useTheme();
	const meta = ORG_META[org];
	const [tab, setTab] = (0, import_react.useState)("contribute");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-0 mb-2 font-display text-4xl",
				children: "Patterns"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-8 max-w-xl text-ink-muted",
				children: "Working references, not mockups. Switch the brand theme in the header to see civic navy, campaign crimson, or advocacy forest."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tablist",
				"aria-label": "Pattern",
				className: "mb-8 flex gap-1 overflow-auto rounded-md border border-line bg-canvas-subtle p-1",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": tab === t.id,
					onClick: () => setTab(t.id),
					className: cn("min-h-11 flex-1 rounded-sm px-4 text-sm font-medium", tab === t.id ? "bg-canvas-elevated text-ink shadow-(--shadow-1)" : "text-ink-muted"),
					children: t.label
				}, t.id))
			}),
			tab === "contribute" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributeForm, { org }) : null,
			tab === "petition" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetitionForm, { org }) : null,
			tab === "official" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLookup, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillStatus, {
						number: "H.R. 118",
						title: "Public Record Modernization Act",
						stage: "Floor",
						chamber: "House",
						updatedAt: "Sept 2, 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RollCallTable, {
						votes: SAMPLE_ROLL,
						density: "compact"
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceFooter, {
					committee: meta.committee,
					orgType: meta.type
				})
			})
		]
	});
}
//#endregion
export { PatternsPage as component };
