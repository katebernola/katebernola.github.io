# 08 · Content standards

## Purpose

The checks every surviving message passes through before copy is final. Implemented as the standards engine (workshop step 12): 31 automatic checks in five categories, each result pass / review / fix.

## Principles

- Automated checks catch pattern-level problems. They cannot catch a wrong message — the framework steps are for that.
- "Fix" is a defect. "Review" is a judgment call the engine refuses to make for a human.
- A green checklist proves consistency, not correctness.
- Our thresholds sit inside the public consensus: Polaris targets a 7th-grade reading level, GOV.UK a reading age of ~9, our engine flags above grade 9. Same band, independently arrived at. *(sources: Polaris fundamentals; GOV.UK content design)*

## Rules

**Writing** — sentence case; plain language (everyday word beats fancy word); reading level (aim grade 8 or below); voice ("you" outweighs "we"); tone matched to stage (no playfulness at tense moments); inclusivity (banned terms have replacements — see `../terminology/banned-terms.md`); accessibility (no "click here", no color-only meaning, no hover-only assumptions); clarity (name the cause — the specific problem is its own announcement; no hedges inside instructions; an "or" joining actions in a long message marks two messages); redundancy (no "successfully", no "please note", no near-duplicate messages); active voice; scannability (twelve words or fewer scans in one pass).

**Design system** — correct component for the goal; placement crowding; one lead message; the top slot holds a need-to-act message; disclosure and modal pattern requirements.

**Product language** — approved terminology (see `../terminology/approved-terms.md`); one name per concept; reuse the standard phrase library; product names confirmed against branding.

**Communication** — temporary vs permanent wording; at most about three messages per screen; no channel duplication; wording that rots ("new", "beta") gets a removal plan; every message has an owner; time-bound messages have a review date.

**Technical** — character budgets per placement (inline 120, helper 160, modal 240, tooltip 80, banner 100 — canonical: [`../rules.js`](../rules.js) → `CHAR_BUDGETS`; these numbers are internal placeholders, not sourced — public systems publish only loose limits like toast ≈ 3 words and banner ≤ 1–2 sentences, so swap in the internal system's real specs on access); key fact in the first 40 characters (truncation hits the end); localization headroom of 50% — translated text runs up to 50% longer on average and short labels can expand 300% *(source: Polaris internationalization)*; no idioms; works at 320px wide.

Localization structure rules *(source: Polaris internationalization)*: never build a sentence out of UI components or concatenated strings — word order changes in translation and breaks them; links are a single descriptive term, never a full phrase; assume the word order of every sentence will change.

*Canonical data for the word lists and thresholds: [`../rules.js`](../rules.js) → `COMPLEX_WORDS`, `INCLUSIVE_TERMS`, `A11Y_FLAGS`, `VAGUE_PHRASES`, `TIME_BOUND`, `LIFECYCLE_WORDS`, `IDIOMS`, `TERM_RULES`, `NAMING_PAIRS`, `PHRASE_VARIANTS`.*

## Decision heuristics

- Clear the fixes first; then walk the reviews one by one.
- Close to a character limit in English means over it in German.

## Common mistakes

- Treating a review flag as an order. It is a question.

## Examples

- `../reviews/upload-error-review.md` — a full engine run: 19/11/1 before edits, 24/7/0 after.

## Counterexamples

- Awaiting a case where breaking a writing standard on purpose was the right call — log it here when it happens.

## Exceptions

- Legal copy may fail plain-language checks by necessity. Contain it; don't let it set the tone of the screen.

## Related concepts

→ [04-decision-framework](04-decision-framework.md)
→ [../terminology/approved-terms.md](../terminology/approved-terms.md)
→ [12-governance](12-governance.md)
