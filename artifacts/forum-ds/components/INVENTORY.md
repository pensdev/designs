# Component inventory

Build order is the column on the right. Do not start custom political widgets before the primitives are token-mapped.

## 0. Primitives (map shadcn, do not restyle ad hoc)

| Component | Contract notes | Build |
| --- | --- | --- |
| Button | `primary` `secondary` `ghost` `danger` `official`. Sizes `sm` `md` `lg`. `lg` is the only donate size on mobile. | P0 |
| IconButton | Accessible name required. 44px min on touch. | P0 |
| Link | External links get an affordance. Never style a link as a primary button except the single page CTA. | P0 |
| Input / Textarea | Label always visible. Error is text + border, not color alone. | P0 |
| Select / Combobox | Use for jurisdiction, amount “other”, office. | P0 |
| Checkbox / Radio / Switch | Recurring gift is a labeled switch, not a pre-checked box. | P0 |
| Field | Label, hint, error, optional tag. | P0 |
| Tabs | Public pages max 5. Data tools unlimited with scroll. | P0 |
| Dialog | Money and legal confirmations use Dialog, not toast. | P0 |
| Toast | Non-blocking only. Never confirm a contribution with a toast. | P0 |
| Badge | Status, chamber, party (optional), filing. | P0 |
| Card | `editorial` `official` `data` `action`. | P0 |
| Table | Sticky header, tabular nums, row action menu. | P1 |
| Pagination | Offset for public lists; cursor for voter file. | P1 |
| Tooltip | Supplementary only. Not for legal. | P1 |
| DropdownMenu | Organizer actions. | P1 |
| Accordion | FAQ, bill history. | P1 |
| Breadcrumb | Data tools and policy trees. | P1 |
| Skeleton | Keep layout height to avoid CTA jump. | P0 |
| EmptyState | One sentence + one act. | P1 |

## 1. Civic / political components

| Component | Purpose | Key props | Build |
| --- | --- | --- | --- |
| `PaidForBy` | Required disclaimer strip | `committee`, `treasurer?`, `independentExpenditure?` | P0 |
| `IdentityBar` | Who is speaking | `orgName`, `orgType` (campaign \| c4 \| pac \| c3), `verified?` | P0 |
| `AmountPicker` | Contribution amounts | `amounts[]`, `allowOther`, `currency`, `suggested` | P0 |
| `RecurringToggle` | Monthly / quarterly | `period`, `defaultOn=false` | P0 |
| `ContributionSummary` | Line items before charge | `amount`, `period`, `feeCover?`, `legal` | P0 |
| `PetitionCounter` | Signatures | `current`, `goal?`, `updatedAt` | P1 |
| `OfficialCard` | Member / candidate | `name`, `office`, `party?`, `district`, `photo`, `actions[]` | P1 |
| `VoteRecord` | Yea/nay/absent | `question`, `position`, `date`, `source` | P1 |
| `BillStatus` | Legislative stage | `stage`, `chamber`, `updatedAt` | P1 |
| `SourceCitation` | Provenance chip | `source`, `href`, `publishedAt` | P0 |
| `DeadlineChip` | Real deadlines only | `at`, `label`, `source` | P1 |
| `AlertBanner` | Breaking / action | `tone` info\|warning\|danger, `title`, `href?` | P0 |
| `EventCard` | RSVP | `title`, `start`, `venue`, `capacity?` | P1 |
| `ShiftPicker` | Volunteer shifts | `shifts[]`, `conflicts` | P2 |
| `DistrictMapFrame` | Selected district chrome | `jurisdiction`, `id` — map impl is separate | P2 |
| `ShareKit` | Native + copy + platforms | `url`, `text`, `utm` | P1 |
| `ComplianceFooter` | FEC / IRS / state | `variant` | P0 |
| `Claim` | Quoted claim + context | `quote`, `context`, `source` | P2 |
| `Endorsement` | Named supporter | `name`, `role`, `quote?` | P2 |
| `PollAverage` | Number + house effect note | `value`, `spread`, `methodologyHref` | P2 |
| `CanvassScript` | Field script card | `steps[]`, `objections[]` | P2 |
| `Receipt` | Post-gift | `id`, `amount`, `last4`, `period` | P0 |

## 2. Button semantics (do not invent more)

```
primary     brand fill     Donate / Sign / Submit / Join
secondary   outline        Share / Learn / View record
ghost       text           Cancel / Skip / Edit
danger      crimson        Delete list / Cancel recurring / Revoke
official    navy           Look up official / Open record
```

A page may have one `primary`. Donation pages: the charge button is the only `primary` in the form.

## 3. State matrix every action component must implement

`default · hover · focus-visible · active · disabled · loading · error · success`

Focus ring: 2px `brand-accent` offset 2px on light; gold on dark. Never remove focus.

## 4. Accessibility acceptance

- Keyboard complete
- Visible focus
- Name, role, value for AmountPicker and RecurringToggle
- Live region for PetitionCounter and contribution processing
- `PaidForBy` not `aria-hidden`
- Contrast audited in both themes after brand override
