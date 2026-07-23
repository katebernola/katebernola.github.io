# Propagate the patterns you already have

## The idea

Before designing a new pattern, look for the one already built somewhere else in the product. The strongest recommendation is often "do here what you already do there" — it costs less, it's already been through review, and it teaches users one pattern instead of two.

## Where this came from

The tax registration review (2026-07-22). Two of the biggest gaps had solutions already sitting in adjacent flows:

- The paid-partner choice needed a **side-by-side comparison**. The auto-file service's accept/decline screen already had one — a two-column table, feature by feature.
- The dashboard needed a **multi-step status tracker**. The auto-file setup screen already ended with one: *submit authorization → wait for us to review → run payroll → service active*, with a plain "not active yet" line above it.

Neither needed inventing. Both needed moving.

The mid-period rate change review found the same shape: the payroll grid correctly replaced a completed action with the next one, while the dashboard just cleared it. The right behavior existed on the wrong surface.

## Rules

- Inventory before you invent. If a pattern for this job exists anywhere in the product, start there.
- "Do what that screen already does" is a cheaper recommendation than any new component, and much easier to get through a scope-constrained project.
- If you deliberately diverge from an existing pattern, say why — that's a decision, not a default.
- Two patterns for one job is a tax on every user who meets both.

## Related

→ [audit-existing-cues](audit-existing-cues.md) — the same discipline applied to messages rather than components
→ [state-aware-messaging](state-aware-messaging.md)
