import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./router-70g7az7m.mjs";
import { c as RecordSection, l as RollCallTable, o as ProvenanceStamp, r as Identifier, s as Record } from "./forum-data-CsVLBEg-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/official-card-CqICNEqG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
export { OfficialCard as t };
