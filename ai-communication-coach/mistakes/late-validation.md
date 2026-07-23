# Late validation

## The mistake

The system knows an action will fail and lets the user do the work anyway. The failure arrives at save — after the effort, at the moment of highest investment.

## Real case

Mid-period rate change (2026-07-19): the product appears to let an admin change a non-default rate mid-period. It accepts every input, then errors out at the end. The constraint was documented in the Help article — the one place the user wasn't looking.

A late failure teaches "this feature doesn't work." That's a support call with extra steps.

## Rules

- If the system can know an action will fail, say so before the user invests — or disable the path with a reason.
- A constraint that lives only in Help documentation is a constraint the user will discover as an error.
- The fix is usually interaction design (disable, hide, gate), not copy. Copy is the fallback when design can't move.

## Related

→ [../heuristics/group-related-decisions.md](../heuristics/group-related-decisions.md)
→ [../books/09-decision-library.md](../books/09-decision-library.md) — verdict vocabulary: "interaction design change"
