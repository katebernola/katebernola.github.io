# 15 · Icons and imagery

## Purpose

Icons and images communicate — same as the button, same as the copy. They enter the same message pipeline: each one is a message that must earn its place.

## Principles

- An icon's job is to convey information concisely and aid recognition — not to decorate. Keep icons simple and immediately recognizable; extra detail obscures meaning. *(source: Polaris icons)*
- Use widely recognized symbols and metaphors; avoid culturally specific references. Never reinterpret a universal icon — a magnifying glass that doesn't mean search breaks trust in every icon. *(sources: Polaris icons; Atlassian iconography)*
- Illustrations convey complex ideas simply — they work with the message, not instead of it. *(source: Atlassian illustrations)*
- Color and icon communicate severity together, never color alone — color-only meaning excludes color-blind users. *(sources: Polaris error messages; Polaris alternative text)*

## Rules

Icon usage:

- Icons stay consistent in style across the interface so users learn the system once. *(sources: Polaris icons; Atlassian iconography)*
- **Every icon has one defined purpose** — the full vocabulary lives in [../components/icons.md](../components/icons.md) (437 icons with their stated uses). Check before use; assign a meaning once and keep it everywhere. *(source: Polaris icon library metadata)*
- Common actions (edit, delete, search, copy) have universal icons that need no label; every ambiguous icon gets one. Redundant icons are clutter. *(source: Polaris using icons)*
- Icons sit left of the label; with a multi-word label, the icon represents the verb. *(source: Polaris common actions pattern)*
- Severity conventions: alert circle = warning; alert diamond = critical; red for critical, yellow for warnings that could escalate. Always pair with a text label. *(sources: Polaris error messages; Polaris icon metadata)*
- Color meaning is cultural, not universal — red means failure in North America and prosperity in China. Never let color carry meaning alone, and prefer universal metaphors in global products. *(source: Polaris internationalization)*
- Don't name icons in copy ("select the gear icon") — state the action or the element's label. *(source: Intuit word list)*

Alternative text:

- Every image gets an alt attribute. Decorative images get an empty one (`alt=""`) so screen readers skip them. *(source: Polaris alternative text)*
- Interactive icons: describe the action, not the picture — "search," not "magnifying glass." *(source: Polaris alternative text)*
- Alt text is concise, no "image of," no articles, no emoji. The same image needs different alt text in different contexts. *(source: Polaris alternative text)*

Illustrations:

- Spot illustrations: empty states, error states, celebrating big wins. One concept per illustration. *(source: Atlassian illustrations)*
- Low-fidelity UI (gray shapes, not screenshots): onboarding, feature tours, explaining workflows — real screenshots create screen-within-screen confusion. *(source: Atlassian illustrations)*
- Ambient patterns: background texture for promotional areas only. Collage-style decoration belongs on marketing pages, not in product. *(source: Atlassian illustrations)*

## Decision heuristics

- Run visuals through the message verdicts: does the user need this image to act? Is it support, or decoration? Decoration in a task flow is a cut.
- Multiple illustrations on one screen create cognitive load — consider an icon, or just copy. *(source: Atlassian illustrations)*
- If the icon needs a tooltip to be understood, the icon isn't working — or it needs a visible label.

## Common mistakes

- Icon-only buttons without accessible labels.
- A celebratory illustration next to bad news.
- Decorating an error state until it stops looking like one.

## Examples

- Awaiting the first real case from a project.

## Counterexamples

- Awaiting one.

## Exceptions

- Brand moments (first-run, major wins) may lean decorative on purpose — a deliberate, recorded choice.

## Related concepts

→ [Cognitive load](../heuristics/cognitive-load.md) — the button communicates; so does the icon
→ [08-content-standards](08-content-standards.md) — accessibility checks
→ [15 pairs with each component file in ../components/](../components/banner.md)

## Sources

- Polaris icons: https://polaris-react.shopify.com/design/icons
- Polaris alternative text: https://polaris-react.shopify.com/content/alternative-text
- Polaris error messages: https://polaris-react.shopify.com/content/error-messages
- Atlassian iconography: https://atlassian.design/foundations/iconography
- Atlassian illustrations: https://atlassian.design/foundations/illustrations
