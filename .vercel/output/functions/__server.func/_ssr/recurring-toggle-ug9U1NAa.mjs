import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as cn } from "./router-D-1ONawC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recurring-toggle-ug9U1NAa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP = {
	ArrowRight: 1,
	ArrowDown: 1,
	ArrowLeft: -1,
	ArrowUp: -1
};
/**
* Two-or-three position segmented control. Squared, hairline, no tray — the
* system has no pill switches, because a binary choice in a civic flow should
* name both of its states.
*/
function ChoiceGroup({ label, value, options, onChange, className }) {
	const ref = (0, import_react.useRef)(null);
	const selected = options.findIndex((o) => o.value === value);
	function handleKeyDown(event) {
		const step = STEP[event.key];
		if (!step) return;
		event.preventDefault();
		const next = (selected + step + options.length) % options.length;
		onChange(options[next].value);
		ref.current?.querySelectorAll("button")[next]?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "radiogroup",
		"aria-label": label,
		onKeyDown: handleKeyDown,
		className: cn("flex overflow-hidden rounded-record border border-line-strong", className),
		children: options.map((option, i) => {
			const isSelected = option.value === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": isSelected,
				tabIndex: isSelected ? 0 : -1,
				onClick: () => onChange(option.value),
				className: cn("min-h-11 flex-1 px-3 text-sm font-medium", "transition-[background-color,color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]", i > 0 && "border-l border-line-strong", isSelected ? "bg-brand text-on-brand" : "bg-canvas text-ink-muted hover:bg-canvas-subtle hover:text-ink"),
				children: option.label
			}, option.value);
		})
	});
}
var PERIOD_LABEL = {
	monthly: "Monthly",
	quarterly: "Quarterly"
};
function RecurringToggle({ checked, onCheckedChange, period = "monthly" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-record border border-line bg-canvas px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm font-medium text-ink",
				children: "Schedule"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 mb-3 text-xs text-ink-muted",
				children: "One-time unless you choose otherwise. You can cancel anytime."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
				label: "Contribution schedule",
				value: checked ? "recurring" : "once",
				onChange: (v) => onCheckedChange(v === "recurring"),
				options: [{
					value: "once",
					label: "One-time"
				}, {
					value: "recurring",
					label: PERIOD_LABEL[period]
				}]
			})
		]
	});
}
//#endregion
export { RecurringToggle as n, ChoiceGroup as t };
