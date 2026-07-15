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

Minimal, modern design inspired by Stripe, Linear, and Intercom. Generous whitespace, strong typographic rhythm, no ornamentation.

### Spacing scale
- 4px, 8px, 16px, 24px, 32px (all spacing and padding uses this scale)

### Grid
- 12-column grid at max-width 960px

### Color palette
- White: #ffffff
- Slate: #f8f9fa (light backgrounds), #475569 (medium/muted text), #1e293b (dark text)
- Diagram strokes and arrows: #64748b (passes 3:1 non-text contrast on #f8f9fa; too light for text on gray backgrounds — never use it for text)
- Decorative borders: #e2e8f0 (exempt from contrast rules; never load-bearing)
- Black: #000000
- Case study accent: #6B4C9A purple, used only for case-study tags, badges, subheads, and outline boxes (passes 4.5:1 text contrast on white at 6.72:1)
- No other color accents; use neutral grays and black for hierarchy and emphasis

### Typography
- Font: Inter or IBM Plex Sans (fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif)
- H1: 48px, weight 700, line-height 1.2
- H2: 32px, weight 700, line-height 1.3
- H3: 24px, weight 600, line-height 1.3
- Subhead: 20px, weight 600, accent purple, line-height 1.3 — labels a sub-section inside a case study (e.g. "The math", "Results"). Sits below H3. Sentence case, never uppercase.
- Body: 18px, weight 400, line-height 1.6
- Small: 16px, weight 400, line-height 1.5

A subhead must never render smaller than the body text it introduces — that inverts the hierarchy and reads like a caption. No uppercase or all-caps eyebrow labels anywhere; distinguish a label by size, weight, and color instead.

### Visual constraints
- No gradients
- No drop shadows
- No rounded corners above 8px (use 0–4px for cards and inputs, or none)
- Strokes: 1px, neutral gray (#e2e8f0)
- Whitespace is the primary design tool

### Diagrams and images
- Use only: clean lines, minimal shapes, neutral colors (black, gray, white)
- No illustrations, highlights, or decorative elements
- If showing workflow/process, use simple boxes, lines, and labels only

## Accessibility

- Pages should meet WCAG standards. Run a full accessibility pass on major additions or "final" versions — not required on every small edit.

## Process

- [NEXT_STEPS.md](NEXT_STEPS.md) is the single prioritized (by impact) list of what's next for this project — content to expound on, visuals needed, weak spots to shore up, reorg ideas. Keep it as one running list, not scattered notes.
