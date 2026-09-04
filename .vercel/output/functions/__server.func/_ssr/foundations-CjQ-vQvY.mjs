import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as OfficialCard, n as Card, o as Record, r as Identifier, s as RecordSection } from "./official-card-OEpN-px-.mjs";
import { t as Section } from "./section-CDX1i6Va.mjs";
import { m as TYPE_ROWS, n as COLOR_GROUPS, p as THEME_ALLOWANCES, s as OFFICIALS } from "./forum-data-CsslN1Aj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/foundations-CjQ-vQvY.js
var import_jsx_runtime = require_jsx_runtime();
/** Deliberately off-system: the "before" specimen keeps the old framework look. */
var LEGACY_CARD = {
	borderRadius: 10,
	boxShadow: "var(--shadow-border)"
};
function Foundations() {
	const sample = OFFICIALS["11702"][0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-0 mb-2 font-display text-4xl",
				children: "Foundations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-10 max-w-2xl text-ink-muted",
				children: "Structure, semantics, and brand are separate layers. Override only brand tokens."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Registers",
				title: "Two registers",
				lede: "Product surfaces sell an act. Record surfaces publish a fact. They do not share a container.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 font-mono text-xs text-ink-subtle",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 mb-2 font-display text-xl",
							children: "Contribution, principles, marketing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mb-0 list-disc pl-5 text-sm text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2px radius, hairline box, no shadow" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2px brand rule across the top" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Generous padding, one primary CTA" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Brand may speak (fill, weight, chip style)" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Record, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 font-mono text-xs text-ink-subtle",
							children: "Record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 mb-2 font-display text-xl",
							children: "Official, bill, vote, receipt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mb-0 list-disc pl-5 text-sm leading-snug text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2px radius max, no shadow, no brand rule" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hairline rules between sections" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tabular figures, tighter leading" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Themes cannot restyle this register" })
							]
						})
					] }) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Brand",
				title: "Theme allowances",
				lede: "Civic navy is quietest. Campaign crimson is loudest. Advocacy forest sits in the middle. Locked rows cannot change with the brand overlay.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line text-xs text-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Token"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Civic navy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Campaign crimson"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Advocacy forest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Locked"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: THEME_ALLOWANCES.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-3 font-medium text-ink",
									children: row.token
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-3 text-ink-muted",
									children: row.civic
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-3 text-ink-muted",
									children: row.crimson
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-3 text-ink-muted",
									children: row.forest
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3",
									children: row.locked ? "Yes" : "No"
								})
							]
						}, row.token)) })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Rewrite",
				title: "Official record — before / after",
				lede: "Same copy. Before is the framework default: soft radius, drop shadow, filled pill. After is the record register.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-mono text-xs text-ink-subtle",
						children: "Before"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-official/20 bg-canvas-elevated p-5",
						style: LEGACY_CARD,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between text-xs text-ink-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official record" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "As of Sept 2, 2026" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-16 shrink-0 bg-navy",
									style: { borderRadius: 6 },
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-info-soft px-2 py-0.5 text-xs font-semibold tracking-wide text-info uppercase",
										children: "NY-02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 mb-0 font-display text-xl",
										children: "Rep. Alexandra Ruiz"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 mb-0 text-sm text-ink-muted",
										children: "U.S. House · 2nd District of New York"
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 mb-0 text-xs text-ink-muted",
								children: "Source: Congress.gov member API · As of Sept 2, 2026"
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-mono text-xs text-ink-subtle",
						children: "After"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialCard, { official: sample })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Palette",
				title: "Color",
				className: "pb-12",
				children: COLOR_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 last:mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-3 text-lg font-medium",
						children: group.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
						children: group.swatches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-record border border-line bg-canvas-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-16",
								style: { background: s.hex }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "px-3 py-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium text-ink",
									children: s.token
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-ink-subtle",
									children: s.hex
								})]
							})]
						}, s.token))
					})]
				}, group.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Type",
				title: "Typography",
				lede: "Source Serif 4 for civic display. IBM Plex Sans for UI. IBM Plex Mono for bill numbers and FEC IDs.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-line border-y border-line",
					children: TYPE_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:items-baseline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-ink-subtle",
							children: row.token
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `m-0 ${row.className}`,
							children: row.sample
						})]
					}, row.token))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				label: "Rules",
				title: "Space, shape & type",
				className: "pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mb-8 max-w-2xl list-disc pl-5 text-sm text-ink-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4px base scale: 4 8 12 16 20 24 32 40 48 64" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Two radii only: 2px for record surfaces, 4px for product surfaces. No pills." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Public body stays at 16px. Compact record rows are 13px / 32px tall." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One primary CTA per viewport. Recurring gifts are opt-in and name both states." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Identifiers and statuses share one hairline box. Status is a tone on that box, never a filled pill." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Notices are ruled, not filled. Tinted alert boxes are out of the system." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The masthead band is a fixed surface — navy with paper foreground in both themes. It uses the band tokens, never the theme-relative inverse ink, which flips." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Progress is always flat segments — stages and quantities look alike." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Form controls are 44px. A button standing beside an input is 44px too — never the large size, whose height is a brand token and would misalign the row differently per theme. Use FieldRow, which pins it." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dropdowns are ours, not the OS control, so a select matches the inputs beside it in every browser. Gold marks the chosen row, the way it marks the active nav item." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Gold is the provenance rule and the active marker. It never fills a button or chip." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "NY-02" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "S. 214" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "C00412345" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "info",
							children: "Introduced"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "success",
							children: "Verified"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "danger",
							children: "Rejected"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Foundations as component };
