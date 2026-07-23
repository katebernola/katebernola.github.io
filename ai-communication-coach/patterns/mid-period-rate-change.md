# Pattern: mid-period rate change

The flagship case. A designer brought a real flow — changing an employee's pay rate in the middle of a pay period — through the full coaching conversation (2026-07-19). Every rule this case produced is tagged below.

## The situation

- Admins change a pay rate mid-period, so one paycheck carries two rates.
- The functionality confused users badly enough that they called support instead of finishing.
- The requester was handed "content changes only" — no scope for workflow changes.
- Point-of-need work: the UI and the Help Center, no push channels.

## What the conversation surfaced (that a form wouldn't have)

- **The real user goal.** Stated goal: "complete the workflow." Actual goal, surfaced late from an aside: admins are incredibly anxious reviewing payroll and want reassurance they did it right *before* submitting. Peak anxiety is right before Submit — and that moment said nothing about the change.
- **The invisible wall.** The product appears to let you change a non-default rate mid-period, then errors out at the end. The constraint lived only in the Help article. → [late-validation](../mistakes/late-validation.md)
- **The Help article contradicted the product.** Caught by comparing the pasted article against the requester's account of behavior. Content drift between sources is itself a finding.
- **The misplaced error.** The flow ran: input date → input new salary → "there's something wrong with your date." Date feedback two steps after the date. → [group-related-decisions](../heuristics/group-related-decisions.md)
- **The choice that needed titles, not paragraphs.** Two apply options, each needing explanation — shown one at a time, on selection. → [title-does-the-compare-work](../heuristics/title-does-the-compare-work.md)
- **The squatter.** A benchmarking upsell sat on every screen of the stressful task. → the upsell effectiveness test, [09-decision-library](../books/09-decision-library.md)
- **The downstream surface.** Confusion resurfaced later, in the payroll grid — a different screen, arguably a different owner. The message system doesn't stop at the screen being redesigned.

## The strategy shape this case produced

Problem (user's words + business) → goals (primary: "I feel comfortable") → indicators and 1–4 recommended KPIs, some in-product → message plan as content audit + content need, verdicts with levels and delivery flags → **plan A**, which mitigates the UX risks but adds scope (fix the workflow: group date decisions, disable the non-default option, defensible default on the easiest date) → **plan B**, which holds scope and carries the risk (constraints hold: same messages placed in the existing flow, plus a defect log naming the broken heuristics) → risks (screens not seen) → open questions. The product owner decides between the two.

## Lessons that outlived the case

- The answer is often not words: disable, group, default, suppress. Verdicts must be able to say so.
- Reassurance belongs at peak anxiety, prevention at the point of choice.
- A constraint honored silently is a defect shipped invisibly — log it by name.
