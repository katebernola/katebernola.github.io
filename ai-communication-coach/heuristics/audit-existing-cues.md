# Audit existing cues

## Purpose

Before adding a message, ask the key question: **what cues already exist pointing the user to this?**

## Principles

- A new message never enters a vacuum — it joins a lineup of cues the user has already walked past: a nav item, a document line, an email, a badge.
- Users who filtered out the existing cues will apply the same filter to the new one, unless something is actually different: the moment, the fact, or the friction behind it.
- The request "add a message" is often really the observation "our existing cues aren't working" — which is a diagnosis problem, not a writing problem.

## Rules

- Inventory every existing cue before writing anything. Walk the user's journey looking for them — including the ones the team has stopped seeing.
- For each cue, diagnose: unseen (placement/skip zone), unclear (comprehension), or unconvincing (no deciding fact, or friction behind the click)?
- Fix or remove failing cues before adding new ones. Cue four next to three ignored cues usually buys a fourth ignored cue.

## Decision heuristics

- If cues exist and fail: change the variable that's failing, don't add volume.
- If truly zero cues exist: the user has no path at all — build the permanent home first; a one-time message can point at it.
- "Truly zero" is rare. Check the documents users already read (statements, paystubs) for lines that mention the thing.

## Common mistakes

- Adding a popup on top of a benefits tab, an onboarding packet, and an annual email — and measuring only the popup.
- Auditing only in-product cues and missing paper, email, and human ones (managers, support).

## Examples

- The retirement popup, live: asked "What are we doing today in the application to help people enroll?", the requester answered — "when they log in, the first thing they see on their dashboard is a giant tile that encourages them to sign up for their 401(k)." The proposed login popup would have been a second login-moment cue duplicating a failing first one. One question surfaced it; no finding could have. See `../reviews/retirement-popup-review.md`.

## Counterexamples

- Awaiting one: a case where an added cue succeeded alongside failing ones without changing moment, fact, or friction.

## Exceptions

- Genuinely new things have no existing cues — announcement rules apply instead (see `../books/12-governance.md`).

## Related concepts

→ [Skipped by default](skipped-by-default.md) — why existing cues go unseen
→ [Communication cost](communication-cost.md)
→ [04-decision-framework](../books/04-decision-framework.md) — now part of intake
