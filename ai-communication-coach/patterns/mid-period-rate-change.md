# Mid-period rate change

## The problem

A user edits an hourly rate in the middle of a pay period. The system can either defer the change to the next pay period, or split the current check between the old rate and new rate. The choice has huge consequences — it affects the employee's check, the company's accounting, and whether approval is needed.

The old design asked the user to choose before showing them what the choice meant. No numbers. No breakdown. Just two radio options.

## The workflow

**User lands on:** payroll compensation editor. Edits an hourly rate, picks "make this rate the default."

**System detects:** the date they're applying it (7/23) is inside an open pay period (7/18–7/31).

**Today's design says:** "How do you want to apply the new amount?" Two options, no explanation of consequences.

**The defect:** the user can't answer the question without knowing what each option costs. But the costs only appear *after* they pick.

## The solution

### Show the consequence before the choice

**Before/after design:** the new design doesn't add words. It adds numbers.

**What changes:**
- Above the choice, a line explains the situation in plain language. "Heads up, this is a mid-period rate change. Due to Jul 23rd being in the middle of a pay period (Jul 18 – Jul 31), please choose an option below."
- Each option gets a concrete consequence shown immediately, not hidden behind a choice. No waiting to find out what "apply both old and new rates" actually means.
- The consequence is visual: two date ranges, two rates, two hour counts, two totals. A simple stacked breakdown.
- The user can edit the split with a calendar if they need to adjust which dates use which rate.

**Why this works:**
Every choice requires context. The answer is often not words. It's numbers, a visual, or an interaction. The user doesn't need reassurance ("don't worry, we'll handle it"); they need to see what "handling it" looks like.

This pattern reuses existing product behavior: the payroll grid already shows old rates and new rates side by side when a change is made. The solution says: do that same thing when the user is deciding whether to make the change.

### The principle that made this work

**Constraint honored silently = defect shipped invisibly.**

The original design honored the constraint "show a choice" but silently abandoned the user's actual need: "help me understand what each choice means." Because the consequence was hidden, the user had to either guess or back out and re-enter after checking what it would do.

The new design keeps the choice and adds the consequence. Both are visible at the same time, in the same place.

## Judgment calls and constraints

**Legal/payroll rule:** Midpoint rate changes have real consequences. The company's accounting, the employee's check, and regulatory compliance can all hinge on the choice. Hiding the consequence isn't simpler; it's riskier.

**Data already exists:** The system can calculate the two-rate breakdown instantly. It just wasn't surfacing it. No new data collection needed.

**Approval varies by company:** The line "If it needs approval, we'll run it by the right people" is true but vague. Some companies need approval for midpoint changes; some don't. The design doesn't solve that problem. It just surfaces the fact that approval might be needed. That's correct: the system knows, the user should know too.

## Risks and what got logged as a defect

**The defect from the strategy review:**
A dashboard alert disappears when the user completes one step (in the tax case, adding the agency ID). But the user is still blocked — they need to complete two more steps before taxes can file. The alert cleared because the step was done, not because the work was done.

In this case, it's reversed and correct: the consequence is shown *before* the choice, so the user is never surprised by what they committed to.

## Rules this case teaches

→ [[bad-requirements-get-alternate-plans]] — v1 in decisions/books/09-decision-library.md. When a constraint fights the real fix (here: "show a choice" vs. "help them understand it"), the strategy ships two plans. This design chose the real fix.

→ [heuristics/audit-existing-cues.md](../heuristics/audit-existing-cues.md) — the payroll grid pattern already answered this question elsewhere; the solution was to move it, not invent it.

→ [mistakes/late-validation.md](../mistakes/late-validation.md) — the inverse case. Here, the consequence is shown early so the user can validate before committing. When validation comes late (error at save), it signals the feature doesn't work.

## Related patterns

→ [../patterns/tax-registration-middesk.md](../patterns/tax-registration-middesk.md) — another fork with hidden consequences; comparison prevention as a deceptive pattern.

→ [../heuristics/state-aware-messaging.md](../heuristics/state-aware-messaging.md) — show what state they're in when they can't act.

→ [../books/09-decision-library.md](../books/09-decision-library.md) — the decision library records that this case taught v1: bad requirements get an alternate plan.
