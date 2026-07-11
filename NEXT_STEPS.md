# Next steps

One running list, prioritized by impact. Update in place rather than starting new lists elsewhere.
**Global rule: anything unfinished or still in doubt goes here.**

## Current state (updated 2026-07-10)

Live site: **index.html** (masthead + four-step playbook, continuous scroll) · **team.html** (leadership stats + quotes) · **me.html** (contact + what I'm looking for). Eggplant (#6B4C9A) accent marks case studies.

Not linked / not yet public:
- **retirement-cross-sell.html** — full draft, built at strength. Real numbers approved by Kate. Held until images are added, then link it in (see below). Kept out of every push so far because the repo is public.
- **use-case-2.html** — **pulled this session** (superseded by the retirement story).

## Shipped this session (the pre-distribution "knock-out" batch)

- Job title: portfolio is already consistent on "Experience design manager" — no portfolio change needed. The **resume** is the outlier ("UX design manager"); reconciliation routed to the resume agent (see prompt).
- Proofread of the three live pages (Kate is proofreading the resume herself). Fixed "sure-fire" → "surefire."
- **Pulled use-case-2.html.**
- **a11y sanity pass — passed.** Eggplant 6.72:1, muted text 7.58:1 (both clear AA/AAA), no heading skips, all SVGs named, all links discernible, resume-link icon `aria-hidden`, reduced-motion guard added to all three pages.

## Before the resume goes out — remaining

1. **Kate: proofread the printed resume.**
2. **Resume agent updates** (see the prompt handed off separately): reconcile the title, add deep-links into the portfolio, weave in Heap/Pendo/UMUX, resolve the 2× vs 2.5× number.

## Retirement case study — to finish and ship

- **Add images** (Kate approved incorporating the real numbers). Before/after UI is **not available**, so artifacts must be recreated/described, not captured. Priority artifact per the notes: the redrawn left-nav mock (already built as SVG); add the five-treatment comparison and reach-vs-performance visuals as needed.
- Verify the flagged facts still marked in the file: sample size, "two days" scope, 2× vs 2.5×, the two buried-in-workflow treatments, survey wording + respondent count, quarter.
- **Then link it:** a "read the full case study" link from **Step 2**, plus a small **"Deep dives"** index on the homepage (which also becomes the home for the stories bank below).
- Only push once Kate confirms it's final — the repo is public.

## Priority build queue (by impact)

1. **Design systems: creation (step 3) + adoption (step 4).** Kate can speak to this directly. Weave the creation story into step 3 and the adoption story (advised across 90 designs / 100+ teams) into step 4. **Top of the list.**
2. **"How I hire and grow" — the practice-build case study.** Kate's favorite; fills the people-building gap the retirement study leaves. Source: the "How I Did It" doc + the interview-question set handed off this session. Needs a non–Great-Resignation framing for why the team collapsed to one person before it can open.
3. **Flex Assistant content governance (70% → 90% accuracy).** Kate happy to add. "Content design is the input to AI accuracy" — timely. Needs: what was measured, by whom, and what content change moved the number.
4. **Step 2 visual.** Before/after UI is unavailable — find an alternative (a simple outcome diagram, or a redrawn "how users think" IA sketch for the retirement estimator).
5. **Step 4 principle line** — still missing; breaks the four-step template. Needs one line in Kate's voice.
6. **Fill step 3 placeholder visuals** — operating model, knowledge architecture, annotated AI conversation, notification architecture.

## Additional stories bank ("deep dives" — the oddballs)

A small linked index of shorter pieces, so strong-but-off-framework stories have a home without jamming them into the playbook:

- **PPP loan calculator** — short, high-stakes feature (500K businesses, $65B, Silver Stevie). Not a deep study.
- **In-app comms governance** — POV essay; the connective tissue under the retirement story (Kate's ongoing governance role, which the framework currently skips).
- **UI Writing Assistant measurement** — the 100+ hours/week figure needs a method before it's publishable.
- **Xerox/Conduent separation** — 140K employees, 180 countries; use only if targeting change-management roles.
- **Retiring the accountant home page** — clean change-management story; needs the treatments + service-call measurement.
- **Mid-period rate change story** — cut in the redesign; fits step 2 or stands alone.

## Tooling to weave in (portfolio + resume)

- **Heap, Pendo, UMUX.** Kate's mapping: any pop-up or temporary treatment = **Pendo**; data connecting those = **Pendo → Heap**, with the answers coming from **Heap**; UMUX for satisfaction. Weave naturally into the retirement story and any measurement claims, and add to the resume's tools where the work is described.

## Recognition (awards)

- Add a quiet recognition line on the **Me page** (8 industry awards, 2020–2026; Brandon Hall Gold — Paychex Voice Assist; Silver Stevie — PPP). Inline mention near the step-3 AI work. No badges/logos.

## Deferred (not now)

- **Weave the playbook into the resume.** Kate wants this, but is exploring a cover-letter format a friend shared as the possible home. Revisit later.
- Custom domain · shared CSS across pages · about section with personal color · product metrics on homepage.

## Open decisions logged

- Retirement: naming (Paychex Flex? the product?) — Flex is already on the resume.

## Housekeeping

- **Local notes files** (How I Did It, resume drafts, job-search CSV) — gitignored but still in the repo folder; consider moving them elsewhere.
- **Re-sync next-steps-tracker.html** (gitignored) to this list — it still holds this session's earlier snapshot, not these newest items.
