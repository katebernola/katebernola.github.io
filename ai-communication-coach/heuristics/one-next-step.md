# One next step

## Purpose

Always identify the one best next step, and point the user to it.

## Principles

- A user mid-problem doesn't want a menu; they want a way out. Providing too many options fuels the fire of frustration.
- The next step must be viable and complete. "Try again" only works when retrying without changes can actually succeed — otherwise the real step is "change the thing, then try again."

## Rules

- Every error and every blocked state names exactly one recommended next step.
- The step must fully resolve or fully advance. A step that fails again is worse than no step.
- Alternates, if they must exist, go behind disclosure or a step away — never as a peer of the recommended step.

## Decision heuristics

- An "or" between actions usually marks two messages — or one recommendation that hasn't been made yet.
- If you can't name the best next step, you don't understand the problem well enough to write the copy.
- Only explain a problem the user actually has. If the cause you'd cite isn't their cause, cut it.

## Common mistakes

- "You can try again, or check out…" — two paths offered because nobody chose one. See `../mistakes/too-many-options.md`.
- A next step that restates the error instead of resolving it.

## Examples

- Upload error, after human review: "Reduce the file size and try again." One step, viable, complete. See `../examples/before-after/upload-error.md`.

## Counterexamples

- Awaiting one: a case where offering two equal paths genuinely served the user.

## Exceptions

- Genuine forks (e.g., "restore the backup or start fresh") where the user holds information the product doesn't. Even then: recommend a default.

## Related concepts

→ [Too many options](../mistakes/too-many-options.md)
→ [02-principles](../books/02-principles.md)
→ [Defaults beat explanations](../beliefs/defaults-beat-explanations.md)
