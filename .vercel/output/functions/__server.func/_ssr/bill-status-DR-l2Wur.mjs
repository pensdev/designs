import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ProvenanceStamp, o as Record, r as Identifier, s as RecordSection, t as Callout } from "./official-card-OEpN-px-.mjs";
import { o as cn } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bill-status-DR-l2Wur.js
var import_jsx_runtime = require_jsx_runtime();
var RULE = {
	info: "var(--forum-info)",
	warning: "var(--forum-warning)",
	danger: "var(--forum-danger)"
};
var LABEL = {
	info: "Note",
	warning: "Notice",
	danger: "Problem"
};
var LABEL_COLOR = {
	info: "text-info",
	warning: "text-warning",
	danger: "text-danger"
};
function AlertBanner({ tone = "info", title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
		role: "status",
		rule: RULE[tone],
		className: "py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `m-0 font-mono text-xs tracking-widest uppercase ${LABEL_COLOR[tone]}`,
				children: LABEL[tone]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 mb-0 text-sm leading-snug font-semibold text-ink",
				children: title
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 mb-0 text-sm leading-snug text-ink-muted",
				children
			}) : null
		]
	});
}
/**
* The system's only progress language: flat segments, hairline gaps, square
* ends. Stages and quantities look the same so a filled bar always reads as a
* count of something, never as a marketing gauge.
*/
function SegmentedMeter({ segments, filled, label, titles, tone = "official", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": label,
		className: cn("flex h-1.5 gap-px", className),
		children: Array.from({ length: segments }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			title: titles?.[i],
			className: cn("flex-1", i < filled ? tone === "brand" ? "bg-brand" : "bg-official" : "bg-canvas-subtle")
		}, i))
	});
}
var STAGES = [
	"Introduced",
	"Committee",
	"Floor",
	"Passed",
	"Enacted"
];
function BillStatus({ number, title, stage, chamber, updatedAt }) {
	const idx = STAGES.indexOf(stage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: number }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: chamber }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
					tone: "info",
					children: stage
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm font-medium leading-snug text-ink",
			children: title
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedMeter, {
			segments: STAGES.length,
			filled: idx + 1,
			titles: STAGES,
			label: `Legislative stage ${idx + 1} of ${STAGES.length}: ${stage}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted",
			children: STAGES.join(" · ")
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source: "Congress.gov",
			retrieved: updatedAt,
			api: "bill API"
		}) })
	] });
}
//#endregion
export { BillStatus as n, SegmentedMeter as r, AlertBanner as t };
