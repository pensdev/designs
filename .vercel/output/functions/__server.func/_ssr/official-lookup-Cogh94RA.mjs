import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ProvenanceStamp, i as OfficialCard, n as Card, o as Record, r as Identifier, s as RecordSection } from "./official-card-OEpN-px-.mjs";
import { n as RecurringToggle } from "./recurring-toggle-ug9U1NAa.mjs";
import { n as FieldRow, r as Input, t as Field } from "./field-row-CqHsT31V.mjs";
import { a as Button, c as formatUsd, i as ORG_META, o as cn } from "./router-D-1ONawC.mjs";
import { d as SAMPLE_AMOUNTS, s as OFFICIALS } from "./forum-data-CsslN1Aj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/official-lookup-Cogh94RA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AmountPicker({ amounts, value, otherValue, suggested, onChange, onOtherChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-3 gap-2",
		role: "group",
		"aria-label": "Contribution amount",
		children: [amounts.map((amount) => {
			const pressed = value === amount;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": pressed,
				onClick: () => onChange(amount),
				className: cn("flex min-h-12 flex-col items-center justify-center rounded-md border px-2 py-2 font-semibold tabular-nums", "transition-[background-color,border-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]", pressed ? "border-brand bg-official-soft text-navy-900 dark:text-ink" : "border-line-strong bg-canvas text-ink hover:bg-canvas-subtle"),
				children: [formatUsd(amount), suggested === amount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-ink-muted",
					children: "Suggested"
				}) : null]
			}, amount);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": value === "other",
			onClick: () => onChange("other"),
			className: cn("flex min-h-12 items-center justify-center rounded-md border px-2 font-semibold", "transition-[background-color,border-color] duration-[var(--duration-swift)] ease-[var(--ease-standard)]", value === "other" ? "border-brand bg-official-soft text-navy-900 dark:text-ink" : "border-line-strong bg-canvas text-ink hover:bg-canvas-subtle"),
			children: "Other"
		})]
	}), value === "other" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: "other-amount",
			className: "sr-only",
			children: "Other amount in dollars"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-ink-muted",
				children: "$"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "other-amount",
				inputMode: "decimal",
				className: "pl-7",
				value: otherValue,
				onChange: (e) => onOtherChange(e.target.value.replace(/[^\d.]/g, "")),
				placeholder: "0"
			})]
		})]
	}) : null] });
}
function PaidForBy({ committee, address = "100 Civic Way, Washington, DC 20001", independentExpenditure }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "border-t border-line pt-3 text-xs leading-relaxed text-ink-muted",
		children: [
			"Paid for by ",
			committee,
			address ? `, ${address}` : ".",
			independentExpenditure ? " Not authorized by any candidate or candidate’s committee." : null
		]
	});
}
var TYPE_LABEL = {
	campaign: "Campaign",
	pac: "PAC",
	c4: "501(c)(4)",
	c3: "501(c)(3)"
};
function IdentityBar({ orgName, orgType, verified }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center justify-between gap-3 border-b border-line pb-3 text-xs text-ink-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-medium text-ink",
			children: [orgName, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-normal text-ink-muted",
				children: [" · ", TYPE_LABEL[orgType]]
			})]
		}), verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
			tone: "success",
			children: "Verified"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
			tone: "muted",
			children: "Unverified"
		})]
	});
}
function Receipt({ id, amount, period, committee, last4 = "4242" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, {
		className: "border-t-2 border-t-gold",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
					tone: "success",
					children: "Recorded"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: id })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-0 mb-1 font-display text-2xl text-ink",
				children: "Thank you."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "m-0 text-sm leading-snug text-ink-muted",
				children: [
					formatUsd(amount),
					period === "monthly" ? " monthly" : " one-time",
					" to ",
					committee,
					"."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "m-0 grid grid-cols-2 gap-y-2 font-mono text-xs tabular-nums text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-ink-muted",
						children: "Card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "m-0 text-right",
						children: ["•••• ", last4]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-ink-muted",
						children: "Period"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "m-0 text-right",
						children: period === "monthly" ? "Monthly" : "One-time"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
				source: "Example Processor",
				retrieved: "Sept 2, 2026",
				api: "payments"
			}) })
		]
	});
}
var LEGAL = {
	campaign: "Contributions are not tax deductible. Federal law requires us to use best efforts to collect and report the name, mailing address, occupation, and name of employer of individuals whose contributions exceed $200 in an election cycle.",
	pac: "Contributions to this PAC are not tax deductible. Paid political advertising.",
	c4: "Contributions to a 501(c)(4) social welfare organization are not tax deductible. This communication is not paid for by a candidate.",
	c3: "Contributions may be tax deductible as charitable contributions to the extent permitted by law. This organization does not endorse or oppose candidates."
};
function ComplianceFooter({ committee, orgType }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line pt-6 text-xs leading-relaxed text-ink-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 font-medium text-ink",
				children: committee
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 mb-0",
				children: LEGAL[orgType]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 mb-0",
				children: "Privacy · Contact · Committee address on file with the FEC."
			})
		]
	});
}
function ContributeForm({ org }) {
	const meta = ORG_META[org];
	const [amount, setAmount] = (0, import_react.useState)(50);
	const [other, setOther] = (0, import_react.useState)("");
	const [monthly, setMonthly] = (0, import_react.useState)(false);
	const [coverFee, setCoverFee] = (0, import_react.useState)(false);
	const [occupation, setOccupation] = (0, import_react.useState)("");
	const [employer, setEmployer] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)();
	const resolved = (0, import_react.useMemo)(() => {
		if (amount === "other") {
			const n = Number.parseFloat(other);
			return Number.isFinite(n) ? n : 0;
		}
		return amount;
	}, [amount, other]);
	const fee = Math.round((resolved * .029 + .3) * 100) / 100;
	const total = Math.round((resolved + (coverFee ? fee : 0)) * 100) / 100;
	const needsWork = resolved >= 200;
	function submit() {
		setError(void 0);
		if (resolved < 1) {
			setError("Enter an amount of at least $1.");
			return;
		}
		if (needsWork && (!occupation.trim() || !employer.trim())) {
			setError("Occupation and employer are required at $200 and above.");
			return;
		}
		setStatus("loading");
		window.setTimeout(() => setStatus("done"), 700);
	}
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
		id: `R-2026-${Math.floor(1e5 + resolved * 13)}`,
		amount: total,
		period: monthly ? "monthly" : "once",
		committee: meta.committee
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		variant: "action",
		className: "max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityBar, {
				orgName: meta.committee,
				orgType: meta.type,
				verified: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-0 mb-1 font-display text-2xl text-ink",
				children: "Contribute"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-4 text-sm text-ink-muted",
				children: "Pick an amount and a schedule. Nothing repeats unless you choose it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountPicker, {
				amounts: SAMPLE_AMOUNTS,
				value: amount,
				otherValue: other,
				suggested: 50,
				onChange: setAmount,
				onOtherChange: setOther
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecurringToggle, {
					checked: monthly,
					onCheckedChange: setMonthly
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 flex items-start gap-2 text-sm text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1 size-4 accent-navy",
						checked: coverFee,
						onChange: (e) => setCoverFee(e.target.checked)
					}),
					"Cover the ",
					formatUsd(fee, 2),
					" processing fee"
				]
			}),
			needsWork ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "occupation",
					label: "Occupation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "occupation",
						value: occupation,
						onChange: (e) => setOccupation(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "employer",
					label: "Employer",
					hint: "Required by federal reporting at $200+.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "employer",
						value: employer,
						onChange: (e) => setEmployer(e.target.value)
					})
				})]
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 mb-0 text-sm text-danger",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "primary",
				size: "lg",
				className: "mt-5 w-full",
				loading: status === "loading",
				onClick: submit,
				children: [
					"Contribute ",
					formatUsd(total || 0, total % 1 === 0 ? 0 : 2),
					monthly ? " monthly" : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaidForBy, {
				committee: meta.committee,
				independentExpenditure: meta.type !== "campaign"
			})
		]
	});
}
function OfficialLookup() {
	const [zip, setZip] = (0, import_react.useState)("11702");
	const [query, setQuery] = (0, import_react.useState)("11702");
	const [message, setMessage] = (0, import_react.useState)();
	const results = OFFICIALS[query];
	function lookup() {
		const z = zip.trim();
		setQuery(z);
		if (!OFFICIALS[z]) setMessage("No sample record for that ZIP. Try 11702 (NY-02) or 20001 (DC).");
		else setMessage(void 0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-0 mb-1 font-display text-2xl text-ink",
				children: "Find your officials"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-4 text-sm text-ink-muted",
				children: "Demo lookup. Live products should resolve from Census TIGER + member APIs, with an as-of date on every card."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
				id: "zip",
				label: "ZIP code",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "official",
					onClick: lookup,
					children: "Look up"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "zip",
					inputMode: "numeric",
					maxLength: 5,
					value: zip,
					onChange: (e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5)),
					onKeyDown: (e) => {
						if (e.key === "Enter") lookup();
					}
				})
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 mb-0 text-sm text-ink-muted",
				role: "status",
				children: message
			}) : null
		] }), results?.map((official) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialCard, {
			official,
			onCall: () => setMessage(`Call ${official.phone ?? "the office during listed hours"}.`),
			onWrite: () => setMessage("Write opens a disclosed blast — the organization is the sender."),
			onRecord: () => setMessage("Roll call is part of the record — sourced, not a screenshot.")
		}, official.name))]
	});
}
//#endregion
export { PaidForBy as a, OfficialLookup as i, ContributeForm as n, IdentityBar as r, ComplianceFooter as t };
