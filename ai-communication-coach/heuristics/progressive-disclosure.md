# Progressive disclosure

## Purpose

Serve the curious without taxing the hurried.

## Principles

- Support information deserves a home, not a headline.
- The collapsed line must be meaningful on its own — a "learn more" after nothing is a locked door with no sign.

## Rules

- Keep-as-support messages default to helper text or an expandable "learn more."
- Never put need-to-act information behind a disclosure.
- The disclosure control needs a visible affordance and keyboard support.

## Decision heuristics

- If most users would act identically without reading it, it belongs behind disclosure.
- If support content keeps growing, that is a sign the lead message isn't answering the real question.

## Common mistakes

- Hiding the lead message to make the screen look clean. Clean is not the goal; acted-on is.
- Disclosure as a dumping ground — tucked content still has to earn its place.

## Examples

- "Your other files are safe" placed as helper text in the upload-error case: reassuring for the worried, skippable for the hurried.
- Retirement enrollment: educational content moved behind disclosure instead of ahead of the enrollment action. See `../patterns/retirement-enrollment.md`.

## Counterexamples

- Some users never expand anything — content behind disclosure goes unseen by them. That is the accepted cost, not a surprise.

## Exceptions

- Legal disclosures sometimes cannot be collapsed. Contain them visually instead.

## Related concepts

→ [Communication cost](communication-cost.md)
→ [06-placement-rules](../books/06-placement-rules.md)
→ [Education follows action](../beliefs/education-follows-action.md)
