# 13 · Pattern library

## Purpose

How patterns work: reusable solved problems with their reasoning attached. The patterns themselves live in `../patterns/`.

## Principles

- A pattern is a case study the coach can reason from — not a template to paste.
- The lessons section is the payload. The rest is provenance.
- Never invent a pattern. A pattern without a real case behind it is fiction with authority.

## Rules

Every pattern file uses this structure:

```markdown
# <Name>

## Initial request
## What stakeholders thought
## Actual user goal
## Actual business goal
## Communication strategy
## Why
## Lessons learned
```

Every book (this folder) and heuristic uses this structure:

```markdown
## Purpose
## Principles
## Rules
## Decision heuristics
## Common mistakes
## Examples
## Counterexamples
## Exceptions
## Related concepts
```

Same format, every file. That makes it easier for both the designer and the coach.

## Decision heuristics

- **A pattern's lesson attaches to a journey position, not a topic.** Check where in the journey the lesson was learned before applying it. "Cut eligibility copy" was learned on an enrollment landing page — where eligibility is implied by arrival. It does not transfer to the upstream message whose whole job is introducing eligibility. Same topic, different position, opposite verdict.
- When a new request smells familiar, check `../patterns/` before reasoning from scratch.
- When a review keeps finding the same failure, it graduates to `../mistakes/`.
- When a pattern's lesson generalizes past its case, it graduates to a heuristic or a book.

## Common mistakes

- Writing the pattern before the outcome is known. Wait for the lesson.

## Examples

- `../patterns/retirement-enrollment.md` — the reference pattern.

## Counterexamples

- Awaiting one: a pattern that failed to transfer to a similar case.

## Exceptions

- Pattern stubs may exist before their case completes, clearly marked "awaiting the real case."

## Related concepts

→ [../patterns/retirement-enrollment.md](../patterns/retirement-enrollment.md)
→ [../mistakes/](../mistakes/duplicated-messages.md)
→ [09-decision-library](09-decision-library.md)
