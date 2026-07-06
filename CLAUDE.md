# Kate's portfolio — operating instructions

Portfolio site for Kate Bernola (Dobbertin), content designer. Single static HTML pages, no build step.

## Voice and reading level

- Sentence case everywhere. Never title case, never all caps.
- Aim for a 2nd-grade reading level (or easier) wherever possible.
- Tone is light and friendly. Humor is welcome where it fits naturally — don't force it.

## Content discipline

- Keep content to a minimum. Rely on visuals over text wherever possible.
- Don't invent, assume, or extrapolate details that weren't given. If something's missing or ambiguous, ask a clarifying question or suggest concrete options — don't fill the gap yourself.
- Don't change anything that wasn't explicitly requested. Suggestions for other changes or reorganization are welcome, but propose them separately rather than making them.
- If a piece of content isn't earning its place on the page, say so (and why) instead of quietly cutting or rewriting it. Log it in [NEXT_STEPS.md](NEXT_STEPS.md) rather than deciding unilaterally.

## Visual system

- Progressive disclosure is the primary tool for managing cognitive load and page weight. Default to collapsed/expandable sections over long flat pages. Still open to exploring the best grouping and number of examples per section.
- Images use a shared lo-fi look: rounded corners, and any text that isn't the direct point of the image renders as a gray placeholder bar (loading-skeleton style) rather than real words.
- Each image may use exactly one bright, friendly highlight color — think highlighter pens, softened rather than harsh (pink, yellow, cyan, light neon green, violet, orange). Highlight colors must coordinate with each other and with the site's main accent color. Adjust the main accent if a new highlight color needs it to stay coordinated.
- Design should stay clean and out of the way — content and visuals do the work, chrome doesn't compete with them.

## Image style specification

### Strokes and corners
- Stroke weight: 2px for all UI elements (cards, buttons, input fields, boxes).
- Corner radius: 8px for all shapes. Use rounded joins and line caps.
- All shapes are geometric—no hand-drawn wobble or irregularity.
- Input fields: fill with white (#ffffff). Everything else uses paper (#fafaf8).

### Highlight colors (one per image)
Pick exactly one color per image to highlight key elements. Kate will specify which element(s) to highlight when requesting the image; ask if unsure.

- Pink: #f472b6
- Yellow: #fde047
- Cyan: #22d3ee
- Green: #4ade80
- Violet: #d946ef

### Base palette
- Accent: #a21caf (site accent — darker cut of the highlight violet family, WCAG-safe on paper and under white text)
- Ink: #1a1a1a (text, strokes)
- Paper: #fafaf8 (backgrounds)
- White: #ffffff (input fields)
- Skeleton: #e3e0da (placeholder bars)
- Muted: #6b6660 (secondary labels)

### Text rendering
- Render as real words: only what Kate specifies when requesting the image. Ask for clarification if the request is ambiguous about what text should be real.
- Everything else: render as gray placeholder bars. Bar height: 6–8px. Bar width: varies by context. Rounded endpoints (rx=3).

### How to highlight
- Fill the element with the highlight color. Ink (#1a1a1a) text on all highlight colors — every one of the five is too light for white text to meet WCAG 4.5:1 (white lands between 1.9:1 and 3.5:1 depending on the color; ink passes 5:1+ on all of them).
- No additional stroke, shadow, or glow.

## Accessibility

- Pages should meet WCAG standards. Run a full accessibility pass on major additions or "final" versions — not required on every small edit.

## Process

- [NEXT_STEPS.md](NEXT_STEPS.md) is the single prioritized (by impact) list of what's next for this project — content to expound on, visuals needed, weak spots to shore up, reorg ideas. Keep it as one running list, not scattered notes.
