import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as Button, o as cn } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/official-card-OEpN-px-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* The ruled callout: hairline box, no fill, a colored rule down the left edge.
* Root of the notice family — provenance stamps and alerts are the same shape,
* separated only by the color of the rule.
*/
function Callout({ rule, className, style, children, ...props }) {
	const ruled = {
		borderLeftWidth: 3,
		borderLeftColor: rule,
		...style
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-record border border-line bg-canvas px-3 py-2 text-ink", className),
		style: ruled,
		...props,
		children
	});
}
/**
* The product register: a broadside, not a floating card. Hairline box, no
* shadow, and a 2px rule across the top that carries the brand. The rule reads
* from --card-rule rather than the brand directly, because the brand inverts to
* near-paper in dark mode and would burn a white bar across every card.
* The record register (see Record) stays unruled and unbranded.
*/
var cardVariants = cva("rounded-record border border-line border-t-2 border-t-card-rule bg-canvas-elevated p-5", {
	variants: { variant: {
		editorial: "",
		official: "border-t-official",
		data: "p-4",
		action: "p-6"
	} },
	defaultVariants: { variant: "editorial" }
});
function Card({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(cardVariants({ variant }), className),
		...props
	});
}
var identifierVariants = cva("inline-flex items-center rounded-record border bg-canvas px-1.5 py-0.5 font-mono text-xs font-medium tabular-nums", {
	variants: { tone: {
		neutral: "border-line text-ink",
		info: "border-info/45 text-info",
		success: "border-success/45 text-success",
		warning: "border-warning/45 text-warning",
		danger: "border-danger/45 text-danger",
		muted: "border-line text-ink-subtle"
	} },
	defaultVariants: { tone: "neutral" }
});
/**
* The only small-label component in the system. Identifiers (NY-02, S. 214) and
* statuses (Introduced, Recorded) share one hairline box — status is a tone on
* the same shape, never a filled pill.
*/
function Identifier({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(identifierVariants({ tone }), className),
		...props
	});
}
function ProvenanceStamp({ source, retrieved, api, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
		rule: "var(--forum-gold)",
		className: cn("py-1.5", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "m-0 font-mono text-xs leading-snug text-ink-muted",
			children: [
				source,
				" · ",
				retrieved,
				" · ",
				api
			]
		})
	});
}
function Record({ density = "regular", className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-density": density,
		className: cn("overflow-hidden rounded-record border border-line bg-canvas-elevated leading-snug shadow-none tabular-nums", density === "compact" && "text-dense", className),
		...props,
		children
	});
}
function RecordSection({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b border-line px-4 py-3 last:border-b-0 [[data-density=compact]_&]:px-3 [[data-density=compact]_&]:py-2", className),
		...props,
		children
	});
}
function VoteRow({ vote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "h-8 border-b border-line last:border-b-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 font-mono text-dense tabular-nums text-ink",
				children: vote.roll
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 text-dense text-ink",
				children: vote.question
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: vote.position })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 text-right font-mono text-dense tabular-nums text-ink-muted",
				children: vote.date
			})
		]
	});
}
function RollCallTable({ votes, density = "compact", embedded, positionHeader = "Position", source = "Congress.gov", retrieved = "Sept 2, 2026", api = "vote API" }) {
	const table = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-x-auto", density === "compact" && "text-dense"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-lg border-collapse text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "h-8 border-b border-line text-ink-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 font-mono text-xs font-medium",
						children: "Roll"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 text-xs font-medium",
						children: "Question"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 text-xs font-medium",
						children: positionHeader
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 text-right text-xs font-medium",
						children: "Date"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: votes.map((vote) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteRow, { vote }, vote.roll + vote.question)) })]
		})
	});
	if (embedded) return table;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, {
		density,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, {
			className: "px-0 py-0",
			children: table
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source,
			retrieved,
			api
		}) })]
	});
}
function portraitInitial(name) {
	return name.replace(/^(Rep\.|Sen\.|Del\.)\s+/u, "").charAt(0).toUpperCase();
}
function OfficialCard({ official, onCall, onWrite, onRecord }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const votes = official.votes ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex items-center justify-between gap-3 text-xs text-ink-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official record" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: official.district })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-14 shrink-0 items-center justify-center rounded-record border border-line bg-canvas font-display text-2xl leading-none text-ink",
				"aria-hidden": "true",
				children: portraitInitial(official.name)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-0 mb-0 font-display text-xl text-ink",
					children: official.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-0 text-sm leading-snug text-ink-muted",
					children: official.office
				})]
			})]
		}),
		official.nextEvent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm leading-snug text-ink-muted",
			children: official.nextEvent
		}) }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "official",
					size: "sm",
					onClick: onCall,
					children: "Call office"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					size: "sm",
					onClick: onWrite,
					children: "Write"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => {
						setOpen((v) => !v);
						onRecord?.();
					},
					children: "Voting record"
				})
			]
		}),
		open && votes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, {
			className: "px-0 py-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RollCallTable, {
				votes,
				density: "compact",
				embedded: true
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source: official.source,
			retrieved: official.asOf,
			api: official.api
		}) })
	] });
}
//#endregion
export { ProvenanceStamp as a, RollCallTable as c, OfficialCard as i, Card as n, Record as o, Identifier as r, RecordSection as s, Callout as t };
