# 02 · Principles

## Purpose

The working principles applied on every request. Philosophy says why; these say what.

## Principles

- One message per moment. A user in one moment has one job.
- One message, one idea — something a user could nod at. Bundled ideas hide weak ones behind strong ones.
- The message lives where the action lives. Distance between message and action is where errors happen.
- Position one gets read; everything after gets scanned, maybe.
- Reassure with facts, not adjectives. "Your data is saved" beats "don't worry."
- Answer "am I okay?" and "what do I do?" first when the user is stressed. Nothing else registers until those are answered.
- Honesty is retention marketing. The impression you leave when a user quits is the ad for their return.

## Rules

- Break every draft into atomic messages before judging any of it.
- Every message gets a verdict: keep (lead), keep (support), defer, or cut. No message ships without one.
- Deferred messages need a named future trigger, or they are cuts in disguise.
- What was cut stays cut, unless new evidence arrives — then version the decision in `09-decision-library.md`.
- State the specific problem. A generic wrapper ("something went wrong") is redundant once the cause is named — the specific problem is its own announcement.
- Point to one best next step, and make it viable and complete ("reduce the file size and try again," not just "try again"). See [One next step](../heuristics/one-next-step.md).
- An error and an upsell are different message types with different treatments. They never share a sentence — even in a PLG product where the upgrade genuinely is the fix.
- Error structure: heading states the effect; body says what happened and how to fix it; one-step CTA. Be specific — exact numbers, dates, or the user's own data. Say "we" only when we caused it. *(source: Polaris error messages)*
- The key takeaway goes in the title and the button. This may mean sacrificing brevity, and that's ok — scannability serves the takeaway, not the other way around. Users read title → button, then act; body text is optional depth. See [Title plus button](../heuristics/title-plus-button.md).
- Skip-by-default elements (text above a list's first item, intro text, banners, descriptions, paragraphs) are not homes for need-to-act messages. See [Skipped by default](../heuristics/skipped-by-default.md).
- Start instructions with the verb; be direct ("add apps", not "you can add apps"). *(source: Polaris fundamentals)*
- Technical terms are allowed — they're not jargon if you explain them the first time. *(source: GOV.UK content design)*

## Decision heuristics

- Two questions decide a verdict: does the user need this to act? Do they already know it?
- If the user could act without it and probably knows it: cut.
- If it matters but not now: defer, and name the trigger.
- An "or" between actions usually marks two messages.
- Only explain a problem the user actually has. If the cause you'd name isn't their cause, they don't need to know it.

## Common mistakes

- Keeping a message because it is true. True is not the bar; useful-now is the bar.
- See `../mistakes/duplicated-messages.md` and `../mistakes/explaining-before-action.md`.

## Examples

- "Oops!" and "We're really sorry about that." — both cut in the upload-error case. Neither changed what the user did next.

## Counterexamples

- Awaiting a real case where a nice-to-know message measurably helped.

## Exceptions

- Warnings about irreversible actions may be kept even when most users already know — the cost of the rare miss outweighs the tax.

## Related concepts

→ [01-philosophy](01-philosophy.md)
→ [06-placement-rules](06-placement-rules.md)
→ [Visual hierarchy](../heuristics/visual-hierarchy.md)
→ [Cognitive load](../heuristics/cognitive-load.md)
