import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as ExternalLink, i as Phone } from "../_libs/lucide-react.mjs";
import { a as ProvenanceStamp, c as RollCallTable, n as Card, o as Record, r as Identifier, s as RecordSection } from "./official-card-OEpN-px-.mjs";
import { n as RecurringToggle, t as ChoiceGroup } from "./recurring-toggle-ug9U1NAa.mjs";
import { i as Textarea, r as Input, t as Field } from "./field-row-CqHsT31V.mjs";
import { n as BillStatus, r as SegmentedMeter, t as AlertBanner } from "./bill-status-DR-l2Wur.mjs";
import { t as RepLookup } from "./rep-lookup-DJ6voypt.mjs";
import { t as Section } from "./section-CDX1i6Va.mjs";
import { a as Button, n as Select, o as cn, s as formatCount } from "./router-D-1ONawC.mjs";
import { a as DISTRICT_MATCHES, c as POLLING_HOURS, f as SAMPLE_ROLL, i as DEMO_TODAY_ISO, o as ELECTION_MILESTONES, r as DEMO_TODAY, s as OFFICIALS, t as CALL_SCRIPT, u as RACE_CANDIDATES } from "./forum-data-CsslN1Aj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/components-dIEm3rqd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KIND_LABEL = {
	call: "Call",
	email: "Email",
	petition: "Petition"
};
var KIND_UNIT = {
	call: "calls placed",
	email: "emails sent",
	petition: "signatures"
};
/**
* One civic act, with a count that is allowed to be unimpressive.
* The number is whatever it is, stamped with the moment it was true — it never
* animates upward, never rounds up, and there is no "join 10,000 others" when
* there are 412. If the count is small, the small count is the honest thing.
*/
function ActionCard({ kind, title, ask, target, count, updatedAt, source, api, actionLabel, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		variant: "action",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
					tone: "info",
					children: KIND_LABEL[kind]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: target })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-0 mb-1 font-display text-2xl text-ink",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm leading-snug text-ink-muted",
				children: ask
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-y border-line py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 font-display text-3xl font-semibold tabular-nums text-ink",
					children: [formatCount(count), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-base font-normal text-ink-muted",
						children: KIND_UNIT[kind]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 mb-0 text-xs text-ink-muted",
					children: [
						"Counted as of ",
						updatedAt,
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "primary",
				size: "lg",
				className: "w-full",
				onClick: onAction,
				children: actionLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
				source,
				retrieved: updatedAt,
				api
			})
		]
	});
}
/**
* A ballot line in plain language, with the summary attributed.
*
* Who wrote the plain-language version is the whole ballgame: a summary by the
* Secretary of State, by the measure's sponsor, and by an advocacy group are
* three different documents, and a reader deciding a vote is entitled to know
* which one they are reading. The attribution is required, the official full
* text is always one link away, and for measures the yes/no consequences are
* given equal space and identical styling so the layout does not argue a side.
*/
function BallotItem({ kind, identifier, title, subtitle, summary, summaryBy, yesMeans, noMeans, fullTextHref, fullTextLabel = "Read the official full text", source, api, asOf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
				tone: "info",
				children: kind === "measure" ? "Ballot measure" : "Candidate"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: identifier })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-0 mb-1 font-display text-xl leading-snug text-ink",
			children: title
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm leading-snug text-ink-muted",
			children: subtitle
		}) : null] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase",
				children: "Plain language"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm leading-relaxed text-ink",
				children: summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 mb-0 text-xs text-ink-muted",
				children: [
					"Summary written by ",
					summaryBy,
					"."
				]
			})
		] }),
		yesMeans && noMeans ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase",
				children: "A yes vote"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm leading-snug text-ink",
				children: yesMeans
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase",
				children: "A no vote"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm leading-snug text-ink",
				children: noMeans
			})] })]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: fullTextHref,
			className: "inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-2",
			children: [fullTextLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				className: "size-3.5",
				"aria-hidden": "true"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source,
			retrieved: asOf,
			api
		}) })
	] });
}
var SEGMENTS$1 = 20;
/**
* A goal bar that refuses to manufacture urgency.
*
* No countdown, no "only 3 spots left", no bar engineered to sit at 94%, no
* colour change as the number climbs. It states the count, the goal, the rate
* things are actually arriving, and what happens when the goal is met —
* including the fact that the act still counts afterwards, which scarcity
* framing normally hides.
*/
function CampaignProgress({ current, goal, unit = "signatures", recentCount, recentWindow, atGoal, updatedAt }) {
	const pct = Math.min(100, Math.round(current / goal * 100));
	const met = current >= goal;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "m-0 font-display text-3xl font-semibold tabular-nums text-ink",
				children: [formatCount(current), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-base font-normal text-ink-muted",
					children: unit
				})]
			}), met ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
				tone: "success",
				children: "Goal met"
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedMeter, {
				segments: SEGMENTS$1,
				filled: Math.round(pct / 100 * SEGMENTS$1),
				tone: "brand",
				label: `${pct}% of the ${formatCount(goal)} ${unit} goal`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted",
				children: [
					pct,
					"% of ",
					formatCount(goal),
					" · updated ",
					updatedAt
				]
			})]
		}),
		recentCount != null && recentWindow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 mb-0 text-sm text-ink-muted",
			children: [
				formatCount(recentCount),
				" arrived in ",
				recentWindow,
				"."
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 mb-0 border-t border-line pt-2 text-sm text-ink-muted",
			children: atGoal
		})
	] });
}
var DAY = 864e5;
function daysBetween(fromIso, toIso) {
	return Math.round((Date.parse(toIso) - Date.parse(fromIso)) / DAY);
}
/**
* Dated election milestones, counted in days and nothing smaller.
*
* No ticking clock, no seconds, no red as the date approaches, no bar draining
* to empty. A registration deadline is a fact with a date on it, and the honest
* unit is days. Passed milestones stay on the record, dimmed rather than
* deleted, because "did I miss it?" is the question people actually arrive with.
*/
function ElectionCountdown({ election, asOf, asOfDisplay, milestones, source, api }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Key dates" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: election })]
		}),
		milestones.map((milestone) => {
			const days = daysBetween(asOf, milestone.iso);
			const passed = days < 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
				className: "grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("m-0 text-sm leading-snug", passed ? "text-ink-subtle" : "font-medium text-ink"),
						children: milestone.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2 justify-self-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("font-mono text-dense tabular-nums", passed ? "text-ink-subtle" : "text-ink"),
							children: milestone.display
						}), passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "muted",
							children: "passed"
						}) : days === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "info",
							children: "today"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Identifier, { children: [
							"in ",
							days,
							" ",
							days === 1 ? "day" : "days"
						] })]
					}),
					milestone.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "col-start-1 m-0 text-xs leading-snug text-ink-muted",
						children: milestone.note
					}) : null
				]
			}, milestone.label);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source,
			retrieved: asOfDisplay,
			api
		}) })
	] });
}
/** First initial + last name, which is all a public list ever needs. */
function publicName(name) {
	const parts = name.trim().split(/\s+/u).filter(Boolean);
	if (parts.length === 0) return "";
	if (parts.length === 1) return parts[0];
	return `${parts[0].charAt(0).toUpperCase()}. ${parts[parts.length - 1]}`;
}
/**
* Signature block with a visibility choice that tells the whole truth.
*
* "Private" is the word most petitions use to mean anonymous, and it is almost
* never true — the signature is still delivered to the agency, because an
* anonymous comment carries no weight. So the explanation names the recipient in
* both states, and a live preview shows the exact string that will be published.
* The choice is between public and unlisted, not between public and invisible.
*/
function PetitionSignature({ name, onNameChange, locality, onLocalityChange, visibility, onVisibilityChange, signatureNumber, recipient }) {
	const isPublic = visibility === "public";
	const rendered = isPublic ? [publicName(name), locality.trim()].filter(Boolean).join(" — ") || "Your name will appear here" : `Signature #${formatCount(signatureNumber)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "sig-name",
				label: "Full name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "sig-name",
					value: name,
					onChange: (event) => onNameChange(event.target.value),
					autoComplete: "name"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "sig-locality",
				label: "Town and state",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "sig-locality",
					value: locality,
					onChange: (event) => onLocalityChange(event.target.value),
					placeholder: "Babylon, NY"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-1.5 text-sm font-medium text-ink",
				children: "How your name is listed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
				label: "Signature visibility",
				value: visibility,
				onChange: onVisibilityChange,
				options: [{
					value: "public",
					label: "List publicly"
				}, {
					value: "private",
					label: "Keep unlisted"
				}]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-record border border-line bg-canvas px-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase",
						children: "On the public list"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 mb-0 font-mono text-sm text-ink",
						children: rendered
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-0 border-t border-line pt-2 text-xs leading-relaxed text-ink-muted",
						children: isPublic ? `Your first initial, last name, and town appear on the public list. Your full name, email, and address go to ${recipient} in the filed comment and are not published.` : `Nothing identifying appears on the public list. Your full name and address still go to ${recipient} in the filed comment — an unsigned comment carries no weight, so this is unlisted, not anonymous.`
					})
				]
			})
		]
	});
}
/**
* Where to vote, when, and what to bring.
*
* ID rules are the most consequential and most misremembered fact on this card,
* so the yes/no is stated as its own labelled row before any of the detail —
* a voter who reads nothing else should still leave with the right answer. And
* because polling places move and rules change late, the card ends by telling
* people to verify rather than implying it is authoritative forever.
*/
function PollingPlace({ name, address, hours, idRequired, idDetail, accessibility, verifyHref, source, api, asOf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex items-center justify-between gap-3 text-xs text-ink-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Polling place" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Identifier, { children: ["as of ", asOf] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-0 mb-1 font-display text-xl leading-snug text-ink",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm leading-snug text-ink-muted",
			children: address
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase",
			children: "Hours"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "m-0 grid grid-cols-[1fr_auto] gap-y-1.5 text-dense",
			children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contents",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-ink-muted",
					children: row.day
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "m-0 text-right font-mono tabular-nums text-ink",
					children: row.hours
				})]
			}, row.day))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 text-sm font-medium text-ink",
					children: "Photo ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
					tone: idRequired ? "warning" : "success",
					children: idRequired ? "Required" : "Not required"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 w-full text-xs leading-snug text-ink-muted",
					children: idDetail
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0 mb-1 font-mono text-xs tracking-widest text-ink-subtle uppercase",
			children: "Access"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm leading-snug text-ink",
			children: accessibility
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
			tone: "warning",
			title: "Confirm before you go.",
			children: "Polling places and hours change close to election day. Your county board is the only authority."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: verifyHref,
			className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-2",
			children: ["Check your county board", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				className: "size-3.5",
				"aria-hidden": "true"
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source,
			retrieved: asOf,
			api
		}) })
	] });
}
var SEGMENTS = 20;
/**
* Returns with AP-style restraint.
*
* Two rules do the work. A race is uncalled until a named outlet calls it — the
* component will not infer a winner from a margin, however large, and the call
* carries the name of whoever made it. And bars are never coloured by party:
* this system already holds that party is optional chrome, and a red-vs-blue
* bar at 12% reporting reads as a result when it is a fragment of one.
*/
function RaceResult({ race, candidates, reportingPct, called, source, api, updatedAt }) {
	const total = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
	const ranked = [...candidates].sort((a, b) => b.votes - a.votes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-ink-muted",
				children: race
			}), called ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
				tone: "info",
				children: "Called"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
				tone: "muted",
				children: "Not called"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedMeter, {
			segments: SEGMENTS,
			filled: Math.round(reportingPct / 100 * SEGMENTS),
			label: `${reportingPct}% of precincts reporting`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 mb-0 font-mono text-xs tabular-nums text-ink-muted",
			children: [
				reportingPct,
				"% of precincts reporting · ",
				formatCount(total),
				" votes counted"
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, {
			className: "grid gap-3",
			children: ranked.map((candidate) => {
				const share = total > 0 ? candidate.votes / total * 100 : 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "m-0 text-sm leading-snug text-ink",
						children: [candidate.name, candidate.party ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1.5 text-xs text-ink-subtle",
							children: candidate.party
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "m-0 font-mono text-dense tabular-nums text-ink",
						children: [formatCount(candidate.votes), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-ink-muted",
							children: [share.toFixed(1), "%"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedMeter, {
					className: "mt-1.5",
					segments: SEGMENTS,
					filled: Math.round(share / 100 * SEGMENTS),
					label: `${candidate.name}: ${share.toFixed(1)} percent`
				})] }, candidate.name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: called ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "m-0 text-sm leading-snug text-ink",
			children: [
				"Called for ",
				called.winner,
				" by ",
				called.by,
				" at ",
				called.at,
				"."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 text-sm leading-snug text-ink-muted",
			children: "Leading is not winning. No outlet has called this race, and margins move as late, provisional, and mail ballots are counted."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, {
			source,
			retrieved: updatedAt,
			api
		}) })
	] });
}
/**
* A call script. The script itself sits in the record register, because it is a
* document you read aloud, not a product surface.
*
* The "you've called before" state deliberately does not scold or gate. Staff
* tally every call separately, so calling twice is useful, and the component
* says so rather than implying the caller is double-dipping.
*/
function ScriptCard({ office, district, phone, hours, opener, ask, points, note, onNoteChange, lastCalledAt, onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		variant: "action",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 font-display text-2xl text-ink",
					children: "Call script"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: district })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "m-0 text-sm leading-snug text-ink-muted",
				children: [
					office,
					" · ",
					hours
				]
			}),
			lastCalledAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
				tone: "info",
				title: `You called this office on ${lastCalledAt}.`,
				children: "Calling again is useful. Staff log each call separately, so a second call is counted, not discarded."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 text-sm leading-relaxed text-ink",
					children: opener
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 text-sm leading-relaxed font-medium text-ink",
					children: ask
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-2 font-mono text-xs tracking-widest text-ink-subtle uppercase",
					children: "If they ask why"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "m-0 list-disc pl-5 text-sm leading-snug text-ink-muted",
					children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "mb-1 last:mb-0",
						children: point
					}, point))
				})] })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: "script-note",
					className: "mb-1.5 block text-sm font-medium text-ink",
					children: ["Your own reason", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 font-normal text-ink-subtle",
						children: "optional"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "script-note",
					value: note,
					onChange: (event) => onNoteChange(event.target.value),
					placeholder: "One sentence about why this matters where you live."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 mb-0 text-xs text-ink-muted",
					children: "Staff remember the specific story, not the script. Say it in your own words."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "official",
				size: "lg",
				className: "w-full",
				onClick: onCall,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}),
					"Call ",
					phone
				]
			})
		]
	});
}
var OFFICE_OPTIONS = [
	{
		value: "house",
		label: "U.S. House"
	},
	{
		value: "senate",
		label: "U.S. Senate"
	},
	{
		value: "state-house",
		label: "State House"
	},
	{
		value: "state-senate",
		label: "State Senate"
	},
	{
		value: "council",
		label: "City Council"
	}
];
function resolveDistrict(query) {
	const key = query.trim().toLowerCase().replace(/\s+/gu, " ");
	const hit = DISTRICT_MATCHES[key];
	if (!hit) return {
		status: "notice",
		title: "No sample record for that address.",
		detail: "Try “12 Bay Shore Rd, Babylon NY” or the ZIP 11702."
	};
	return {
		status: "match",
		match: {
			query: query.trim(),
			district: hit.district,
			precision: hit.precision,
			method: hit.method,
			asOf: DEMO_TODAY,
			officials: OFFICIALS[hit.officialsKey] ?? []
		}
	};
}
function ComponentsPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [monthly, setMonthly] = (0, import_react.useState)(false);
	const [errorOn, setErrorOn] = (0, import_react.useState)(false);
	const [office, setOffice] = (0, import_react.useState)("house");
	const [scriptNote, setScriptNote] = (0, import_react.useState)("");
	const [sigName, setSigName] = (0, import_react.useState)("Alexandra Ruiz");
	const [sigLocality, setSigLocality] = (0, import_react.useState)("Babylon, NY");
	const [sigVisibility, setSigVisibility] = (0, import_react.useState)("public");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-0 mb-2 font-display text-4xl",
				children: "Components"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-10 max-w-2xl text-ink-muted",
				children: "Primary is the only filled brand button on a page. Official is navy. Danger is reserved for irreversible acts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Action",
				title: "Buttons",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "lg",
							loading,
							onClick: () => {
								setLoading(true);
								window.setTimeout(() => setLoading(false), 900);
							},
							children: "Contribute $50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							children: "Share"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							children: "Skip for now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "official",
							children: "View record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "danger",
							children: "Cancel monthly gift"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				label: "Labels",
				title: "Identifiers",
				lede: "One shape for every small label. A status is a tone on the identifier box, not a separate filled pill.",
				className: "pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "NY-02" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "S. 214" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, { children: "FEC C00412345" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "info",
							children: "Introduced"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "success",
							children: "Filed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "warning",
							children: "Deadline Friday"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "danger",
							children: "Rejected"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identifier, {
							tone: "muted",
							children: "Draft"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Input",
				title: "Field, select and schedule",
				lede: "Controls share one geometry. The select is ours, not the OS one, so it matches the rest of the form in every browser.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-4 font-display text-xl",
						children: "Field"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "demo-email",
							label: "Email",
							hint: !errorOn ? "Used for the receipt only." : void 0,
							error: errorOn ? "Enter a valid email." : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "demo-email",
								type: "email",
								error: errorOn,
								placeholder: "you@example.org",
								defaultValue: errorOn ? "not-an-email" : ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "demo-office",
								label: "Office sought",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									id: "demo-office",
									"aria-label": "Office sought",
									value: office,
									onValueChange: setOffice,
									options: OFFICE_OPTIONS
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-4 accent-navy",
								checked: errorOn,
								onChange: (e) => setErrorOn(e.target.checked)
							}), "Show error state"]
						})
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-4 font-display text-xl",
							children: "Recurring choice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecurringToggle, {
							checked: monthly,
							onCheckedChange: setMonthly
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 mb-0 text-sm text-ink-muted",
							children: ["Current: ", monthly ? "monthly" : "one-time"]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Notice",
				title: "Callouts",
				lede: "Every notice is the provenance stamp's shape: hairline box, no fill, a ruled left edge that carries the tone.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "info",
							title: "Source attached.",
							children: "Vote positions include chamber, date, and the originating API."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "warning",
							title: "Comment period closes Sept 12.",
							children: "Source: Federal Register. This is a real deadline, not a marketing timer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
							tone: "danger",
							title: "Card declined.",
							children: "The processor returned insufficient funds. No charge was recorded."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Record",
				title: "Bill status",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillStatus, {
					number: "S. 214",
					title: "Digital Disclosure Act",
					stage: "Committee",
					chamber: "Senate",
					updatedAt: "Sept 1, 2026"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Record",
				title: "Roll call · compact",
				lede: "32px rows, 13px Plex, mono identifiers, hairline dividers.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RollCallTable, {
					votes: SAMPLE_ROLL,
					density: "compact"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				label: "Advocacy",
				title: "Asking for one act",
				lede: "Every surface here states a real number with the moment it was true, and none of them manufacture scarcity to get the click.",
				className: "pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionCard, {
							kind: "call",
							title: "Ask your rep to vote yes on H.R. 118",
							ask: "Two minutes on the phone during office hours. Staff tally every call.",
							target: "NY-02",
							count: 1204,
							updatedAt: DEMO_TODAY,
							source: "Internal action log",
							api: "actions",
							actionLabel: "Get the call script"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-4 font-display text-xl",
							children: "Campaign progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampaignProgress, {
							current: 18420,
							goal: 25e3,
							recentCount: 412,
							recentWindow: "the last 7 days",
							atGoal: "At 25,000 we file the comment with the agency. Signatures after that are still delivered — the goal is a filing threshold, not a cutoff.",
							updatedAt: "today, 4:10 p.m. ET"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptCard, {
							office: CALL_SCRIPT.office,
							district: CALL_SCRIPT.district,
							phone: CALL_SCRIPT.phone,
							hours: CALL_SCRIPT.hours,
							opener: CALL_SCRIPT.opener,
							ask: CALL_SCRIPT.ask,
							points: CALL_SCRIPT.points,
							note: scriptNote,
							onNoteChange: setScriptNote,
							lastCalledAt: "Aug 14, 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-0 mb-1 font-display text-xl",
								children: "Signature visibility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0 mb-4 text-sm text-ink-muted",
								children: "Switch the control and read the explanation change. Unlisted is not anonymous, and the copy says so."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetitionSignature, {
								name: sigName,
								onNameChange: setSigName,
								locality: sigLocality,
								onLocalityChange: setSigLocality,
								visibility: sigVisibility,
								onVisibilityChange: setSigVisibility,
								signatureNumber: 18421,
								recipient: "the Federal Register docket"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-0 mb-1 font-display text-xl",
								children: "Representative lookup"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0 mb-4 max-w-2xl text-sm text-ink-muted",
								children: [
									"Try the street address, then try the bare ZIP ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono",
										children: "11702"
									}),
									" ",
									"to see the centroid warning. A ZIP is a guess, and the component says which one it made."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepLookup, {
								resolve: resolveDistrict,
								initialQuery: "12 Bay Shore Rd, Babylon NY",
								resolveOnMount: true
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				label: "Elections",
				title: "Civic information",
				lede: "Record register throughout. These publish facts from official sources, so a brand overlay cannot restyle them and nothing here counts down in seconds.",
				className: "pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElectionCountdown, {
						election: "Nov 2026 general",
						asOf: DEMO_TODAY_ISO,
						asOfDisplay: DEMO_TODAY,
						milestones: ELECTION_MILESTONES,
						source: "NY State Board of Elections",
						api: "calendar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PollingPlace, {
						name: "Babylon Town Hall — Annex B",
						address: "200 East Sunrise Highway, Lindenhurst, NY 11757",
						hours: POLLING_HOURS,
						idRequired: false,
						idDetail: "New York does not require photo ID to vote in person if you have voted in this county before. First-time voters who registered by mail without providing ID may be asked for it.",
						accessibility: "Step-free entrance on the north side. Accessible ballot marking device available at all hours.",
						verifyHref: "https://www.elections.ny.gov/",
						source: "NY State Board of Elections",
						api: "pollsite",
						asOf: DEMO_TODAY
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BallotItem, {
						kind: "measure",
						identifier: "Prop 1",
						title: "Public Records Modernization Amendment",
						subtitle: "Statewide ballot proposal · Nov 3, 2026",
						summary: "Requires state agencies to publish public records in machine-readable formats within 30 days of a request, and to keep an online index of what they hold.",
						summaryBy: "the NY State Board of Elections",
						yesMeans: "Agencies must publish records in machine-readable formats and maintain a public index.",
						noMeans: "Current disclosure rules stay as they are, and formats remain at each agency's discretion.",
						fullTextHref: "https://www.elections.ny.gov/",
						source: "NY State Board of Elections",
						api: "ballot",
						asOf: DEMO_TODAY
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RaceResult, {
						race: "U.S. House · 2nd District of New York",
						candidates: RACE_CANDIDATES,
						reportingPct: 72,
						source: "Associated Press",
						api: "elections",
						updatedAt: "Nov 3, 2026, 11:42 p.m. ET"
					})]
				})]
			})
		]
	});
}
//#endregion
export { ComponentsPage as component };
