# Title plus button

## Purpose

The title and the button tell one cohesive story, readable on their own. Everything else is optional depth.

## Principles

- Assume users read in this order: **title → button → act.** Only if needed are they willing to take in more — body text, a page header that sets context.
- The pair must stand alone. You should never need the body to figure out how the title and button relate.
- Different verbs in title and button are often *helpful* — the button can carry a unique piece of information that builds the user's larger understanding. Same-verb mirroring is not the general rule.
- The key takeaway lives in the title and the button. This may mean sacrificing brevity, and that's ok.

## Rules

- Write the title and button first, as a pair. Test them by hiding everything else on the surface — do they still tell the story?
- Never pair a specific title with a generic button ("OK", "Continue") when the button could carry information instead.
- Brevity yields to the takeaway: a longer title that carries the point beats a short one that doesn't.

## Decision heuristics

- If the button only makes sense after reading the body, the pair is broken.
- If the title is generic ("Confirm", "Heads up"), the story has no first half.
- Ask what unique information the button could add that the title didn't.

## Common mistakes

- Relying on body text to connect title and button — most users never read it.
- Over-trimming a title until the takeaway falls out of it, to hit a word count.

## Examples

- Illustrative shape (not a shipped case): title "Your trial ends in 3 days" + button "Add payment method" — different verbs, one story, and the button adds the unique next step.

## Counterexamples

- Awaiting a real case where a generic button outperformed an informative one.

## Exceptions

- **Destructive action confirmations** have their own rule: mirror the words. Title "Delete customer?" gets button "Delete customer" — the re-verification friction is the point there. See [Dialog](../components/dialog.md).

## Related concepts

→ [Visual hierarchy](visual-hierarchy.md)
→ [One next step](one-next-step.md)
→ [Skipped by default](skipped-by-default.md)
→ [02-principles](../books/02-principles.md)
