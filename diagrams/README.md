# Diagrams — index

Portfolio artifacts for the AI Content Design Coach. Built as standalone SVGs so they can be dropped inline into the portfolio pages (they match the house convention already used in `index.html`: `viewBox`, `role="img"`, a full `aria-label`, and the system font stack).

| File | What it is |
|---|---|
| `agent-flow.svg` | **The workflow.** Kickoff → discovery → brief → strategy → [content inventory · content audit · gap analysis] → content needs → [plan A · plan B] → P.O. picks a plan → content design → UI plan → design execution → P.O. decides what ships → design file → review → [risks · knowledge base updates]. Usability testing and post-launch monitoring sit alongside as small boxes off the line. Footnotes sit in a bordered box, lower left. **Current.** |
| `agent-ia-map.svg` | **The organized knowledge.** The knowledge architecture — the canon, the rules applied, applied knowledge, and rules.js as the single source of truth. This is the "we cleaned up the mess" artifact. **Not yet consistent with the flow** — it uses three stroke colours, purple for cluster headings, and a line-tree rather than the typed shapes. Needs the same style pass the flow just had before the two ship together. |
| `decision-coach-ooux.md` | **The OOUX pass.** Object inventory with attributes, relationships and cardinality; the processes (verbs) separated from the objects (nouns); the findings that drove the typed visual language. |

Seven superseded iterations were deleted on 2026-07-22 (`agent-model-v1` through `v4`, `agent-pipeline`, `agent-reasoning-map`, `agent-workflow`). The OOUX reasoning they explored survives in `decision-coach-ooux.md`.

## How the flow is drawn

- **Object types get different shapes.** Collaborative process (bot + person) = rounded box with a conversation icon. Single-actor process = rounded box with a person icon (designer only) or a bot icon (bot only). Document = letter-shaped page with a folded corner. Decision = diamond. Kickoff = ellipse.
- **Icons come from `/Icons`**, embedded as `<symbol>` definitions and placed with `<use>`. Conversation marks the three collaborative steps; person marks kickoff and design execution; robot marks review; books, cycle, rocket and edit mark the four footnotes. Optical sizes are tuned rather than nominal — each glyph fills its 24-unit box differently, so the placements are sized to land at roughly 18px for collaborative steps, 15–17px for single-actor steps and 12–14px for footnotes, preserving the hierarchy.
- **Optional usability testing carries no icon.** It isn't an actor-owned step, and labelling it "optional" says more than a person glyph did.
- **Visual hierarchy**, most to least prominent: collaborative processes → documents (bot output) → single-actor processes → decisions → kickoff. Carried by size and label weight, not by stroke.
- **One stroke colour** — `#64748b` — on every shape, connector and frame. Shapes and the frame are `1`; connectors and arrowheads are `1.5`. This matches the house diagram convention in `index.html`. No colour anywhere: per `CLAUDE.md`, diagrams are neutral only, so collaborative steps are marked by the conversation icon alone (they previously carried the portfolio purple `#6B4C9A`).
- **Corner radius is `4`** on every rounded shape, per the `CLAUDE.md` limit of 0–4px for cards.
- **Every document is the same size**, 130 × 168, a letter-paper ratio, with a centred title and left-aligned bulleted body.
- **Sets of documents are offset sheets**, not containers, with exactly one arrow in and one out. Stacked sets sit up and to the right so every title stays readable. The two plans sit side by side instead, overlapping by under 5% at different heights — they have to be read against each other to see the tradeoff.
- **Activities that aren't steps the bot performs** (usability testing, post-launch monitoring) are small boxes placed near the flow but never touching the line.
- **The knowledge base is deliberately underdrawn.** It's referenced at every step, so only the write-back is drawn — that's the only thing that changes it. Its contents aren't listed, because `agent-ia-map.svg` already does that. It's shown as a small stack of sheets rather than letter-sized pages, because it's a collection, not a document.
- **Connectors are curved**, and where a process sits between two things the curve runs through it, with the arrowhead landing on the next thing.
- **The path snakes**: down, right ×3, down, left ×2, down, right ×3, down, left.

## Open

- The knowledge base still needs adding to the flow.
- The rocket icon sits on "the requester can return to any stage" because that is where the old rocket-shaped glyph was. A rocket reads as *launch*, so it may belong on "monitored post-launch" instead.
- Collaborative steps are marked by the conversation icon alone, with no legend explaining it. A highlight treatment and a legend are both still open.
- Screenshot verification remains impossible — the Browser pane must be displayed for the page to composite frames. Everything is verified geometrically (stroke consistency, document sizing, title clearance, nothing clipped) but has not been seen.
