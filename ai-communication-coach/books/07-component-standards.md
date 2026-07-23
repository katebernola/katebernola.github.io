# 07 · Component standards

## Purpose

Which component fits which communication job, and the usage rules that keep components honest. Per-component detail lives in `../components/`.

## Principles

- The design system exists so users learn a pattern once. An off-pattern component makes every screen a first screen.
- Pick the component for the goal, not the goal for the component.

## Rules

Component ↔ primary communication goal fit:

| Component | Usually carries |
|---|---|
| Confirmation dialog | confirm, warn |
| Error message | inform, instruct, reassure |
| Feature announcement | inform, persuade |
| Onboarding screen | instruct, inform |
| Empty state | instruct, inform, persuade |
| Form or flow | instruct, inform, warn |
| Settings page | inform, instruct, confirm, warn |
| Notification or email | inform, instruct, persuade, reassure, warn |

A mismatch means the component or the goal is off — decide which, on purpose.

*Canonical data: [`../rules.js`](../rules.js) → `COMPONENT_GOAL_FIT`, `COMPONENT_TYPES`, `CHAR_BUDGETS`.*

Usage rules:

- Tooltips are hover-only: invisible on touch. Never required reading. Never errors. *(source: Polaris tooltip)*
- Modals demand full attention: one dialog, one job, two buttons max, obvious dismiss, focus trap. *(source: Polaris modal)*
- Progressive disclosure controls need a visible affordance and keyboard support.
- Banners broadcast to everyone: only for things true for everyone. Never marketing or upsells — that's a callout card's job. *(source: Polaris banner)*
- Toasts confirm outcomes in ~3 words (noun + verb: "Product updated"); critical or persistent errors escalate to a banner. *(source: Polaris toast)*
- Severity ladder for feedback surfaces: toast (minor, transient) → inline (at the point of action) → banner (page-level, persistent) → modal (blocking, consequence-bearing). Match the surface to the severity, not to the desired attention.
- Feedback lifecycle: a progress indicator says "request received"; a toast says the outcome; a validation error says what prevented success and how to fix it. Feedback is informative, not decorative. *(source: Polaris interaction states)*
- Never style an interactive element as disabled — "unavailable" styling on something usable teaches users to ignore real unavailability. *(source: Polaris common actions pattern)*
- At most two filled/shaped buttons per card — more degrades hierarchy. *(source: Polaris common actions pattern)*
- Title + button tell one cohesive story on their own — never rely on the body to connect them. Different verbs are often helpful (the button adds unique information). Destructive confirmations are the exception: mirror the words. See [Title plus button](../heuristics/title-plus-button.md).
- Defaulted or recommended options carry a legally defensible label ("most common", "cheapest") and show the real charge. See [Indefensible defaults](../mistakes/indefensible-defaults.md).

## Decision heuristics

- If the same information could live in a quieter component, it probably should.
- If a component keeps needing more copy than it was designed for, the problem is upstream of the copy.

## Common mistakes

- Reaching for a modal because the message feels important. Importance is the user's judgment, not ours.

## Examples

- Upload error: error pattern + reassure goal = fit confirmed by the standards engine.

## Counterexamples

- Awaiting a real case of a deliberate, successful component/goal mismatch.

## Exceptions

- Domain components (tasks, dashboards) have their own files in `../components/` with rules still being learned.

## Related concepts

→ [06-placement-rules](06-placement-rules.md)
→ [08-content-standards](08-content-standards.md)
→ [../components/banner.md](../components/banner.md) and siblings
