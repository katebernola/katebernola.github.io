# Questions

Open questions without owners yet. Promote to a test, a belief, or a decision when they sharpen.

- Where is the line between a support message and a cut? "Helps but they could act without it" covers a lot of ground.
- Who owns the copy of machine-selected dashboard cards — the writer of the card or the owner of the algorithm?
- When a deferred message's trigger never fires, how long before it's declared a cut?
- Is "review" fatigue real — do people start rubber-stamping standards-engine review flags after enough clean runs?
- Should tone rules differ for internal-facing tools vs customer-facing product?

## From evaluating the end-to-end flow (2026-07-22) — all three resolved

Raised while checking `../books/04-decision-framework.md` against established UX practice. The content-strategy spine held up well — inventory, audit, gap analysis, and the move from gap analysis to content needs to a plan is textbook. Three things didn't, and all three were answered the same day:

- ~~**"Design 1" and "Design 2" name nothing.**~~ Renamed to **content design** (collaborative, produces the UI plan) and **design execution** (the designer applying it alone).
- ~~**Both decision points have only one exit.**~~ Answered, and the answer reframed the step: "P.O. approval" was the wrong name, because it isn't a gate the work passes or fails. It's where **the product owner decides what actually ships** — and they may set UX aside entirely. Renamed to say so. The missing loop-back turned out not to be missing but *constant*: the requester can re-enter at any step, say what changed, and the bot updates the artifacts already made. Drawing that as edges from every step would bury the flow, so it's stated as a property of the whole system instead.
- ~~**No validation step.**~~ Both spots named: **usability testing** happens at the point where the product owner decides what ships, and everything is **monitored post-launch**.

Still open from this: a genuinely constant re-entry property is hard to draw without clutter. It's currently a sentence under the diagram. Worth testing whether readers notice it there, or whether it needs a visual device after all.
