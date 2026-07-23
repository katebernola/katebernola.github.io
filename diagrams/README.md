# Diagrams — index

Portfolio artifacts for the AI Content Design Coach. Built as standalone SVGs so they can be dropped inline into the portfolio pages (they match the house convention already used in `index.html`: `viewBox`, `role="img"`, a full `aria-label`, and the system font stack).

| File | What it is |
|---|---|
| `agent-flow.svg` | **The workflow.** Kickoff → discovery → brief → strategy → [content inventory · content audit · gap analysis] → content needs → [plan A · plan B] → P.O. picks a plan → content design → UI plan → design execution → P.O. decides what ships → design file → review → [risks · knowledge base updates]. Usability testing and post-launch monitoring sit alongside as small boxes off the line. Footnotes sit in a bordered box, lower left. **Current.** |
| `agent-ia-map.svg` | **The organized knowledge.** The knowledge architecture — the canon, the rules applied, applied knowledge, and rules.js as the single source of truth. This is the "we cleaned up the mess" artifact. **Not yet consistent with the flow** — it uses three stroke colours, purple for cluster headings (which now means "bot and person together"), and a line-tree rather than the typed shapes. Needs a pass before the two ship together. |
| `decision-coach-ooux.md` | **The OOUX pass.** Object inventory with attributes, relationships and cardinality; the processes (verbs) separated from the objects (nouns); the findings that drove the typed visual language. |

Seven superseded iterations were deleted on 2026-07-22 (`agent-model-v1` through `v4`, `agent-pipeline`, `agent-reasoning-map`, `agent-workflow`). The OOUX reasoning they explored survives in `decision-coach-ooux.md`.

## How the flow is drawn

- **Object types get different shapes.** Collaborative process (bot + person) = rounded box with two speech bubbles. Single-actor process = rounded box with a person icon (designer only) or a bot icon (bot only). Document = letter-shaped page with a folded corner. Decision = diamond. Kickoff = ellipse.
- **Visual hierarchy**, most to least prominent: collaborative processes → documents (bot output) → single-actor processes → decisions → kickoff. Carried by size and label weight, not by stroke.
- **One stroke** — `#64748b` at `1.5` — on every shape, connector and frame. The only exception is the conversation icon on collaborative processes, which carries the portfolio purple `#6B4C9A` to mark where the bot and the person work together.
- **Every document is the same size**, 130 × 168, a letter-paper ratio, with a centred title and left-aligned bulleted body.
- **Sets of documents are offset sheets**, not containers, with exactly one arrow in and one out. Stacked sets sit up and to the right so every title stays readable. The two plans sit side by side instead, overlapping by under 5% at different heights — they have to be read against each other to see the tradeoff.
- **Activities that aren't steps the bot performs** (usability testing, post-launch monitoring) are small boxes placed near the flow but never touching the line.
- **The knowledge base is deliberately underdrawn.** It's referenced at every step, so only the write-back is drawn — that's the only thing that changes it. Its contents aren't listed, because `agent-ia-map.svg` already does that. It's shown as a small stack of sheets rather than letter-sized pages, because it's a collection, not a document.
- **Connectors are curved**, and where a process sits between two things the curve runs through it, with the arrowhead landing on the next thing.
- **The path snakes**: down, right ×3, down, left ×2, down, right ×3, down, left.

## Open

- The knowledge base still needs adding to the flow.
- Icons are placeholders and can be swapped for real ones.
- Screenshot verification remains impossible — the Browser pane must be displayed for the page to composite frames. Everything is verified geometrically (stroke consistency, document sizing, title clearance, nothing clipped) but has not been seen.
