# Future features

Ideas for the system and its prototypes. Not commitments.

- A real model behind the coach: the workshop prototype is rule-based by design; a model-backed version could hear tone, catch wrong-but-well-formed messages, and draft copy worth reacting to. The knowledge base in this folder is what it would read.
- ~~Termbase import~~ Done 2026-07-18, differently: all rule data (termbase included) moved to `../rules.js`, which the app loads. Remaining idea: generate the terminology markdown tables *from* rules.js so even the quoted copies can't drift.
- Review diffing: run the standards engine on before/after pairs automatically and store the delta in `../examples/before-after/`.
- Pattern matcher: when a new intake resembles an existing pattern, surface it at step 2.
- A "belief tracker" that links each coach challenge to the belief it rests on, so weakening a belief automatically flags dependent rules.
- Dedicated flows for change management messaging and feature awareness messaging: intake's includes list routes both to the standard workflow today. Each deserves its own path — change management especially (who is affected, what stops working, what to do instead, sequenced before and at the moment of failure). Referenced in `../books/04-decision-framework.md`; don't link to these flows from the app until they exist (no dead ends).
- Smarter intake inference: today `rules.js → INFERENCE` is keyword regexes; a model-backed version would read the designer's description properly and pre-fill with real comprehension. Deployment plan agreed 2026-07-19: small Node endpoint calling the API, hosted free (Render/Railway) so portfolio reviewers can use it without setup — deferred until the prototype itself is solid.
- Read pasted UI screenshots: a designer pastes images of the bad UI and the intake fills itself from what the model sees. The upload field exists; the reading needs the model backend.
- New-UI intake flow: out of MVP scope by decision (see `../books/09-decision-library.md`). Would need per-screen content lists, hierarchy, and component decisions.
- v2 chat: outside-UX conversation not built yet — v2 routes non-UX roles to v1, which has the full path (stated KPI assumptions and all). Port it once the UX conversation settles.
- v2 chat: reading attached screenshots. The attach button works and missing screens become named risks; actually reading the images is the model backend's job.
- Usage-data collection: **built in the real system** — it is one of the inputs the coach asks for, and it sets defect severity and fix effort. Out of scope for the *portfolio prototype* only, which says so in the KPI turn. (Corrected 2026-07-22; the earlier "out of MVP" note referred to the prototype, not the system.)
- Project memory: **built in the real system** — one file per initiative, keyed by initiative number, so a designer picks the file for the initiative they're on and doesn't re-walk the earlier steps. Shared across designers, so whoever picks the work up next can read what the last person asked and shared. The project brief is exported from Jira and added to the tool. Not in the portfolio prototype. (Corrected 2026-07-22.)
