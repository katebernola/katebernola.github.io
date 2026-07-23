# 04 · Decision framework

## Purpose

The decision process a request moves through before copy exists.

Two prototypes implement it: **v2 (`communication-coach-chat.html`) is a conversation** — the coach asks, listens, fills the brief visibly beside the chat, and shows its reasoning for every inference ("My guess is Payroll — 'pay rate' sounds like Payroll"). The 13 steps below are the skeleton under the conversation, not screens the user walks through. v1 (`communication-coach.html`) is the earlier form-based workshop, kept as the iteration story. Decision and reasons: [09-decision-library](09-decision-library.md), "the coach is a conversation, not a form."

## Principles

- Order matters: context before goals, goals before messages, messages before placement, everything before words.
- Each step produces a decision the next step depends on. Skipping a step means borrowing a guess.

## Rules

### The end-to-end workflow

The whole path a request travels, typed by what each piece *is*. Diagram: `../../diagrams/agent-flow.svg`.

Five kinds of thing, and they look different from each other on purpose:

- **Thing** — a starting point. Kickoff.
- **Process, collaborative** — the bot and the person work it together, back and forth.
- **Process, single actor** — one party works alone. Either designer-only (design execution) or bot-only (review).
- **Decision** — the product owner chooses.
- **Document** — an artifact that comes out and can be handed on. All of them are the bot's output.

Visual prominence runs in this order, most to least: collaborative processes, then documents, then single-actor processes, then decisions, then kickoff. The work the bot and the person do *together* is the point of the system, so it reads loudest.

The flow:

1. **Kickoff** — the request arrives.
2. **Discovery** (collaborative) → produces the **brief**: overview, objective, persona, workflow, usage data.
3. **Strategy** (collaborative) → produces three documents, in this order: a **content inventory** (what exists, counted), a **content audit** (how good it is, judged), and a **gap analysis** (what's missing). Inventory comes before audit — you can't assess what you haven't listed. Those three combine into one **content needs** document. Content needs then yields two documents: **plan A**, which mitigates UX risks but may add scope, and **plan B**, which holds scope and carries the risk instead.

   These are named after real content-strategy deliverables on purpose. A reader who knows the discipline recognizes them, and that recognition is worth more than a tidier invented name.
4. **P.O. picks a plan.**
5. **Content design** (collaborative) → produces the **UI plan**: component, copy, confidence, risks.
6. **Design execution** (designer-only), with **usability testing** alongside — *before* the decision, not after. Drawn as its own small box off the line, because it's a real activity but not a step the bot performs.
7. **P.O. decides what ships.** Not "approval": the product owner decides what actually gets built, and may set UX aside entirely. Naming it honestly is better than pretending it's a rubber stamp.
8. **Design file** — the designer submits the final design. It sits *after* the ship decision and *before* review, because it is the thing being reviewed. The bot can't infer this handoff, so it has to be drawn: without it, review has nothing to review.
9. **Review** (bot-only) — the flow ends here, by sending two documents to two different audiences:
   - **Risks** → to the designer, who logs them in Jira.
   - **Knowledge base updates** → to the content design team, who review and approve.

   The work is then **monitored post-launch**, drawn as a small box off the line.

### The knowledge base in the flow

Referenced at every step, so drawing an arrow from each one would bury the flow. Its contents aren't listed here either — that's the knowledge-architecture diagram's job (`../../diagrams/agent-ia-map.svg`).

So the knowledge base isn't drawn as an object at all. What matters is visible in the ending instead: **the bot proposes updates, it does not make them.** The updates leave as a document addressed to the content design team, who review and approve. A bot that edited its own standards unsupervised would compound its own mistakes, so the human gate is the point — and showing it as a *sent document* rather than a write-arrow makes the handoff, and the approval, unmissable.

Two plans, not one, because a constraint that fights the real fix should be visible rather than silently obeyed. The product owner decides with both in front of them. See [09-decision-library](09-decision-library.md), "bad requirements get an alternate plan."

**The whole process is iterative.** The requester can re-enter at any step, say what changed, and the bot updates the artifacts already made rather than starting over. This is constant enough that drawing a feedback arrow from every step would bury the flow — so it's stated as a property of the whole system instead of drawn as edges.

The plans are called **plan A** and **plan B**, shown in that order, each carrying a line that states its tradeoff. Write them as two separate names — never as the mashed-together "A/B", which is the string that reads as an A/B test. See [09-decision-library](09-decision-library.md), "two plans, decided by the product owner," v3.

The conversation-level detail below sits *inside* the collaborative processes. It is how discovery and strategy actually run, not a separate path.

### Intake

Intake forks on role. UX has a small set of predefined roles — designer, researcher, lead. Everyone else takes the outside path. The two paths exist because the requesters know different things:

**Inside UX** — they know the whole workflow, can share the surrounding screens, and hold a user-focused vantage point. So the coach lets them talk first, then fills in quietly:

1. Open-ended: "What are you working on?" then "What problem are you trying to solve?"
2. The coach reads **every free-text answer** and pre-fills what it can — product, audience categories, what the project includes, project type, other channels. Filled values appear in the summary for correction; follow-up questions collect only the rest (canonical: `rules.js → INFERENCE`).
3. The details collected: user need · audience categories, all that apply, with "none of the above" (employee, admin, accountant, financial advisor — the last two don't work for the company directly) · audience specifics ("direct employees only; includes volunteers; excludes contractors") · product (Payroll, Time, Retirement, Analytics, AI, Platform — more later) · project type (one-time message, update to existing UI, new UI, non-UI change — **MVP covers one-time messages and updates to existing UI**; new UI stays listed so reviewers see it was considered, and selecting it explains the scope instead of proceeding).
4. **Today and future, stepped out.** The user's experience today as steps (step 1 pre-filled "User signs in," step 2 "User goes to <product>"; screenshot upload welcome), then the future: same steps shown, edit what differs — or "nothing changes, message only." If the steps differ, change management messaging is added automatically. This replaced an abstract question ("if they try to do this the same way, will they succeed?") that confused a real tester — steps are concrete; a diff is a fact.
5. **Impact scoping:** "How many clients do we know for sure are impacted?" — asked for one-time messages and any change.
6. **What the project includes**, all that apply, each with its routing: information display screen → collect all content, decide priority in the workshop · workflow → the today/future steps above · notification (meaning *the need to get someone's attention or share information* — not any specific component; covers system notifications, pop-ups, dashboard content, wordless indicators, messaging persistent beyond the workflow) → the workshop decides if, when, and where · change management and feature awareness messaging → standard workflow for now, dedicated flows are future work · another company · selling opportunity (upsell, cross-sell, partner offering, PLG) · a new user · company setup.
7. **The goal, split in two:** "Do you want the user to do something, or know something?" then "What should they do?" / "What should they know — and why?" (Replaced "what are you trying to achieve," which read as too abstract.)
8. **"How else are we communicating this?"** — one question (email, rep outreach, in-product, marketing site, social, nothing else), pre-filled from their description. Replaced three that confused a real tester: existing cues, campaign yes/no, and channels.
9. Then "What will the user see or click?" (the draft, in human terms — or the content list stands in), and the request's origin (including "technical upkeep or maintenance" — a real trigger the list was missing).

**Outside UX** — a small form, in plain language, and **never a draft**. The ask isn't copy; it's an outcome. The coach collects: product, target audience, goal, how they'll measure success — and then states its measurement assumptions out loud (campaigns link out of the system, so the furthest we can track is the click that leaves; inside the platform we can count chatbot visits, Help Center visits, workflow completions, stage progression) and gets agreement on in-system measures. Stated assumptions mean a wrong assumption gets challenged instead of the response.

**Both paths** — the existing-cues question, and the campaign question: is this part of a broader push, and where else does the message land (email, rep outreach, marketing-site campaign)? A message that rides a campaign needs a job the other channels can't do.

The steps, in order:

1. **Request intake** — role first (it picks the path), then the path's questions above (see [Audit existing cues](../heuristics/audit-existing-cues.md)).
2. **Assumption review** — surface the beliefs hiding in the intake; the designer responds to each.
3. **Journey stage** — where the user is (see `05-user-journeys.md`).
4. **User goals** — what the user wants right now, in their words. Fewer is better.
5. **Business goals** — stated honestly; hidden ones leak into copy sideways.
6. **Communication goals** — one primary, one optional secondary: inform, instruct, reassure, confirm, warn, persuade.
7. **Break messages apart** — split the draft into atomic messages.
8. **Evaluate each message** — two questions → verdict: keep / support / defer / cut.
9. **Placement** — where each surviving message lives (see `06-placement-rules.md`).
10. **Visual hierarchy** — reading order and treatment (see `../heuristics/visual-hierarchy.md`).
11. **Communication strategy** — everything compiled into one reviewable document.
12. **Standards check** — the content standards engine runs (see `08-content-standards.md`).
13. **Generate content** — now, and only now, the words.

## Decision heuristics

- If you need three communication goals, you have two messages pretending to be one.
- If everything gets cut at step 8, the honest answer may be that this moment needs no copy.
- **You can't judge a fork without seeing both branches.** If a screen offers a choice, the workflow isn't captured until every path is captured through to its end state. Reasoning about a two-option screen from that screen alone produced two wrong conclusions in the tax registration review: the option labels implied "we do it" vs. "you do it" when both led to instructions, and the strongest argument for the paid path turned out to be sitting on the page you only reach by declining it. Ask for the whole workflow, both branches, every time.

## Common mistakes

- Starting at step 13. That is what the framework exists to prevent.
- Treating step 11's strategy as paperwork instead of the review artifact.

## Examples

- Full walkthrough: `../reviews/upload-error-review.md`.

## Counterexamples

- Awaiting a case where skipping steps produced a durable result.

## Exceptions

- Tiny changes to existing, already-strategized copy can enter at step 12 (standards check) — the strategy already exists.

## Related concepts

→ [05-user-journeys](05-user-journeys.md)
→ [06-placement-rules](06-placement-rules.md)
→ [08-content-standards](08-content-standards.md)
→ [10-review-process](10-review-process.md)
→ [16-escalation](16-escalation.md) — when to stop coaching and hand off
