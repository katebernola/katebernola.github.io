# Tooltip

## What it is

A floating label that briefly explains the function of a UI element. Activates on hover, focus, or tap — hover-only in practice on desktop, invisible without a label on touch.

## Primary objective

Supplementary context only — succinctly describe or expand on the element it points to. Never the primary communication method for anything essential. *(source: Polaris tooltip)*

## Use it for

- Labels for icon-only buttons, or buttons with keyboard shortcuts. *(source: Polaris tooltip)*
- Optional definitions for the curious.

## Don't use it for

- Critical information, error messages, or anything requiring immediate action. *(source: Polaris tooltip)*
- Anything that must be read to act — a tooltip hides the message behind a hover most users never make.
- Interactive elements (links or buttons) inside the tooltip. *(source: Polaris tooltip)*
- Information that should be persistently visible.

## Copy rules

- Sentence case, concise, scannable. One fragment or one short sentence. *(source: Polaris tooltip)*
- Character budget: **80** (canonical: [`../rules.js`](../rules.js) → `CHAR_BUDGETS.tooltip`).
- If it needs a second sentence, it needs a different component.
- Never put the only instance of information in a tooltip.

## The meta-rule

Excessive tooltips indicate design clarity issues. *(source: Polaris tooltip)* If the interface needs many tooltips to be understood, fix the interface — the copy is narrating a design problem.

## Related

→ [06-placement-rules](../books/06-placement-rules.md) — override warnings
→ [Progressive disclosure](../heuristics/progressive-disclosure.md)
→ [15-icons-and-imagery](../books/15-icons-and-imagery.md) — icon labels

## Sources

- Polaris tooltip: https://polaris-react.shopify.com/components/overlays/tooltip
