import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-70g7az7m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forum-data-CsVLBEg-.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide uppercase", {
	variants: { tone: {
		info: "bg-info-soft text-info",
		success: "bg-success-soft text-success",
		warning: "bg-warning-soft text-warning",
		danger: "bg-danger-soft text-danger",
		muted: "bg-canvas-subtle text-ink-muted"
	} },
	defaultVariants: { tone: "info" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
function ProvenanceStamp({ source, retrieved, api, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("m-0 border border-line bg-canvas px-2.5 py-1.5 font-mono text-xs leading-snug text-ink-muted", className),
		style: {
			borderLeftWidth: 2,
			borderLeftColor: "var(--forum-gold)"
		},
		children: [
			source,
			" · ",
			retrieved,
			" · ",
			api
		]
	});
}
function Identifier({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-record border border-line bg-canvas px-1.5 py-0.5 font-mono text-xs font-medium tabular-nums text-ink", className),
		...props
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
function RollCallTable({ votes, density = "compact", embedded, source = "Congress.gov", retrieved = "Sept 2, 2026", api = "vote API" }) {
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
						children: "Position"
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
var PRINCIPLES = [
	{
		title: "Earn trust",
		body: "Who is speaking, who paid, and when the data was current — visible without a hunt."
	},
	{
		title: "One civic act",
		body: "Donate, sign, call, look up. One primary action per viewport."
	},
	{
		title: "Tell the truth",
		body: "No fake urgency. Polls and counts carry methodology and as-of dates."
	},
	{
		title: "Accessible floor",
		body: "AA contrast, 44px field targets, meaning never encoded in color alone."
	},
	{
		title: "Brand is a layer",
		body: "Orgs change brand tokens. They do not redefine danger, success, or official."
	},
	{
		title: "Field-fast",
		body: "The act is possible before maps, video, or voter-file widgets load."
	}
];
var COLOR_GROUPS = [
	{
		name: "Canvas & ink",
		swatches: [
			{
				token: "canvas",
				hex: "#F4F1EA"
			},
			{
				token: "elevated",
				hex: "#FFFBF4"
			},
			{
				token: "ink",
				hex: "#12171F"
			},
			{
				token: "ink-muted",
				hex: "#4B5563"
			},
			{
				token: "line",
				hex: "#D6D0C4"
			}
		]
	},
	{
		name: "Navy & gold",
		swatches: [
			{
				token: "navy-950",
				hex: "#0B1724"
			},
			{
				token: "navy-800",
				hex: "#1B314C"
			},
			{
				token: "navy-600",
				hex: "#2C5A86"
			},
			{
				token: "gold-500",
				hex: "#C4A35A"
			},
			{
				token: "gold-100",
				hex: "#F3E8C8"
			}
		]
	},
	{
		name: "Semantic (locked)",
		swatches: [
			{
				token: "success",
				hex: "#176B45"
			},
			{
				token: "warning",
				hex: "#9A4E09"
			},
			{
				token: "danger",
				hex: "#9B1C1C"
			},
			{
				token: "info",
				hex: "#234368"
			}
		]
	}
];
var TYPE_ROWS = [
	{
		token: "display",
		sample: "The record is public.",
		className: "font-display text-4xl font-bold leading-tight"
	},
	{
		token: "title",
		sample: "Look up your representatives",
		className: "font-display text-3xl font-bold"
	},
	{
		token: "heading",
		sample: "Contribute to the committee",
		className: "font-display text-2xl font-semibold"
	},
	{
		token: "subhead",
		sample: "Sen. Maria Chen · NY-Class I",
		className: "text-xl font-medium"
	},
	{
		token: "body",
		sample: "Paid for by Example Committee. Contributions are not tax deductible.",
		className: "text-base"
	},
	{
		token: "caption",
		sample: "As of Sept 2, 2026 · Source: Congress.gov",
		className: "text-xs text-ink-muted"
	},
	{
		token: "mono",
		sample: "S. 214 · FEC C00412345 · NY-02",
		className: "font-mono text-sm"
	}
];
var THEME_ALLOWANCES = [
	{
		token: "Brand primary / CTA",
		civic: "Navy fill, paper on inverse hero",
		crimson: "Crimson fill, larger primary",
		forest: "Forest fill",
		locked: false
	},
	{
		token: "Display weight & tracking",
		civic: "600, generous",
		crimson: "700, tight",
		forest: "600, mid",
		locked: false
	},
	{
		token: "Chips (product)",
		civic: "Hairline outline",
		crimson: "Filled brand",
		forest: "Outline",
		locked: false
	},
	{
		token: "Gold",
		civic: "Provenance rule only",
		crimson: "Provenance rule only",
		forest: "Provenance rule only",
		locked: true
	},
	{
		token: "Danger / success / official",
		civic: "Unchanged",
		crimson: "Unchanged",
		forest: "Unchanged",
		locked: true
	},
	{
		token: "Record register",
		civic: "2px, no shadow, rules",
		crimson: "Same — cannot loud-ify",
		forest: "Same",
		locked: true
	}
];
var RUIZ_VOTES = [
	{
		roll: "418",
		question: "On Passage of S. 214",
		position: "Yea",
		date: "2026-08-12"
	},
	{
		roll: "401",
		question: "On the Motion to Recommit",
		position: "Nay",
		date: "2026-08-11"
	},
	{
		roll: "388",
		question: "On Agreeing to the Amendment",
		position: "Yea",
		date: "2026-07-30"
	},
	{
		roll: "372",
		question: "On Passage of H.R. 118",
		position: "Present",
		date: "2026-07-22"
	}
];
var OFFICIALS = {
	"11702": [{
		name: "Rep. Alexandra Ruiz",
		office: "U.S. House · 2nd District of New York",
		district: "NY-02",
		phone: "(202) 225-0002",
		nextEvent: "Next town hall: Sept 18, Babylon. Phone hours 9–5 ET.",
		asOf: "Sept 2, 2026",
		source: "Congress.gov",
		api: "member API",
		votes: RUIZ_VOTES
	}, {
		name: "Sen. Maria Chen",
		office: "U.S. Senate · New York",
		district: "NY-Class I",
		nextEvent: "Office open 9–5 ET.",
		asOf: "Sept 2, 2026",
		source: "Congress.gov",
		api: "member API",
		votes: [
			{
				roll: "214",
				question: "On Cloture on S. 214",
				position: "Yea",
				date: "2026-08-19"
			},
			{
				roll: "209",
				question: "On the Nomination",
				position: "Yea",
				date: "2026-08-04"
			},
			{
				roll: "188",
				question: "On Passage of S. 90",
				position: "Nay",
				date: "2026-07-16"
			}
		]
	}],
	"20001": [{
		name: "Del. James Okonkwo",
		office: "U.S. House · District of Columbia",
		district: "DC-AL",
		nextEvent: "Constituent hours Thursday 2–5 ET.",
		asOf: "Sept 2, 2026",
		source: "Congress.gov",
		api: "member API",
		votes: [{
			roll: "418",
			question: "On Passage of S. 214",
			position: "Yea",
			date: "2026-08-12"
		}, {
			roll: "372",
			question: "On Passage of H.R. 118",
			position: "Yea",
			date: "2026-07-22"
		}]
	}]
};
var SAMPLE_ROLL = RUIZ_VOTES;
var SAMPLE_AMOUNTS = [
	25,
	50,
	100,
	250
];
//#endregion
export { PRINCIPLES as a, RecordSection as c, SAMPLE_ROLL as d, THEME_ALLOWANCES as f, OFFICIALS as i, RollCallTable as l, COLOR_GROUPS as n, ProvenanceStamp as o, TYPE_ROWS as p, Identifier as r, Record as s, Badge as t, SAMPLE_AMOUNTS as u };
