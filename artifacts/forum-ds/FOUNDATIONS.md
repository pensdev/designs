# Foundations

## Color model

Forum separates **structure**, **semantics**, and **brand**.

| Layer | Role | Who changes it |
| --- | --- | --- |
| Canvas | Paper, ink, rules, elevated surfaces | System only |
| Semantic | Success, warning, danger, info, official | System only |
| Brand | Primary action fill, focus ring accent, logo lockup | Org theme |
| Party / jurisdiction | Optional chips for D/R/I or state | Feature flag, never default CTA |

Do not use party red/blue as the product’s primary action color. Donation and petition CTAs use `--brand-primary` or semantic `danger` only when the act is irreversible and high-stakes (delete record, cancel recurring, submit official comment).

### Contrast rules

- Body text on canvas: ≥ 4.5:1
- Primary button label on brand fill: ≥ 4.5:1
- Hairline rules: ≥ 3:1 against adjacent fill
- Official / paid-for-by bar: never light gray on white

### Color use in politics

| Meaning | Token | Notes |
| --- | --- | --- |
| Institutional chrome | `navy` | Headers, official cards, data tools |
| Editorial paper | `canvas` | Public articles, explainers |
| Primary act | `brand` | Donate, sign, join |
| Irreversible / money risk | `danger` | Cancel gift, delete list, legal fail |
| Verified / filed | `success` | Filed FEC, confirmed RSVP |
| Deadline / missing data | `warning` | Filing window, incomplete profile |
| Record / citation | `info` | Source chips, bill status info |
| Official government data | `official` | Distinct from org brand |

## Typography

Two families. Never three on a public page.

| Role | Family | Why |
| --- | --- | --- |
| Display / editorial | Source Serif 4 | Civic document, not startup sans |
| UI / data / labels | IBM Plex Sans | Neutral, excellent tabular figures |
| Identifiers | IBM Plex Mono | Bill numbers, FEC IDs, district codes |

### Scale (px / rem at 16)

| Token | Size | Line | Use |
| --- | --- | --- | --- |
| `display` | 40 / 2.5 | 1.15 | Page titles on public |
| `title` | 32 / 2 | 1.2 | Section titles |
| `heading` | 24 / 1.5 | 1.25 | Cards, dialog titles |
| `subhead` | 20 / 1.25 | 1.35 | Deck, official name |
| `body` | 16 / 1 | 1.55 | Public reading |
| `body-sm` | 14 / 0.875 | 1.5 | Data tables, secondary |
| `caption` | 12 / 0.75 | 1.4 | Disclaimers, timestamps |
| `micro` | 11 / 0.6875 | 1.35 | Paid-for-by, legal only |

Public body stays at 16px. Data tools may use 14px for cells, not 12px.

### Type rules

- Headlines sentence case. No small-caps wordmarks in body.
- Tabular lining figures in money, votes, counts.
- Tracking on micro legal: +0.02em maximum.
- Never light-weight serif below 24px.

## Spacing

4px base. Use the scale; do not invent 13px gaps.

`4 8 12 16 20 24 32 40 48 64 80 96`

| Context | Page gutter | Stack gap | Card pad |
| --- | --- | --- | --- |
| Public marketing | 24 / 48 desktop | 24–40 | 24 |
| Action form | 16 / 32 | 16–24 | 20 |
| Data console | 16 / 24 | 8–16 | 12–16 |

## Layout

- Public max measure: 680px for reading, 1120px for marketing frames, 1440px for dashboards.
- 12-column grid at desktop; stack at `640px`.
- Sticky primary CTA on mobile action pages; never sticky legal that covers the button.
- Skip link required.

## Elevation

Paper, not glass.

| Level | Use |
| --- | --- |
| 0 | Canvas |
| 1 | Cards, official tiles |
| 2 | Popovers, sticky headers |
| 3 | Modals |

Shadows are cool-neutral and short. No neon glow, no party-colored shadows.

## Motion

| Token | Duration | Easing |
| --- | --- | --- |
| `instant` | 80ms | standard |
| `swift` | 160ms | standard |
| `deliberate` | 240ms | standard |

Standard curve: `cubic-bezier(0.2, 0, 0, 1)`.

No bounce on contribution success. A check and a receipt are enough.

## Iconography

- 24px default, 16px in dense tables.
- 1.75px stroke. Rounded joins. No filled party logos as UI icons.
- Status icons always paired with a text label.

## Imagery

- Candidate and principal photography: consistent crop, cool-neutral grade, no heavy vignette.
- Do not use stock “diverse crowd cheering” as a substitute for evidence.
- Maps: muted canvas, navy lines, brand for selected district only.

## Dark theme

Dark is first-class for organizer consoles and late-night editing. Public donation pages default to light unless the org theme explicitly inverts.

Dark canvas is ink navy, not pure black. Gold and crimson shift one step lighter to hold contrast. Brand fill must be re-checked; do not invert blindly.
