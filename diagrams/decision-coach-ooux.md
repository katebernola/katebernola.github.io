# Decision coach — OOUX pass

Running the coach through Object-Oriented UX (Sophia Prater's ORCA: Objects, Relationships, CTAs, Attributes) *before* deciding how to draw it. The goal: find the real nouns, separate them from the verbs, and let that drive the visual language.

## 1. Objects (the nouns the system holds)

Each object: its core attributes · what it relates to (with cardinality) · who makes or changes it.

| Object | Core attributes | Relationships | Made / changed by |
|---|---|---|---|
| **Initiative** | initiative #, name, product, status | has **1** project memory; has **∗** briefs over time; worked by **∗** designers | created when work starts |
| **Brief** | use case, audience, product, full workflow, usage data, goal | belongs to **1** initiative; yields **1** strategy | **Intake** (or imported from Jira) |
| **Message** | text, needed-to-act?, already-known?, verdict (level + delivery), placement | **∗** belong to **1** strategy | **Strategy** |
| **Strategy** | problem, goals, KPIs, content inventory, hierarchy, placement, defect log, risks, open questions | from **1** brief; holds **∗** messages; yields **1** draft | **Strategy** |
| **Draft** | component, copy, confidence flag, open questions | from **1** strategy; selects **1** component | **Recommendation** |
| **Component** | name, when to use, what to use instead, char budget, content rules | selected by **∗** drafts | lives in knowledge base |
| **Knowledge item** (belief · guideline · mistake · standard · term · voice) | the rule, reasoning, tradeoffs, source | consulted by processes; instantiated by **∗** patterns | authored; refined by retro |
| **Pattern** | situation, before/after, lessons, journey position | instantiates **∗** guidelines/mistakes | **Retro** |
| **Review** | ORRT frame, findings, verdicts | derived from **1** run | **Retro** |
| **Decision** | name, version, date, reason | versioned history | **Retro** |
| **Project memory** | initiative #, history of briefs + decisions | **1** per initiative | read by intake, written by retro |
| **Knowledge base** | a collection of knowledge items, patterns, reviews, decisions | **1**, global; encoded in rules.js | read by processes, written by retro |

## 2. Processes (the verbs — NOT objects)

These transform objects. They are not things; they are actions.

- **Intake**: inputs (+ project memory) → **Brief**
- **Strategy**: Brief → **Strategy** (a set of **Messages**)
- **Recommendation**: Strategy → **Draft**
- **Retro**: a run → writes **Patterns / Reviews / Decisions** (knowledge base) + updates **Project memory**

## 3. CTAs (the actions a user takes on objects)

Brief: review, edit, import. Message: keep / support / defer / cut, set level, set placement. Strategy: review, export. Draft: accept (human), revise, escalate. Pattern/Review/Decision: view, reuse. Project memory: open prior context.

## 4. Findings — and how they land against the current diagram

1. **Two fundamentally different kinds of thing are drawn the same.** Objects/documents (Brief, Message, Strategy, Draft, Pattern…) are nouns; processes (Intake, Strategy, Recommendation, Retro) are verbs. The current diagram draws both as near-identical rounded rectangles → it breaks *"different things should look different."* → **Give processes and documents inherently different shapes.**
2. **Cardinality and collections are invisible.** Project memory is **one per initiative** — the system holds *many* of them; the knowledge base holds *many* items; a strategy holds *many* messages. Drawing project memory as one giant bar misrepresents it. → **Draw collections as stacks (one card per member), which also right-sizes project memory.**
3. **Message is a hidden hero object.** The whole system exists to reason about individual messages, yet the current diagram never shows one. → A version should surface it.
4. **Brief → Strategy → Draft is a clean document lineage** (each produced from the last). Documents flow; processes transform them. → The document throughline is a legitimate spine on its own.

Independent OOUX confirms the three intuitions in the brief: separate process vs. document visually, don't oversize project memory, and show project memory as one-file-per-project.

## 5. Typed visual language (used across all versions)

- **Process** = pill / stadium shape (fully rounded ends). A verb.
- **Document** = page with a folded corner (dog-ear). A noun you can hold.
- **Collection / store** = a stack of offset cards (signals "many"). Project memory = a small stack of initiative files; knowledge base = a labeled group of item cards.
- Relationships = arrows, labeled with the verb (*produces · reads · writes*) or cardinality (**1 · ∗**).
