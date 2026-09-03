# Pattern: Contribution

The most litigated and most dropped-off flow in political tech. Optimize for completion and compliance, not decoration.

## Intent

Collect a legal contribution with a clear amount, a clear recipient, and a receipt.

## Layout

```
IdentityBar
Title (“Contribute to {committee}”)
AmountPicker
RecurringToggle (off by default)
Employer / occupation (when required)
Payment
ContributionSummary
Primary: Contribute $XX
PaidForBy
```

Single column. Max width 28rem for the form. No competing nav CTA.

## Rules

1. Suggested amounts are three to five. Highlight one realistic default, not the highest.
2. “Other” is an input with currency prefix, not a fake button that hides the keypad.
3. Recurring is opt-in. Copy: “Make this monthly.” Never “Yes, invest every month!” as a checked box.
4. Cover-the-fee is opt-in and itemized in the summary.
5. Employer/occupation appears when the processor or FEC rules require it, with a plain-language reason.
6. The charge button label includes the amount: `Contribute $50` or `Contribute $50 monthly`.
7. Processing uses a disabled button + live region. Success is a Receipt page, not a modal that can be lost.
8. Failure states distinguish card decline, network, and compliance reject.
9. Do not preload $1,000 as the first chip unless that is the true median for the audience.

## Copy

- “Contribute” not “Chip in” on official committee pages.
- Legal under the button, 12px, ink-muted, contrast ≥ 4.5:1.
- No countdown (“Act in the next 4:59”) unless a filing deadline is real.

## Mobile

- Amount chips wrap, 44px tall.
- Sticky submit only after amount is chosen.
- Apple Pay / Google Pay above manual card when available.

## Analytics events

`contribute_view` `amount_select` `recurring_toggle` `cover_fee_toggle` `contribute_submit` `contribute_success` `contribute_fail`
