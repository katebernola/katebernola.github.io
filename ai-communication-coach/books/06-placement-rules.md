# 06 · Placement rules

## Purpose

Where each kind of message lives. A message's home matters as much as its words.

## Principles

- The message lives where the action lives.
- Support information helps the curious without taxing the hurried — that is what progressive disclosure is for.
- A deferred message needs a future trigger, or it is a cut wearing a calendar.

## Rules

Default placement by verdict:

| Verdict | Default home |
|---|---|
| Keep (lead) | Inline, at the point of action — visible without any extra click. In a dialog: above the buttons. |
| Keep (support) | Helper text or a "learn more" (progressive disclosure). The collapsed line must be meaningful alone. |
| Defer | A later touchpoint: next session, changelog, follow-up. Name the trigger. |
| Cut | Nowhere. That is the reward for cutting. |

Override warnings (allowed, but on the record):

- Lead message in a tooltip: hidden behind a hover most users never make.
- Lead message in helper text: skipped by the very users who need it.
- Lead message deferred: the user acts without it — the outcome the message exists to prevent.
- Support message in a modal: a door in the face for optional information.
- Support message in a banner: broadcasting what should be whispered.
- Deferred message placed inline now: then it isn't deferred — re-evaluate.

*Canonical data: [`../rules.js`](../rules.js) → `PLACEMENT_DEFAULTS`, `OVERRIDE_WARNINGS`, `PLACEMENTS`.*

## Information architecture

Placement scales into IA. Three principles adopted from Polaris *(source: Polaris information architecture)*:

- **One home, many doors.** Content lives in exactly one place; every place users might need it links to it. Duplication is not availability — it's future contradiction.
- **Avoid information overload.** Gradually reveal information as it's requested; provide multiple access points; eliminate redundant content. Progressive disclosure is an IA principle, not just a component trick.
- **Show people where they are.** A message lands differently when the user knows where they're standing — wayfinding (navigation, breadcrumbs, context) is part of communication.

## Skip zones

Some placements are skipped by default — users often don't register they exist, even while hunting for them: anything above the first item in a list or chart, explanatory and intro text, banners, descriptions, paragraphs. Need-to-act messages never live there, and every unnecessary use trains users to ignore the zone when it does matter. Full list and reasoning: [Skipped by default](../heuristics/skipped-by-default.md).

## Decision heuristics

- More than two inline messages compete for the same glance.
- One dialog, one job.
- Later channels have weaker attention than in-product moments: what you gain in timing you lose in reach.
- If a message must be seen, attach it to the thing users came for — the item, the field, the button — not the space above it.

## Common mistakes

- Placing by available space instead of by verdict.
- See `../mistakes/duplicated-messages.md` for the same message in two channels.

## Examples

- Upload error: two lead messages inline, one support message behind disclosure, upsell deferred to a later touchpoint.

## Counterexamples

- Awaiting a real case where a tooltip successfully carried required information.

## Exceptions

- Confirmation dialogs put the lead message in a modal by design — the modal is the point of action.

## Related concepts

→ [Progressive disclosure](../heuristics/progressive-disclosure.md)
→ [Communication cost](../heuristics/communication-cost.md)
→ [07-component-standards](07-component-standards.md)
→ [Dialog](../components/dialog.md) · [Tooltip](../components/tooltip.md)
