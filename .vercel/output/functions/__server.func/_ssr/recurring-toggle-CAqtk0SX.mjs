import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-70g7az7m.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recurring-toggle-CAqtk0SX.js
var import_jsx_runtime = require_jsx_runtime();
var cardVariants = cva("rounded-lg bg-canvas-elevated p-5 shadow-(--shadow-border)", {
	variants: { variant: {
		editorial: "",
		official: "border border-official/20",
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
			children,
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
function Switch({ id, checked, onCheckedChange, disabled, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		id,
		checked,
		onCheckedChange,
		disabled,
		className: cn("relative h-7 w-12 shrink-0 rounded-full border border-line-strong bg-canvas-subtle", "data-[state=checked]:border-brand data-[state=checked]:bg-brand", "disabled:cursor-not-allowed disabled:opacity-50"),
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("block size-5 translate-x-1 rounded-full bg-canvas-elevated shadow-(--shadow-1)", "transition-transform duration-[var(--duration-swift)] ease-[var(--ease-standard)]", "data-[state=checked]:translate-x-6 data-[state=checked]:bg-on-brand") })
	});
}
function RecurringToggle({ checked, onCheckedChange, period = "monthly" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 rounded-md border border-line bg-canvas px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			id: "recurring-label",
			className: "text-sm font-medium text-ink",
			children: ["Make this ", period]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-ink-muted",
			children: "Off unless you turn it on. You can cancel anytime."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id: "recurring",
			checked,
			onCheckedChange,
			"aria-labelledby": "recurring-label"
		})]
	});
}
//#endregion
export { RecurringToggle as i, Field as n, Input as r, Card as t };
