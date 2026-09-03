import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as CircleAlert, n as TriangleAlert, s as Info } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-70g7az7m.mjs";
import { c as RecordSection, o as ProvenanceStamp, r as Identifier, s as Record, t as Badge } from "./forum-data-CsVLBEg-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bill-status-BXuBG7MK.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	info: Info,
	warning: TriangleAlert,
	danger: CircleAlert
};
function AlertBanner({ tone = "info", title, children }) {
	const Icon = ICONS[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: cn("flex gap-3 rounded-md border px-4 py-3 text-sm text-ink", tone === "info" && "border-info/25 bg-info-soft", tone === "warning" && "border-warning/30 bg-warning-soft", tone === "danger" && "border-danger/30 bg-danger-soft"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-0.5 size-4 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 font-semibold",
			children: title
		}), children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 mb-0 text-ink-muted",
			children
		}) : null] })]
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "info",
					children: stage
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm font-medium leading-snug text-ink",
			children: title
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "m-0 flex list-none gap-px p-0",
			"aria-label": "Legislative stage",
			children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: `h-1 flex-1 ${i <= idx ? "bg-official" : "bg-canvas-subtle"}`,
				title: s
			}, s))
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
export { BillStatus as n, AlertBanner as t };
