# 12 · Governance

## Purpose

How messages live and die after they ship. Screens fill up one "temporary" note at a time.

## Principles

- Messages without owners and end dates become permanent residents.
- Unowned copy outlives its truth.
- Nothing is new for long.

## Rules

- Every shipped message has an owner: a person or team who keeps it true.
- Every time-bound message has a review date. Time-bound means it contains words like "now", "currently", "at this time", "soon", "new", "beta", "latest".
- Wording that rots on a timer gets a removal plan written at ship time — plan the edit that removes "new".
- A feature earns a "New" badge only when all three are true: high business value in driving adoption, new and outsized user value (not just a better way to do something they already do), and worth interrupting the current workflow. *(source: Polaris new-features pattern)*
- "New" badges expire on whichever comes first: the user clicks the element, 5 days after first seen, or 3 sessions. A pip marks a new item in a list (a notification), never a new feature. *(source: Polaris new-features pattern)*
- One channel per message. If the same news must land twice, stagger it deliberately.
- Tracking lifecycle is bookkeeping nobody enjoys. The alternative is archaeology nobody can do.

## Decision heuristics

- If nobody would notice a message disappearing, it already expired.
- If a message can't name its owner, it can't defend its place.

## Common mistakes

- Setting review dates nobody is assigned to act on.
- See `../mistakes/duplicated-messages.md`.

## Examples

- Upload-error case: the deferred upsell got an owner (growth team) and a review date before the strategy was final.

## Counterexamples

- Awaiting one: a permanent message that genuinely never needed review.

## Exceptions

- Legal copy's lifecycle is owned by legal. Track the owner anyway.

## Related concepts

→ [08-content-standards](08-content-standards.md)
→ [09-decision-library](09-decision-library.md)
