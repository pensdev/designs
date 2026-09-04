import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ProvenanceStamp, i as OfficialCard, n as Card, o as Record, r as Identifier, s as RecordSection } from "./official-card-OEpN-px-.mjs";
import { n as FieldRow, r as Input } from "./field-row-CqHsT31V.mjs";
import { t as AlertBanner } from "./bill-status-DR-l2Wur.mjs";
import { a as Button } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rep-lookup-DJ6voypt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRECISION_LABEL = {
	rooftop: "Rooftop match",
	centroid: "ZIP centroid"
};
/**
* Address → district → member, with the middle step shown instead of hidden.
*
* Every civic product does this lookup and almost none admit it can be wrong.
* The resolution trail names the method and the precision, echoes back the
* address the geocoder actually matched when it differs from what was typed,
* and any caveat lands before the member card rather than after — acting on the
* wrong member is the real failure mode.
*/
function RepLookup({ resolve, initialQuery = "", resolveOnMount }) {
	const [query, setQuery] = (0, import_react.useState)(initialQuery);
	const [outcome, setOutcome] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const lookup = (0, import_react.useCallback)(async (value) => {
		setPending(true);
		try {
			setOutcome(await resolve(value));
		} finally {
			setPending(false);
		}
	}, [resolve]);
	(0, import_react.useEffect)(() => {
		if (!resolveOnMount) return;
		lookup(initialQuery);
	}, [resolveOnMount, initialQuery]);
	const match = outcome?.status === "match" ? outcome.match : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-0 mb-1 font-display text-2xl text-ink",
					children: "Find your representative"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-4 text-sm leading-snug text-ink-muted",
					children: "A street address resolves to one district. A ZIP code does not."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
					id: "rep-address",
					label: "Street address",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "official",
						loading: pending,
						onClick: () => void lookup(query),
						children: "Look up"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rep-address",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						onKeyDown: (event) => {
							if (event.key === "Enter") lookup(query);
						},
						placeholder: "12 Bay Shore Rd, Babylon NY",
						autoComplete: "street-address"
					})
				})
			] }),
			outcome?.status === "notice" || outcome?.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
					tone: outcome.status === "error" ? "danger" : "warning",
					title: outcome.title,
					children: outcome.detail
				}), outcome.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, { ...outcome.source }) : null]
			}) : null,
			match ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
					className: "flex items-center justify-between gap-3 text-xs text-ink-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resolution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: match.district })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "m-0 grid grid-cols-[8rem_1fr] gap-y-2 text-dense",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Address entered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "m-0 font-mono tabular-nums text-ink",
							children: match.query
						}),
						match.matchedAddress && match.matchedAddress !== match.query ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Matched as"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "m-0 font-mono tabular-nums text-ink",
							children: match.matchedAddress
						})] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Matched district"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "m-0 font-mono tabular-nums text-ink",
							children: match.district
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Match precision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "m-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
								tone: match.precision === "rooftop" ? "success" : "warning",
								children: PRECISION_LABEL[match.precision]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "m-0 font-mono text-ink",
							children: match.method
						})
					]
				}) })] }),
				match.precision === "centroid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertBanner, {
					tone: "warning",
					title: "This ZIP spans more than one district.",
					children: [
						"The member below is the best guess for the centre of ",
						match.query,
						". Enter a street address before calling, writing, or citing this district."
					]
				}) : null,
				match.officials.map((official) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialCard, { official }, official.name))
			] }) : null
		]
	});
}
//#endregion
export { RepLookup as t };
