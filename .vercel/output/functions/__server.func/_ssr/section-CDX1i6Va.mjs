import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as cn } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-CDX1i6Va.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Page section with a margin column. The label sits out in the margin under a
* gold rule; the title and lede sit on a narrow measure against the wide
* content grid below. Sections are separated by a rule, not by whitespace.
*/
function Section({ label, title, lede, children, className, headingLevel = "h2" }) {
	const Heading = headingLevel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("border-t border-line pt-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 border-t-2 border-gold pt-2 font-mono text-xs tracking-widest text-ink-subtle uppercase",
				children: label
			}) : null }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				className: "mt-0 mb-2 font-display text-3xl",
				children: title
			}), lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-0 max-w-2xl text-ink-muted",
				children: lede
			}) : null] })]
		}), children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children
		}) : null]
	});
}
//#endregion
export { Section as t };
