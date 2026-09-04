import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as formatDate } from "./format-tXtmRiW7.mjs";
import { a as ProvenanceStamp, c as RollCallTable, n as Card, o as Record, r as Identifier, s as RecordSection, t as Callout } from "./official-card-OEpN-px-.mjs";
import { n as BillStatus, t as AlertBanner } from "./bill-status-DR-l2Wur.mjs";
import { t as RepLookup } from "./rep-lookup-DJ6voypt.mjs";
import { t as Section } from "./section-CDX1i6Va.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-Dr5drvC-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Server functions are the only way the browser touches these sources.
*
* Two reasons it is not a client fetch: the Congress.gov key must never reach
* the bundle, and the Census and Federal Register endpoints do not serve CORS
* headers a browser would accept. Every handler returns a CivicResult, so a
* failure arrives as data the UI can render rather than a thrown promise.
*/
/** Wrap a server-only loader so an unexpected throw still returns a stamped result. */
var lookupDistrictFn = createServerFn({ method: "GET" }).inputValidator((address) => address).handler(createSsrRpc("450dd64493f400bf39426705c8fc5fc62b84435568f6c57e8d067bceca538af3"));
var membersForDistrictFn = createServerFn({ method: "GET" }).inputValidator((input) => input).handler(createSsrRpc("aea8591007effe06498b0741e454d7393e6191c397773fa275ec502df84e49c5"));
var billSummaryFn = createServerFn({ method: "GET" }).inputValidator((input) => input).handler(createSsrRpc("f628e49994503a9d60aca02d0563ed5c9fccec77087c12f1fd2b695b2faf77b6"));
var recentHouseVotesFn = createServerFn({ method: "GET" }).inputValidator((limit) => limit).handler(createSsrRpc("ea37967b92d2233c7eb0f423f01ec621732de99dde76393f35681ba1c58a7809"));
var openCommentPeriodsFn = createServerFn({ method: "GET" }).inputValidator((limit) => limit).handler(createSsrRpc("e31db09dc67b663df1b551967caba72f34f6518ceb6b82e35c98fec8afa94047"));
function useCivic(load, deps = []) {
	const [value, setValue] = (0, import_react.useState)({ state: "loading" });
	(0, import_react.useEffect)(() => {
		let live = true;
		setValue({ state: "loading" });
		load().then((result) => {
			if (live) setValue({
				state: "done",
				result
			});
		});
		return () => {
			live = false;
		};
	}, deps);
	return value;
}
function stamp(provenance) {
	return {
		source: provenance.source,
		retrieved: provenance.retrievedDisplay,
		api: provenance.api
	};
}
/** Every live panel reports the same three states, so none of them can fake one. */
function Panel({ value, children }) {
	if (value.state === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
		rule: "var(--forum-line-strong)",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase",
			children: "Reading"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 mb-0 text-sm text-ink-muted",
			children: "Waiting on the source."
		})]
	});
	if (!value.result.ok) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBanner, {
			tone: "danger",
			title: "Could not read from the source.",
			children: value.result.error.message
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, { ...stamp(value.result.provenance) })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [value.result.stale ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertBanner, {
			tone: "warning",
			title: "Showing the last good response.",
			children: [value.result.staleReason?.message, " The stamp below is when this data was actually retrieved, not now."]
		}) : null, children(value.result.data, value.result.provenance, value.result.stale)]
	});
}
/** Census + Congress.gov, chained: address → district → sitting members. */
async function resolveLive(query) {
	const lookup = await lookupDistrictFn({ data: query });
	if (!lookup.ok) return {
		status: "error",
		title: "The geocoder could not be reached.",
		detail: lookup.error.message,
		source: stamp(lookup.provenance)
	};
	const found = lookup.data;
	if (found.kind !== "match") return {
		status: "notice",
		title: found.kind === "needs_address" ? "A ZIP alone cannot resolve a district." : "No district matched that address.",
		detail: found.message,
		source: stamp(lookup.provenance)
	};
	const members = await membersForDistrictFn({ data: {
		congress: found.congress,
		state: found.state,
		district: found.districtNumber
	} });
	return {
		status: "match",
		match: {
			query,
			matchedAddress: found.matchedAddress,
			district: found.district,
			precision: "rooftop",
			method: `Census geocoder · ${found.congress}th Congress`,
			asOf: lookup.provenance.retrievedDisplay,
			officials: members.ok ? members.data.map((member) => ({
				name: member.displayName,
				office: member.chamber === "Senate" ? `U.S. Senate · ${member.state}` : `U.S. House · District ${member.district} of ${member.state}`,
				district: member.districtLabel,
				party: member.party,
				asOf: members.provenance.retrievedDisplay,
				source: members.provenance.source,
				api: members.provenance.api
			})) : []
		}
	};
}
function LivePage() {
	const bill = useCivic(() => billSummaryFn({ data: {
		congress: 119,
		type: "hr",
		number: "1"
	} }));
	const votes = useCivic(() => recentHouseVotesFn({ data: 6 }));
	const comments = useCivic(() => openCommentPeriodsFn({ data: 4 }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-0 mb-2 font-display text-4xl",
				children: "Live data"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0 mb-10 max-w-2xl text-ink-muted",
				children: "The same components, fed by the Census geocoder, the Congress.gov API, and the Federal Register. Every provenance stamp on this page is generated from the response that produced the data above it — nothing here is a string literal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Census",
				title: "Address to district",
				lede: "A street address resolves to exactly one district and the trail shows how. A ZIP resolves to nothing, and the component says so rather than guessing a centroid.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepLookup, {
					resolve: resolveLive,
					initialQuery: "12 Bay Shore Rd, Babylon NY",
					resolveOnMount: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Congress.gov",
				title: "Bill status",
				lede: "Stage is derived conservatively from the latest action: anything the mapping cannot place with confidence stays at Introduced rather than advancing a bill it has not seen advance.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					value: bill,
					children: (data, provenance) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillStatus, {
							number: data.label,
							title: data.title,
							stage: data.stage,
							chamber: data.originChamber,
							updatedAt: provenance.retrievedDisplay
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
							rule: "var(--forum-line-strong)",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase",
								children: "Latest action"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 mb-0 text-sm text-ink",
								children: [data.latestActionDate ? `${formatDate(data.latestActionDate)} — ` : "", data.latestActionText]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Congress.gov",
				title: "Recent House roll calls",
				lede: "Chamber results, not one member's positions. Reading a member's Yea or Nay costs an extra request per roll call, so the table shows the chamber outcome and is labelled as such.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					value: votes,
					children: (data, provenance) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RollCallTable, {
						votes: [...data].sort((a, b) => b.date.localeCompare(a.date)).map((vote) => ({
							roll: vote.roll,
							question: vote.legislationLabel && !vote.question.includes(vote.legislationLabel) ? `${vote.question} (${vote.legislationLabel})` : vote.question,
							position: vote.result,
							date: vote.date
						})),
						density: "compact",
						positionHeader: "Result",
						source: provenance.source,
						retrieved: provenance.retrievedDisplay,
						api: provenance.api
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Federal Register",
				title: "Open comment periods",
				lede: "The one countdown this system permits. A comment deadline is a real regulatory date published by the agency, and missing it genuinely forecloses the act.",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					value: comments,
					children: (data, provenance) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Record, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
								className: "flex items-center justify-between gap-3 text-xs text-ink-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proposed rules open for comment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Identifier, { children: [data.length, " shown"] })]
							}),
							data.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RecordSection, {
								className: "grid gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: doc.htmlUrl,
										className: "text-sm leading-snug font-medium text-accent underline underline-offset-2",
										children: doc.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "m-0 text-xs leading-snug text-ink-muted",
										children: doc.agencies.join(", ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "m-0 font-mono text-xs tabular-nums text-ink",
										children: ["Comments close ", doc.commentsCloseOn ? formatDate(doc.commentsCloseOn) : "—"]
									})
								]
							}, doc.documentNumber)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenanceStamp, { ...stamp(provenance) }) })
						] })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Notes",
				title: "What is not wired",
				className: "pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-3 text-sm leading-relaxed text-ink-muted",
					children: "Race results, polling places, and ballot items stay on sample data. AP Elections is a paid feed, and Google Civic retired its representative and voter-info endpoints, so there is no free national source for any of the three."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 text-sm leading-relaxed text-ink-muted",
					children: [
						"Congress.gov runs on api.data.gov’s shared ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "DEMO_KEY"
						}),
						" ",
						"unless ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "CONGRESS_API_KEY"
						}),
						" is set on the server, which throttles at roughly 30 requests an hour per IP. Responses are cached, and a throttled call falls back to the last good payload with its original timestamp."
					]
				})] })
			})
		]
	});
}
//#endregion
export { LivePage as component };
