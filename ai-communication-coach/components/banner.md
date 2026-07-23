# Banner

## What it is

A strip at the top of a page or section. Broadcasts to everyone who lands there.

## Primary objective

Inform users about important changes or persistent conditions that need prominent communication — general information or actions that aren't critical. *(source: Polaris banner)*

## Use it for

- Things true for everyone on the screen: outages, deadlines, system-wide states.
- Page-level news at the top of the page; section-level news inside that section — context placement matters. *(source: Polaris banner)*

## Don't use it for

- **Marketing or upsells — ever.** Polaris is explicit: use a callout card instead. *(source: Polaris banner; matches our [upsell/error separation](../books/09-decision-library.md))*
- Anything need-to-act: banners are a [skip-by-default element](../heuristics/skipped-by-default.md) — users are trained by every unnecessary banner to ignore the necessary one.
- The primary entry point for regular information or actions. *(source: Polaris banner)*
- A design band-aid for an unclear UI workflow. *(source: Polaris banner)*
- Support information — broadcasting what should be whispered.

## Copy rules

- One theme per banner. 1–2 sentences maximum. *(source: Polaris banner)*
- Critical information first. *(source: Polaris banner)*
- Buttons lead with action verbs ("Activate Apple Pay", not "Try Apple Pay"). *(source: Polaris banner)*
- Character budget: **100** (canonical: [`../rules.js`](../rules.js) → `CHAR_BUDGETS.banner`). Write 50% under it for localization headroom (~66 in English) — translated text runs up to 50% longer. *(source: Polaris internationalization)*
- The key fact goes in the first 40 characters — truncation eats the end.
- Sentence case. No exclamation marks.
- Non-critical banners are always dismissible; only critical content may resist dismissal. *(source: Polaris banner)*
- Use the default status icons (success, info, warning, critical); icon + color communicate severity together, never color alone. *(sources: Polaris banner; Polaris error messages)*
- Time-bound banners need an owner and a review date before shipping. See [12-governance](../books/12-governance.md).

## Related

→ [06-placement-rules](../books/06-placement-rules.md)
→ [15-icons-and-imagery](../books/15-icons-and-imagery.md)
→ [12-governance](../books/12-governance.md)

## Sources

- Polaris banner: https://polaris-react.shopify.com/components/feedback-indicators/banner
