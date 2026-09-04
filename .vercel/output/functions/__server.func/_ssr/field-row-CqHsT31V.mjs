import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as cn } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-row-CqHsT31V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Attach the hint/error ids to the control so they are announced, not just rendered. */
function describe$1(children, describedBy) {
	if (!describedBy || !(0, import_react.isValidElement)(children)) return children;
	const element = children;
	const existing = element.props["aria-describedby"];
	return (0, import_react.cloneElement)(element, { "aria-describedby": existing ? `${existing} ${describedBy}` : describedBy });
}
function Field({ id, label, hint, error, optional, children }) {
	const hintId = hint ? `${id}-hint` : void 0;
	const errorId = error ? `${id}-error` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: "text-sm font-medium text-ink",
				children: [label, optional ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1.5 font-normal text-ink-subtle",
					children: "optional"
				}) : null]
			}),
			describe$1(children, error ? errorId : hintId),
			hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: hintId,
				className: "text-xs text-ink-muted",
				children: hint
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: errorId,
				className: "text-xs text-danger",
				role: "alert",
				children: error
			}) : null
		]
	});
}
var controlClass = "w-full rounded-md border bg-canvas-elevated px-3 text-ink placeholder:text-ink-subtle";
function Input({ className, error, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(controlClass, "h-11 min-h-11", error ? "border-danger" : "border-line-strong", className),
		"aria-invalid": error || void 0,
		...props
	});
}
function Textarea({ className, error, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(controlClass, "min-h-24 py-2", error ? "border-danger" : "border-line-strong", className),
		"aria-invalid": error || void 0,
		...props
	});
}
/**
* A labelled control with an action beside it — the lookup row.
*
* Two things are enforced here rather than left to each call site. The action
* is pinned to the 44px form-control height, because `size="lg"` reads
* --tone-btn-lg, which is theme-variable (48px civic, 56px crimson, 50px
* forest) and would misalign the row by a different amount per brand. And the
* label sits above the whole row while hint and error sit below it, so the
* control and the action are siblings on one baseline — aligning their bottom
* edges instead would break the moment a hint appeared under the input.
*/
/** Attach the hint/error ids to the control so they are announced, not just rendered. */
function describe(children, describedBy) {
	if (!describedBy || !(0, import_react.isValidElement)(children)) return children;
	const element = children;
	const existing = element.props["aria-describedby"];
	return (0, import_react.cloneElement)(element, { "aria-describedby": existing ? `${existing} ${describedBy}` : describedBy });
}
function FieldRow({ id, label, hint, error, optional, action, actionClassName = "sm:w-40", children }) {
	const hintId = hint ? `${id}-hint` : void 0;
	const errorId = error ? `${id}-error` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "mb-1.5 block text-sm font-medium text-ink",
			children: [label, optional ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1.5 font-normal text-ink-subtle",
				children: "optional"
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children: describe(children, error ? errorId : hintId)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("shrink-0 [&>button]:h-11 [&>button]:min-h-11 [&>button]:w-full", actionClassName),
				children: action
			})]
		}),
		hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: hintId,
			className: "mt-1.5 mb-0 text-xs text-ink-muted",
			children: hint
		}) : null,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: errorId,
			className: "mt-1.5 mb-0 text-xs text-danger",
			role: "alert",
			children: error
		}) : null
	] });
}
//#endregion
export { Textarea as i, FieldRow as n, Input as r, Field as t };
