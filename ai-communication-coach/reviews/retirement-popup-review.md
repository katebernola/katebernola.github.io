# Retirement enrollment popup review — 2026-07-18

Coached live from a marketer's request. Related pattern: [retirement-enrollment](../patterns/retirement-enrollment.md).

## Context

- Requester: a marketer on the Retirement team. Trigger: metrics — 401(k) participation is 30% vs ~80% industry norm.
- Proposed: a modal on system entry — "Did you know? / You're eligible for a 401k. / Sign up now to enjoy great benefits in retirement. / Remind me later · Let's go!"
- Stage: everyday use (users entering to do a task). Business goal: participation/adoption. Communication goal as proposed: persuade.

## Findings (ranked)

1. **Probably not a words problem.** A 50-point participation gap smells structural — the industry's 80% is heavily driven by auto-enrollment and defaults. Questions before writing: is auto-enrollment on the table? How many steps is enrollment? Mistake on file: assuming copy will fix it. (See [01-philosophy](../books/01-philosophy.md); [defaults-beat-explanations](../beliefs/defaults-beat-explanations.md) — this may become its evidence case.)
2. **Wrong moment, wrong component.** A blocking modal at entry interrupts a habitual task with an announcement; modals are for actions required before proceeding. Move to a money-salient moment (paystub view), as a dismissible card, targeted to eligible non-participants only. (See [05-user-journeys](../books/05-user-journeys.md); [marketing-in-product](../mistakes/marketing-in-product.md).)
3. **No deciding fact.** Title→button reads "Did you know?" → "Let's go!" — nothing → nothing. Eligibility is the stakeholder's fact (implied by the invitation); "great benefits in retirement" is an unverifiable, distant claim needing legal eyes. The deciding fact is the match, in dollars per paycheck — if it exists. Not confirmed; not written as if it were. (See [title-plus-button](../heuristics/title-plus-button.md); claim words in [approved-terms](../terminology/approved-terms.md).)
4. **"Remind me later" is an unowned nag loop.** No cadence, expiry, or owner. Cap resurfacing (once, at the next salient moment), then retire to a persistent quiet entry point. New-badge expiry logic applies. (See [12-governance](../books/12-governance.md).)

## Verdicts

- "Did you know?" — cut.
- "You're eligible for a 401k." — cut as standalone (implied by the invitation; also formatted "401(k)").
- "Sign up now to enjoy great benefits in retirement." — keep the action; replace the reason with the deciding fact.
- "Let's go!" — rewrite: verb + noun, carries information, no exclamation mark.
- "Remind me later" — rewrite with governance.

## Draft to react to (valid only if a match exists)

> **Your employer adds [$X] for every [$Y] you put toward retirement**
> You're eligible now. Enrollment takes about [N] minutes.
> **[Start enrollment]** [Not now]

Facts needed before shipping: match formula, median missed dollars per paycheck, enrollment step count / minutes, auto-enrollment status, targeting capability (eligible non-participants only).

## Addendum — 2026-07-18

Human review reordered the findings. The first question, before all others: **what cues already exist pointing the user to the 401(k)?** A benefits tab, a $0.00 retirement line on every paystub, an annual enrollment email — the user has already walked past whatever exists. A popup becomes the next cue in that lineup, and users who filtered the others will filter it too, unless something actually changes: the moment, the fact, or the friction behind it. Inventory and diagnose the existing cues (unseen? unclear? unconvincing?) before adding one. This question is now part of standard intake — see [audit-existing-cues](../heuristics/audit-existing-cues.md).

Also from this review: coaching voice corrected — justifications lead with the end user's behavior, never with what the pattern library says (see [03-coaching-style](../books/03-coaching-style.md)).

## Addendum 2 — 2026-07-18: the review reviewed

Human review of the coaching itself surfaced major corrections:

- **The metric was misread.** The 30%/80% figures are completion rates of the enrollment flow *once started* — not participation. That's a leaky funnel inside enrollment, not an awareness gap; the auto-enrollment line of reasoning is withdrawn. The coach reasoned confidently from a number it never interrogated. New standing rule: ask "what exactly are we measuring?" before building on any metric ([11-research-methods](../books/11-research-methods.md)). Business reality noted: the funnel is the problem, but the org sees any incremental add as free upside — a half-percent lift will be declared success, and no one will conclude "communication doesn't work."
- **An existing cue was already doing the popup's job.** Asked "what are we doing today in the application to help people enroll?", the requester revealed a giant dashboard tile at login already promotes enrollment. The proposed popup duplicates a failing cue at the same moment. One question surfaced what no finding could.
- **The eligibility verdict was wrong.** The pattern lesson ("cut eligibility") was learned on the post-CTA landing page, where arrival implies eligibility. This popup is the *upstream* message whose job is introducing eligibility — same topic, different journey position, opposite verdict. Verdict revised: eligibility is legitimate content here. ([13-pattern-library](../books/13-pattern-library.md) now carries the position rule.)
- **The delivery was wrong for live coaching.** Four full findings at once overwhelms — the frame is for this record, not the conversation. Live: one light question at a time, blunt observations and tradeoffs held in reserve, no component jargon with marketers, cross-team suggestions (the paystub idea) framed as worth exploring and routed to the owning team's design manager, never stated as if permitted. ([03-coaching-style](../books/03-coaching-style.md), rewritten accordingly.)

## Outcome

Pending. Live path forward: diagnose why the existing dashboard tile and the started-flow experience lose 70% of enrollees — the copy conversation is downstream of that. Feed lessons into [patterns/retirement-enrollment](../patterns/retirement-enrollment.md).
