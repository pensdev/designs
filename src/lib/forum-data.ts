import type { Official } from "@/components/forum/official-card";
import type { VotePosition } from "@/components/forum/roll-call";

export const PRINCIPLES = [
  {
    title: "Earn trust",
    body: "Who is speaking, who paid, and when the data was current — visible without a hunt.",
  },
  {
    title: "One civic act",
    body: "Donate, sign, call, look up. One primary action per viewport.",
  },
  {
    title: "Tell the truth",
    body: "No fake urgency. Polls and counts carry methodology and as-of dates.",
  },
  {
    title: "Accessible floor",
    body: "AA contrast, 44px field targets, meaning never encoded in color alone.",
  },
  {
    title: "Brand is a layer",
    body: "Orgs change brand tokens. They do not redefine danger, success, or official.",
  },
  {
    title: "Field-fast",
    body: "The act is possible before maps, video, or voter-file widgets load.",
  },
] as const;

export const COLOR_GROUPS = [
  {
    name: "Canvas & ink",
    swatches: [
      { token: "canvas", hex: "#F4F1EA" },
      { token: "elevated", hex: "#FFFBF4" },
      { token: "ink", hex: "#12171F" },
      { token: "ink-muted", hex: "#4B5563" },
      { token: "line", hex: "#D6D0C4" },
    ],
  },
  {
    name: "Navy & gold",
    swatches: [
      { token: "navy-950", hex: "#0B1724" },
      { token: "navy-800", hex: "#1B314C" },
      { token: "navy-600", hex: "#2C5A86" },
      { token: "gold-500", hex: "#C4A35A" },
      { token: "gold-100", hex: "#F3E8C8" },
    ],
  },
  {
    name: "Semantic (locked)",
    swatches: [
      { token: "success", hex: "#176B45" },
      { token: "warning", hex: "#9A4E09" },
      { token: "danger", hex: "#9B1C1C" },
      { token: "info", hex: "#234368" },
    ],
  },
] as const;

export const TYPE_ROWS = [
  { token: "display", sample: "The record is public.", className: "font-display text-4xl font-bold leading-tight" },
  { token: "title", sample: "Look up your representatives", className: "font-display text-3xl font-bold" },
  { token: "heading", sample: "Contribute to the committee", className: "font-display text-2xl font-semibold" },
  { token: "subhead", sample: "Sen. Maria Chen · NY-Class I", className: "text-xl font-medium" },
  { token: "body", sample: "Paid for by Example Committee. Contributions are not tax deductible.", className: "text-base" },
  { token: "caption", sample: "As of Sept 2, 2026 · Source: Congress.gov", className: "text-xs text-ink-muted" },
  { token: "mono", sample: "S. 214 · FEC C00412345 · NY-02", className: "font-mono text-sm" },
] as const;

export const THEME_ALLOWANCES = [
  {
    token: "Brand primary / CTA",
    civic: "Navy fill, paper on inverse hero",
    crimson: "Crimson fill, larger primary",
    forest: "Forest fill",
    locked: false,
  },
  {
    token: "Display weight & tracking",
    civic: "600, generous",
    crimson: "700, tight",
    forest: "600, mid",
    locked: false,
  },
  {
    token: "Chips (product)",
    civic: "Hairline outline",
    crimson: "Filled brand",
    forest: "Outline",
    locked: false,
  },
  {
    token: "Gold",
    civic: "Provenance rule only",
    crimson: "Provenance rule only",
    forest: "Provenance rule only",
    locked: true,
  },
  {
    token: "Danger / success / official",
    civic: "Unchanged",
    crimson: "Unchanged",
    forest: "Unchanged",
    locked: true,
  },
  {
    token: "Record register",
    civic: "2px, no shadow, rules",
    crimson: "Same — cannot loud-ify",
    forest: "Same",
    locked: true,
  },
] as const;

const RUIZ_VOTES: VotePosition[] = [
  { roll: "418", question: "On Passage of S. 214", position: "Yea", date: "2026-08-12" },
  { roll: "401", question: "On the Motion to Recommit", position: "Nay", date: "2026-08-11" },
  { roll: "388", question: "On Agreeing to the Amendment", position: "Yea", date: "2026-07-30" },
  { roll: "372", question: "On Passage of H.R. 118", position: "Present", date: "2026-07-22" },
];

const CHEN_VOTES: VotePosition[] = [
  { roll: "214", question: "On Cloture on S. 214", position: "Yea", date: "2026-08-19" },
  { roll: "209", question: "On the Nomination", position: "Yea", date: "2026-08-04" },
  { roll: "188", question: "On Passage of S. 90", position: "Nay", date: "2026-07-16" },
];

const OKONKWO_VOTES: VotePosition[] = [
  { roll: "418", question: "On Passage of S. 214", position: "Yea", date: "2026-08-12" },
  { roll: "372", question: "On Passage of H.R. 118", position: "Yea", date: "2026-07-22" },
];

export const OFFICIALS: Record<string, Official[]> = {
  "11702": [
    {
      name: "Rep. Alexandra Ruiz",
      office: "U.S. House · 2nd District of New York",
      district: "NY-02",
      phone: "(202) 225-0002",
      nextEvent: "Next town hall: Sept 18, Babylon. Phone hours 9–5 ET.",
      asOf: "Sept 2, 2026",
      source: "Congress.gov",
      api: "member API",
      votes: RUIZ_VOTES,
    },
    {
      name: "Sen. Maria Chen",
      office: "U.S. Senate · New York",
      district: "NY-Class I",
      nextEvent: "Office open 9–5 ET.",
      asOf: "Sept 2, 2026",
      source: "Congress.gov",
      api: "member API",
      votes: CHEN_VOTES,
    },
  ],
  "20001": [
    {
      name: "Del. James Okonkwo",
      office: "U.S. House · District of Columbia",
      district: "DC-AL",
      nextEvent: "Constituent hours Thursday 2–5 ET.",
      asOf: "Sept 2, 2026",
      source: "Congress.gov",
      api: "member API",
      votes: OKONKWO_VOTES,
    },
  ],
};

export const SAMPLE_ROLL: VotePosition[] = RUIZ_VOTES;

export const SAMPLE_AMOUNTS = [25, 50, 100, 250];
