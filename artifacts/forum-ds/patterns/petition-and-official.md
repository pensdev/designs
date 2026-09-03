# Pattern: Petition

## Intent

Record a named position and, when promised, deliver it.

## Layout

```
AlertBanner? (deadline only if real)
Title + one paragraph of what will be done with the signature
PetitionCounter (current, optional goal, updatedAt)
Form: name, email, postal code / district
Optional: public display name
Primary: Sign the petition
SourceCitation for the claim being petitioned
PaidForBy / IdentityBar
```

## Rules

1. Say where the signature goes (member offices, agency docket, internal list).
2. Do not imply a legal filing if it is an org list.
3. Postal code before full address. Derive district server-side.
4. Counter updates from a trusted count, not a marketing floor.
5. After submit: share kit + official lookup (“These members received it”).

# Pattern: Find official

## Intent

Resolve a person to a current officeholder with sources.

## Layout

```
Lookup field (address or zip)
OfficialCard+ (stacked)
Actions: Call · Email · Write · Town hall
VoteRecord list (sourced)
SourceCitation (API + as-of date)
```

## Rules

1. Party chip is optional and never the card’s left stripe by default. Office and district are the identity.
2. Vacant seats are a first-class state, not an empty card.
3. Phone numbers are `tel:` and show hours if known.
4. “Email” that opens a prewritten blast must disclose that the org is sending it.
5. Cache as-of dates on every record. Stale data is worse than no data in this domain.

# Pattern: Compliance chrome

Every public template includes:

1. `IdentityBar` in the header or immediately under it
2. `PaidForBy` adjacent to the primary act and again in the footer
3. `ComplianceFooter` with privacy, contact, and committee address
4. Visible `as of` on any vote, poll, or count

Do not collapse paid-for-by into a hamburger. Treat it as content.
