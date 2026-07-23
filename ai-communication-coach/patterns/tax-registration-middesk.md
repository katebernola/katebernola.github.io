# Tax registration with a paid partner

## The problem

Users face a fork: register for taxes on their own, or pay a partner service to handle it. The current screen hides what each path costs and involves, so the choice is uninformed. The rules say you can't judge a fork without seeing both branches — and this workflow has a hidden cost that only appears on the partner's site, after the user has already left.

## The workflow

**User lands on:** a state revenue agency's registration guide.

**The fork (mid-workflow):** "Do you want to register yourself, or use a paid partner?"

**Today's problem states:**
- The paid option's cost ($150 per registration) doesn't appear until after the user navigates to the partner's site and reads their pricing page.
- The free option's requirements (EIN, entity type, owner's SSN, bank details…) only appear after you pick instructions.
- Each option's "you do" and "time" are separate — no side-by-side comparison.
- A line says "Next: Instructions" before any choice is made, presume-selling the free path.
- The dashboard alert clears the moment the ID is added — while the user is still two steps from being able to file taxes. It's the loudest cue in the product, appearing at exactly the wrong moment.

**Regulatory constraint:** tax agencies require the employer to register. The software cannot do this for the user; it can only guide them. This is not a design choice. It's load-bearing for the whole strategy.

## The solution

### Artifact 1 — make the comparison visible

**Before/after screen:** the choice hides inside two radio descriptions. The recommendation is a two-column table, feature-by-feature, reusing the exact pattern already built for the auto-file accept/decline screen.

| | With partner | On your own |
|---|---|---|
| **Cost** | $150 per registration; this agency needs 1 | Free |
| **You do** | Answer their questions in plain English | Gather your EIN, entity type, owner's SSN, bank details, and more — then apply on the agency's site |
| **Time** | About a day to get your ID back | About 75 minutes, usually across several sessions while you wait on the agency |
| **Also** | Sets your Workers' Comp rate correctly | — |

Above the table, a single line establishes the why: *tax agencies require the employer to register; we're not permitted to do this one for you. Until it's done, we can't file or pay this agency.*

A progress indicator shows this is step 1 of 3 (register → turn on auto-file → assign agent). Neither option is pre-selected.

**Why this works:**
The comparison was always the argument. It was just hidden behind the choice it was supposed to inform. Surfacing it costs zero new copy — the facts already exist in the product. Reusing the auto-file table teaches users one comparison pattern instead of two. The "step 1 of 3" does the work of "this is temporary" without words.

**Why pre-selection is not used here:**
The paid option benefits the business, not the user. In the legal ruling confirmed during this review, pre-selection of paid options is a deceptive pattern. Sensible defaults (free options the user already bought, status fields reporting facts) are not. This is the test: does it benefit the business at the user's expense?

### Artifact 2 — make the message state accurate

**Before/after:** The dashboard alert clears when the ID is added. The recommendation is a four-state tracker reusing the exact pattern already built for auto-file setup.

**State 1: Not registered**
Dashboard shows: Register with this agency.

**State 2: Partner working** (about a day)
No action possible. Quiet — or show "we're reviewing, check back soon." Nothing to do now nagging the user would train them to ignore alerts.

**State 3: ID received**
Alert returns, worded for what this agency actually requires: either "submit a signed form" or "assign us as your agent at the agency site." The wording varies by agency — only these two variants were observed.

**State 4: Agent assigned**
Nothing owed. Alert clears for real.

**Why this works:**
The naive fix — "keep the alert up until everything is done" — is backwards. It would nag for something the user cannot do. The real fix is to make the alert accurate to the state. State 2 is the reason it exists: *you know the user is still blocked, so you know the dashboard going silent is a claim that nothing is needed. That claim is false.*

The dashboard clears today at State 1. It should clear at State 4.

**Existing pattern reused:**
The Taxpay setup flow already has this four-state tracker. It's already been reviewed. It's already taught users what a multi-step workflow looks like. Moving it here teaches the same pattern twice: the work for both is "move this component," not "invent a new component."

## Judgment calls and constraints

**Regulatory:** The company is not permitted to register the user. This constraint is non-negotiable and load-bearing. It unlocks the entire message strategy — the user needs to understand they own this step, not that the company is choosing not to.

**Legal:** Pre-selection of the paid option was prohibited mid-review. This eliminated the "obvious business choice" default and forced the comparison to carry the whole argument.

**Per-registration pricing:** This agency is one. A typical business in this industry needs registration at 2–3 agencies. The pricing ($150 × 2 or 3) is much higher than it looks at first. The message says "this agency needs 1" — pulling the count from the agency list so the number is always accurate. The currency doesn't change the core problem; it sharpens it.

## Risks and open questions

**Visible in this workflow:**
- The dashboard clears at the wrong moment today. This is a high-certainty find grounded in two pairs of screenshots showing the state before and after.
- The per-agency authorization varies (signed form vs. agency site assignment) — only two variants observed. The conditional message ("two strings, one per agency type") survives even in Plan B.

**Not visible in the workflow:**
- What happens if the user never returns to self-certify after submitting to the partner. The weekly email and the Taxes hub page are cues the user may not see.
- Whether the "Needs attention (15)" count on the dashboard actually decrements after completing one agency, or if it's a stale display.
- Whether registration is truly the step that unblocks filing, or if there are intermediate steps after the ID returns.

**Measurement gap:**
The partner upsell success is unknown. There's no baseline for what % of users who reach the fork choose the paid option, or whether they return after the partner completes their work. A/B testing placement or copy would be a waste without a baseline.

## Rules this case teaches

→ [[defensible-defaults]] — v3, preselection taxonomy: *only a problem when it's part of a deceptive pattern that benefits the business rather than the user*

→ [heuristics/propagate-existing-patterns.md](../heuristics/propagate-existing-patterns.md) — inventory before you invent; two of the biggest gaps had solutions already sitting in adjacent flows

→ [heuristics/state-aware-messaging.md](../heuristics/state-aware-messaging.md) — persistent is not the goal; accurate is. A cleared alert is a claim that nothing is needed.

→ [books/04-decision-framework.md](../books/04-decision-framework.md) — you can't judge a fork without seeing both branches; this workflow isn't captured until every path is captured through to its end state

→ [books/14-voice-and-tone.md](../books/14-voice-and-tone.md) — stay apolitical; a tax calendar's job is "banks are closed," not settling contested holiday names

## Related patterns

→ [../patterns/mid-period-rate-change.md](../patterns/mid-period-rate-change.md) — constraint honored silently = defect shipped invisibly; the best answer is often not words

→ [../mistakes/late-validation.md](../mistakes/late-validation.md) — system knows an action will fail; lets user invest effort anyway; error arrives at save

→ [../heuristics/audit-existing-cues.md](../heuristics/audit-existing-cues.md) — the same discipline applied to messages: what's already on screen before you add more

