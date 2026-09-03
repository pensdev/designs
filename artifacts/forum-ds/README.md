# FORUM Design System

**Design system for political technology platforms.**

Forum is a production design system for campaign sites, advocacy orgs, donation flows, grassroots tools, policy dashboards, and internal campaign ops. It is not a government identity system and not a party kit. It is a civic product layer: trustworthy structure, configurable brand, political-specific patterns.

```
Authority without theatrics.
Action without noise.
```

## What this package is

| Layer | Status | Location |
| --- | --- | --- |
| Principles | v0.1 | `PRINCIPLES.md` |
| Foundations | v0.1 | `FOUNDATIONS.md` |
| Design tokens | v0.1 | `tokens/` |
| Tailwind v4 theme | v0.1 | `tailwind/theme.css` |
| Component inventory + APIs | v0.1 | `components/INVENTORY.md` |
| Political patterns | v0.1 | `patterns/` |
| Visual style guide | v0.1 | `preview/index.html` |

v0.1 is the source of truth for tokens, voice, and the component contract. React/shadcn implementation is the next increment once the product surface is confirmed.

## Stack target (web)

- Next.js App Router + React + TypeScript
- Tailwind CSS v4 with CSS-first tokens
- shadcn/ui primitives mapped onto Forum tokens (do not ship raw shadcn colors)
- Radix for accessible behavior
- WCAG 2.2 AA minimum; Section 508 posture for any public civic surface

## Product surfaces Forum is built for

1. Public advocacy and campaign sites
2. Contribution / donation / membership flows
3. Petitions, letters, call tools
4. Find-your-rep and official records
5. Bill / policy trackers and high-density data
6. Events, volunteer, and field tools
7. Email / landing / paid-media continuity
8. Internal ops consoles (organizer, finance, compliance)

## Non-goals

- Imitating `.gov` so closely that the product looks official when it is not
- Locking red/blue as “party colors” in the base token set
- Decorative politics (flags as wallpaper, stock crowds as trust)
- Dark patterns around recurring gifts, pre-checked advocacy mail, or urgency timers that lie

## How to use

1. Read `PRINCIPLES.md` before touching color.
2. Load `tokens/tokens.css` or `@import` `tailwind/theme.css`.
3. Override only the brand layer (`--brand-*`), never semantic meaning.
4. Implement components against the contracts in `components/INVENTORY.md`.
5. Use patterns in `patterns/` for donate, petition, official, and compliance.

Open `preview/index.html` in a browser for the visual reference.

## Versioning

Tokens follow semver.

- **MAJOR** — semantic token meaning changes (breaking)
- **MINOR** — new tokens or components
- **PATCH** — value tuning that preserves contrast and meaning
