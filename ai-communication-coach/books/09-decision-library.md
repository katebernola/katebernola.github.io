# 09 · Decision library

## Purpose

Versioned decisions about how this system itself works. Append, never rewrite — the history is the value.

## Principles

- Instead of changing things, append: v1, v2, each with a date and a reason.
- A reversed decision is not a failure; an unrecorded reversal is.

## Rules

Entry format:

```markdown
### Decision: <name>

**v1 — <date>**
We believed …
Reason: …

**v2 — <date>**
After <evidence> we changed …
Reason: …
```

## Decisions

### Decision: two questions decide a verdict

**v1 — 2026-07-18**
We believed a message's fate is decided by two questions: does the user need this to act, and do they already know it. Four verdicts fall out: keep (lead), keep (support), defer, cut.
Reason: more questions produced debate, not better verdicts. Two questions are answerable in a review without research.

### Decision: the standards engine runs after strategy, before copy

**v1 — 2026-07-18**
We placed the standards check as step 12 of 13 — after the strategy is compiled, before final content is generated.
Reason: checking copy that has no strategy polishes the wrong thing; generating copy before checking bakes defects in.

### Decision: every recommendation carries tradeoffs

**v1 — 2026-07-18**
We require the four-part frame (observation, reasoning, recommendation, tradeoffs) on every recommendation, including automated ones.
Reason: advice without a price is advertising. Naming the cost keeps the coach honest and the designer in charge.

**v2 — 2026-07-18**
Scoped on human review: the frame governs the **written record** — reviews, documented recommendations, the app's cards. Live coaching is Socratic: one question at a time, analysis held until the person is close to seeing it themselves, tradeoffs held in reserve until raised (they will raise the obvious ones). The frame's completeness is for the record, not the conversational cadence.
Reason: a full frame delivered live reads as an overwhelming lecture — the reviewer had to scroll to read the beginning. The person expected a copy rewrite; the coach's job is to walk them somewhere better, one step at a time. See `03-coaching-style.md`.

### Decision: rule data lives in rules.js

**v1 — 2026-07-18**
All machine-readable rule data (stages, placements, override warnings, component fit, standards lists, termbase) moved to `../rules.js`, which the workshop app loads directly. Markdown may quote values but tags the key it mirrors; rules.js wins on conflict.
Reason: the app and the knowledge base were two copies of the same knowledge, and two copies drift.

### Decision: an upsell never shares a message with an error

**v1 — 2026-07-18**
Errors and upsells are different message types with different treatments, always delivered as separate messages. In a PLG product a plan-limit error may legitimately lead to an upgrade prompt — as its own message, after the error copy does its job.
Reason: human review of the upload-error case. "Check out our new…" failed as marketing framing aimed at someone who is mad, not because the upgrade was irrelevant.

### Decision: borrow public standards until internal access lands

**v1 — 2026-07-18**
Until the internal design system is accessible, we build on public best-in-class systems in this priority order: **Shopify Polaris** content standards and per-component "when to use" guidance (primary — deprecated pages included, favored over Atlassian by explicit decision); **Intuit Content Design** for domain voice, tone, and terminology (money and stress); **Atlassian Design System** only where Polaris is silent (illustrations, iconography detail); **GOV.UK** for dialect-neutral plain-language evidence only — UK spellings and vocabulary excluded. Tokens and technical implementation ignored throughout. Every borrowed rule carries a source tag; on internal access, grep the source names and swap section by section.
Reason: better to stand on published, user-tested standards with provenance than to improvise — and provenance makes the future swap mechanical.

### Decision: defaults carry defensible labels

**v1 — 2026-07-18**
A defaulted or recommended option must be explained by a legally defensible, verifiable claim ("most common", "cheapest"). "Best value" is technically acceptable but borders on a dark pattern — especially when the displayed price (monthly) differs from the actual charge (multiple months up front). Show the real charge.
Reason: an unexplained default is a sale wearing a suggestion's clothes. Verifiable labels keep defaults a service. See `../mistakes/indefensible-defaults.md`.

**v2 — 2026-07-18**
Strengthened: "show the real charge" is not enough. The real charge must be the **most prominent number in the visual hierarchy** — a per-period teaser price never outranks it in size, weight, or position.
Reason: a real charge that's technically present but visually outshouted still deceives. Hierarchy is part of the claim.

**v3 — 2026-07-22**
Preselection sorted into three things that were wearing one name. The governing rule, in Kate's words: **preselection is only a problem when it's part of a deceptive pattern that benefits the business rather than the user.**

| What it is | Example | Verdict |
|---|---|---|
| A paid option pre-chosen for the user | A paid registration partner, $150 per registration, pre-selected | Deceptive pattern. Prohibited — legal confirmed |
| A free option the user already bought and wants | "Yes, accept service" on an auto-file service already included in their subscription | Not a preselection in the meaningful sense. No disclosure owed |
| A radio reporting a factual status | "No, not yet" on *Have you finished the authorization steps?* | Not a default at all — a status field wearing a radio button |

Reason: an earlier draft of this review flagged "inconsistent preselection" across these three and proposed a blanket consistency rule. That was wrong — it flattened a prohibited pattern, a sensible default, and a status report into one category. The test is who benefits, not whether the dot is filled in. Named patterns: `rules.js → DECEPTIVE_PATTERNS`.

### Decision: title + button tell one story

**v1 — 2026-07-18**
A surface's title, body, and primary button use the same verb and noun ("Delete customer?" → "Delete customer"). No verb swaps between title and button.
Reason: a verb change mid-dialog forces the user to re-verify what they're agreeing to — friction exactly where confidence is needed.

**v2 — 2026-07-18**
Corrected on human review: same-verb mirroring is the rule only for destructive action confirmations, where re-verification friction is the point. The general rule is broader and different: the title and button must tell one cohesive story readable on their own — users read title → button, then act, taking in body text only if needed. Different verbs are often helpful because the button can add a unique piece of information. And the key takeaway must appear in the title and button, even at the cost of brevity.
Reason: v1 over-generalized a destructive-confirmation pattern into a universal rule. The reading model (title → button → act) is the actual foundation. See `../heuristics/title-plus-button.md`.

### Decision: the basics gate

**v1 — 2026-07-18**
The coach never produces copy while the basics are unanswered: goal, audience, moment, existing cues. Dodged questions are resurfaced (with suggested answers, one at a time) until answered; the basics and all assumptions are restated for confirmation before anything is written; every draft carries its open questions.
Reason: people treat agent output as approval — "I put it through the agent, so it's good to publish." A polished draft built on unanswered questions launders those gaps into the product. The gate makes the coach's confidence match its information.

### Decision: intake forks on role

**v1 — 2026-07-18**
Intake asks for the requester's role first and forks: UX roles (designer, researcher, lead) get the full workshop intake — component, workflow (screenshot or steps sign-in → task completion), cues, campaign context, and a draft. Everyone else gets a small plain-language form — product, audience, goal, KPIs — and is **never asked for a draft**. For outside requests, the coach states its measurement assumptions out loud and gets agreement on in-system proxies before proceeding. No marketers are embedded in UX; outside requesters are never routed to the inside path.
Reason: the two groups know different things. UX knows the workflow and holds the user's vantage; outside requesters hold an outcome and often a mandate. Asking a marketer for a draft turns their solution-guess into the artifact; asking for their goal keeps the workshop pointed at the outcome. Stated assumptions mean Kate's rule holds: challenge the assumption, not the response.

**v2 — 2026-07-18**
UX path redesigned on review: designers describe what they need first ("What are you working on?" / "What problem are you trying to solve?"), the coach silently pre-fills what it can from their words (product, audience categories, includes, project type — surfaced in the summary for correction), and follow-ups collect only the gaps. Added: audience category tags, project type, the same-way-success question (a "no" auto-adds change management messaging), and the includes taxonomy with per-item routing. Descriptive text removed throughout the workshop — title text only.
Reason: a form interrogates; a conversation listens. Designers already carry the context in their heads — let them dump it once, then confirm the coach's reading instead of retyping it field by field.

**v3 — 2026-07-19**
Reworked after Kate's first real walkthrough (a one-time email about technical upkeep in Time):
- Inference now runs on **every** free-text answer, not just the opening two — she named the product in "audience specifics" and the coach missed it.
- The abstract change question ("if they try the same way, will they succeed?") replaced by **stepped-out today vs. future**: today's steps pre-filled from sign-in, future shown as the same steps to edit — or "nothing changes, message only." A diff is a fact; the abstract question wasn't answerable.
- Three overlapping questions (existing cues, campaign?, channels) merged into one: **"How else are we communicating this?"** — pre-filled when the description already says "email."
- Goal split into **do vs. know**, then the specifics. "What are you trying to achieve" was too abstract to answer well.
- Added: "How many clients do we know for sure are impacted?" · "One-time message" project type · "Technical upkeep" trigger ("engineering constraint" was too vague) · "None of the above" replaces free-text on audience categories.
- Assumption cards rewritten to one short plain sentence per part.
Reason: every change traces to a specific moment where a real requester stalled, misread, or answered the wrong question. The intake serves the requester's vocabulary, not the system's.

### Decision: MVP scope — one-time messages and updates to existing UI

**v1 — 2026-07-19**
The prototype's intake covers one-time messages and updates to existing UI. "New UI" stays visible in the project-type list; selecting it explains the scope and asks for the closest in-scope option (canonical: `rules.js → MVP_PROJECT_TYPES`).
Reason: new UI deserves its own flow (content lists, hierarchy, component decisions per screen), and a half-built version would coach badly. Keeping it listed shows reviewers the use case was considered, not missed.

### Decision: the coach is a conversation, not a form

**v1 — 2026-07-19**
Alpha v2 is chat-based: a back-and-forth conversation on one side, the brief visibly filling on the other. The form (v1) stays published as the iteration story.
Reason: Kate's words — "you can't possibly get the right details if you're just collecting them." In the mid-period walkthrough, every load-bearing fact arrived conversationally: the product guess with reasoning shown, the Help-vs-product contradiction, "peak anxiety is before submit" surfacing from an aside. A form can't chase an aside. The brief pane keeps the form's guarantees: nothing skipped, everything correctable, stated assumptions on the record.

### Decision: bad requirements get an alternate plan

**v1 — 2026-07-19**
When a requester names constraints that fight the real fix ("content changes only," "no workflow changes"), the strategy ships two plans. Plan A overrides the constraint and says why. Plan B honors it — and logs every honored defect with the heuristic it breaks, phrased as user impact. "Hey UXer, it's your job to log this as a major UX defect."
Reason: silently complying ships the defect; silently defying ships a fight. Two plans let the work make the argument, and the defect log makes honoring a bad constraint a recorded decision instead of an invisible one.

### Decision: verdicts carry a level and a delivery

**v1 — 2026-07-19**
Message verdicts are a level — Critical, Very helpful, Helpful, Not helpful — plus delivery flags: non-verbal cue, solve through design, interaction design change, conditional (canonical: `rules.js → VERDICT_LEVELS, VERDICT_FLAGS`). The message list is a **content audit plus content need**: existing content that should go gets listed with its cut on the record.
Reason: keep/support/defer/cut only judged words. The mid-period review showed the best answer is often not words — a disabled option, a default that looks like a default, a visual cue. The verdict has to be able to say so.

### Decision: the upsell effectiveness test

**v1 — 2026-07-19**
An in-task promotional message must prove base effectiveness: more than 1% of users who complete the workflow have visited its link. Below that, recommend the requester work with their researcher to A/B test timing and placement. Above it, the promo still disappears whenever a priority message is visible.
Reason: the "Stay competitive" benchmark card sat on every screen of a stressful task. Nobody could say whether anyone used it. A number turns "get rid of it" into a testable claim.

### Decision: the workflow is typed by object

**v1 — 2026-07-22**
The end-to-end workflow is drawn and described in five object types: **thing** (kickoff), **collaborative process** (agent and designer together), **designer-only process**, **decision** (the product owner chooses), and **document** (an artifact that can be handed on). Each type gets its own shape. Processes sit *on* the connectors between things, not as things themselves. Full flow in `04-decision-framework.md`; diagram at `../../diagrams/agent-flow.svg`.
Reason: an OOUX pass (`../../diagrams/decision-coach-ooux.md`) found that processes (verbs) and documents (nouns) were being drawn as near-identical boxes, breaking "different things should look different." Naming and shaping the types fixed the confusion, and separating collaborative from designer-only made visible where the human works alone.

**v2 — 2026-07-22**
Refined. "Designer-only process" widened to **single-actor process**, because review turned out to be bot-only, not designer-only — one party working alone is the real category, and the icon says which party. Added an explicit prominence order: collaborative processes read loudest, then documents, then single-actor processes, then decisions, then kickoff. Prominence is carried by size and label weight, never by stroke — stroke stays one colour and weight everywhere.
Reason: a collaborative step is the thing this system exists to do, so it should dominate. And if review had stayed labelled "collaborative," the diagram would have claimed a person is involved where none is.

### Decision: two plans, decided by the product owner

**v1 — 2026-07-22**
Strategy produces a **low-risk plan** and a **risky plan** — both proposing content hierarchy and placement, one minimizing UX risk and one flagging it. The product owner decides between them at a named decision point. Never call them "plan A / plan B."
Reason: a constraint that fights the real fix should be visible and owned, not silently obeyed — this is the earlier "bad requirements get an alternate plan" decision, now with an explicit decision-maker attached. "A/B" was dropped because it reads as an A/B test.

**v2 — 2026-07-22**
Reversed on the naming: they are **plan A** and **plan B** after all. Plan A mitigates UX risks but may add scope; plan B holds scope and carries the risk. Each name carries its tradeoff on a line beneath it.
Reason: the tradeoff line does the work the descriptive names were doing, and no A/B test has one — so the confusion v1 was guarding against doesn't survive contact with the actual artifact. Short names also let the two documents sit as a stacked pair without the titles crowding.

**v3 — 2026-07-22 (correction, not a change)**
v1 and v2 both misread the original instruction, so the record needs straightening. The rule was never "don't use the letters A and B." It was **never write the mashed-together form "A/B"** — that string is what reads as an A/B test. Labelling one document **plan A** and the other **plan B**, shown in that order, was always fine.
Reason: logged because v2 framed this as a reversal of position when it was a misunderstanding on our side. The naming in the diagram never actually needed to change; only our description of the rule did.

## Decision heuristics

- If a decision keeps getting relitigated, it isn't written down clearly enough.

## Common mistakes

- Editing a v1 entry "for clarity" in a way that changes its meaning. Append instead.

## Examples

- See decisions above.

## Counterexamples

- None yet.

## Exceptions

- Typos and broken links may be fixed in place.

## Related concepts

→ [12-governance](12-governance.md)
→ [../thinking/we-might-be-wrong.md](../thinking/we-might-be-wrong.md)
