# Prototypes

Working software built from this knowledge base.

## Communication decision coach (workshop app)

**File:** [`../../communication-coach.html`](../../communication-coach.html) — a single self-contained page, no build step.

A 13-step workshop that walks a designer from request intake to generated copy: assumptions → journey stage → goals → message breakdown → verdicts → placement → hierarchy → strategy → standards check → content. Every recommendation uses the four-part frame (observation, reasoning, recommendation, tradeoffs). The coach is rule-based: it enforces the discipline in `../books/` but cannot hear tone — see `../thinking/future-features.md` for the model-backed idea.

**Single source of truth:** the app contains no rule data of its own. It loads [`../rules.js`](../rules.js) — stage cards, placement defaults, override warnings, component/goal fit, the standards-engine lists, the termbase. Edit rules.js and reload; the app changes. What remains inside the app is logic only: the step flow, the verdict function, the check algorithms, and the card generators that interpolate rule data into coach cards.

To run it: open the file directly, or serve the repo root with any static server (rules.js loads as a plain script either way).
