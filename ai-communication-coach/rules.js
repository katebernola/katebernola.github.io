/*
 * rules.js — the single machine-readable source of truth for the
 * communication coach's rule data.
 *
 * Loaded by ../communication-coach.html (the workshop prototype).
 * The prose reasoning behind each block lives in books/ — pointers below.
 * Markdown files may quote these values for readability; when they do,
 * they tag the rules.js key they mirror. On any conflict, this file wins.
 *
 * Edit this file to change how the coach behaves. Keep the paired book's
 * prose in step with the change (see CLAUDE.md, maintenance rules).
 *
 * Borrowed standards (until internal design-system access lands):
 * primary: Shopify Polaris content standards (polaris-react.shopify.com/content);
 * domain voice/terminology: Intuit Content Design (contentdesign.intuit.com);
 * where Polaris is silent: Atlassian Design System (atlassian.design);
 * dialect-neutral plain-language evidence: GOV.UK content design.
 * Entries carry source notes; grep "Intuit" / "Polaris" to find and swap them.
 */
window.COACH_RULES = {

  /* ---- Vocabulary ------------------------------------------------ */

  COMPONENT_TYPES: {
    onboarding:   { name: 'Onboarding screen', desc: 'First-run, setup, or a welcome moment' },
    error:        { name: 'Error message', desc: 'Something failed and the user hit a wall' },
    empty:        { name: 'Empty state', desc: 'A screen with nothing in it yet' },
    confirm:      { name: 'Confirmation dialog', desc: 'Checking before something big or final' },
    announce:     { name: 'Feature announcement', desc: 'Telling users about something new' },
    form:         { name: 'Form or flow', desc: 'A task with fields and steps' },
    settings:     { name: 'Settings or account page', desc: 'Controls the user changes on purpose' },
    notification: { name: 'Notification or email', desc: 'A message that reaches out to the user' }
  },

  TRIGGERS: {
    own:         'My own design work surfaced it',
    stakeholder: 'A stakeholder asked for it',
    support:     'Support tickets or complaints',
    research:    'Metrics or user research',
    upkeep:      'Technical upkeep or maintenance',
    engineering: 'A technical limit forced it'
  },

  /* Suggested answers for intake questions — every question offers likely
     answers plus "something else." (source: coaching-style, basics gate) */
  GOAL_OPTIONS: [
    'Get more people to do something',
    'Announce or explain a change',
    'Reduce support tickets',
    'Fix a confusing moment',
    'Ship a mandate I was given'
  ],
  CUE_SUGGESTIONS: [
    'A dashboard tile or card',
    'A menu item',
    'An email',
    'A line on a document',
    'None that I know of'
  ],

  /* Requester roles — fork point for intake path (inside vs. outside UX) */
  UX_ROLES: ['Designer', 'Researcher', 'Lead'],

  /* Audience categories. Accountant and financial advisor do NOT work for
     the company directly — external users with different context and stakes. */
  AUDIENCE_TAGS: ['Employee', 'Admin', 'Accountant', 'Financial advisor'],

  PRODUCTS: ['Payroll', 'Time', 'Retirement', 'Analytics', 'AI', 'Platform'],

  /* MVP scope decision (2026-07-19): the prototype covers one-time messages
     and updates to existing UI. "New UI" stays listed so reviewers see it
     was considered — selecting it explains the scope instead of proceeding. */
  PROJECT_TYPES: ['One-time message', 'Update to existing UI', 'New UI', 'Non-UI change'],
  MVP_PROJECT_TYPES: ['One-time message', 'Update to existing UI', 'Non-UI change'],

  /* What the project includes. "Notification" here means the need to get
     someone's attention or share information — NOT a specific component.
     It covers system notifications, pop-ups, dashboard content, wordless
     indicators, and UI messaging outside or persistent beyond the workflow.
     Routing: info display → collect content list, set priority in workshop;
     workflow → collect diagram/steps; notification → workshop decides if,
     when, where; change mgmt + feature awareness → standard workflow for
     now (dedicated flows are future work); selling → upsell separation
     rules apply; new user / company setup → early journey stages. */
  INCLUDES: [
    'Information display screen',
    'Workflow',
    'Notification',
    'Change management messaging',
    'Feature awareness messaging',
    'Another company',
    'Selling opportunity',
    'A new user',
    'Company setup'
  ],

  /* Silent-inference keywords: the coach reads the designer's free-text
     description and pre-fills what it can; follow-ups collect the rest.
     Filled values surface in the intake summary for correction. */
  INFERENCE: {
    products: {
      Payroll: /\bpay(roll|check|stub)\b|\bpay rate|\bcompensation|\bwage|\bsalar/i,
      Time: /\btime\W{0,3}(product|tracking|sheet|card|entry)|attendance|timekeeping|clock|shift|pto\b|\bleave\b/i,
      Retirement: /\bretire|401\(?k\)?|pension/i,
      Analytics: /\banalytic|report|dashboard metric|insight/i,
      AI: /\bai\b|assistant|chatbot|copilot/i,
      Platform: /\bplatform|login|sign.?in|navigation|home page/i
    },
    audiences: {
      Employee: /\bemployee|worker|staff\b/i,
      Admin: /\badmin|administrator|hr manager|owner\b/i,
      Accountant: /\baccountant|bookkeep|cpa\b/i,
      'Financial advisor': /\badvisor|adviser|broker\b/i
    },
    includes: {
      'Information display screen': /\bdashboard|table|list view|report screen|summary screen/i,
      'Workflow': /\bworkflow|flow|wizard|steps|process|form\b/i,
      'Notification': /\bnotif|alert|remind|banner|pop.?up|toast|badge|indicator/i,
      'Change management messaging': /\bchange management|migrat|deprecat|replac|sunset/i,
      'Feature awareness messaging': /\bawareness|announce|promot|launch|new feature/i,
      'Another company': /\bpartner|third.?party|integration|vendor\b/i,
      'Selling opportunity': /\bupsell|cross.?sell|upgrade|plg|premium|trial\b/i,
      'A new user': /\bnew user|first.?time|onboard/i,
      'Company setup': /\bcompany setup|implementation|getting started|activation/i
    },
    projectTypes: {
      'One-time message': /\bone.?time\w*|\bemail\b|\bannouncement\w*|\bnotice\b|\bmessage to\b/i,
      'New UI': /\bnew (screen|page|ui|feature|flow|experience)/i,
      'Update to existing UI': /\bupdat\w*|\bredesign\w*|\brevis\w*|\bimprov\w*|\bexisting\b|\bfix\w*/i
    },
    comms: {
      Email: /\bemail|e-mail\b/i,
      'Rep or advisor outreach': /\brep\b|advisor|outreach|account manager/i,
      'Marketing site': /\bmarketing site|website campaign/i
    }
  },

  /* KPI assumptions for non-UX requests — state explicitly so wrong assumptions get challenged */
  KPI_ASSUMPTIONS: [
    'Click-through to external link (campaigns link out of system)',
    'Chatbot visits / Help Center visits',
    'Workflow completion rate',
    'Stage progression',
    'Task completion'
  ],

  /* Journey stages — reasoning in books/05-user-journeys.md */
  STAGES: {
    first:    { name: 'First contact', desc: 'They just arrived. They barely know you.' },
    onboard:  { name: 'Getting set up', desc: 'They said yes. Now they want to reach the good part.' },
    everyday: { name: 'Everyday use', desc: 'They know the ropes. They run on habit.' },
    need:     { name: 'Moment of need', desc: 'Something went wrong, or they are stuck and looking for help.' },
    decide:   { name: 'Decision point', desc: 'They are about to commit: pay, delete, share, submit.' },
    leaving:  { name: 'Leaving or lapsing', desc: 'They are canceling, downgrading, or drifting away.' }
  },

  USER_GOALS: [
    'Finish the task and move on',
    'Understand what just happened',
    'Fix a problem',
    'Decide with confidence',
    'Learn what this thing does',
    'Feel in control of their stuff',
    'Get out quickly'
  ],

  BUSINESS_GOALS: [
    'Adoption of a feature',
    'Conversion or sign-ups',
    'Retention',
    'Fewer support tickets',
    'Upsell or upgrade',
    'Trust and brand feel'
  ],

  COMM_GOALS: {
    inform:   { name: 'Inform', desc: 'Give a fact they need' },
    instruct: { name: 'Instruct', desc: 'Tell them what to do next' },
    reassure: { name: 'Reassure', desc: 'Lower worry so they can act' },
    confirm:  { name: 'Confirm', desc: 'Verify a choice before it happens' },
    warn:     { name: 'Warn', desc: 'Flag a risk before they hit it' },
    persuade: { name: 'Persuade', desc: 'Move them toward a choice' }
  },

  PLACEMENTS: {
    inline:  'Inline, where the action happens',
    helper:  'Helper text or a "learn more" (progressive disclosure)',
    modal:   'Modal or dialog',
    tooltip: 'Tooltip or popover',
    banner:  'Banner at the top of the screen',
    later:   'A later touchpoint (next visit, changelog, follow-up)',
    none:    'Nowhere — cut it'
  },

  VERDICT_LABELS: {
    keep: 'Keep — lead with it',
    secondary: 'Keep — as support',
    defer: 'Defer — later moment',
    cut: 'Cut'
  },

  /* ---- Stage coaching — books/05-user-journeys.md ----------------- */

  STAGE_CARDS: {
    first: {
      observation: 'You placed this at first contact.',
      reasoning: 'New users are not reading yet — they are deciding whether to trust you. Every extra word raises the cost of staying.',
      recommendation: 'Say the one thing that helps them take the very next step. Save the rest for when they have a reason to care.',
      tradeoffs: 'You will leave things unsaid, and some users will miss context. That is the deal at this stage.'
    },
    onboard: {
      observation: 'You placed this during setup.',
      reasoning: 'People in setup want to finish setup. Teaching works best inside a task, not before it — tips read before they matter are tips forgotten.',
      recommendation: 'Attach each message to an action the user is already taking. Teach at the moment of use.',
      tradeoffs: 'Contextual teaching means some users meet a feature late. Front-loading everything means most users skip all of it.'
    },
    everyday: {
      observation: 'You placed this in everyday use.',
      reasoning: 'Habitual users run on autopilot. A new message interrupts a pattern they trust — and they trust it because you built it.',
      recommendation: 'Only interrupt for things that change what they would do next. Everything else should wait quietly to be found.',
      tradeoffs: 'Quiet changes can go unnoticed. Loud ones spend the calm you worked to build.'
    },
    need: {
      observation: 'You placed this at a moment of need.',
      reasoning: 'Someone stuck or worried reads differently. They scan for two things: "am I okay?" and "what do I do?" Nothing else registers until those are answered.',
      recommendation: 'Answer those two questions first, in that order. Everything else waits or goes.',
      tradeoffs: 'Terse can read as cold. But warm and wordy reads as evasive when someone is anxious.'
    },
    decide: {
      observation: 'You placed this at a decision point.',
      reasoning: 'At a commitment moment, missing information does not stop people — it makes them guess, or leave. The wrong fact here costs trust for a long time.',
      recommendation: 'Give the one fact that decides the choice, right next to the choice. Cut anything that competes with it.',
      tradeoffs: 'More facts can build confidence — or stall the decision. Pick the deciding fact and stand behind it.'
    },
    leaving: {
      observation: 'You placed this where users are leaving or lapsing.',
      reasoning: 'Someone leaving has already decided something. Copy that argues with them feels like a trap, and traps get remembered.',
      recommendation: 'Be honest and quick. The impression you leave here is the marketing for their possible return.',
      tradeoffs: 'Not fighting for the save costs some churn today. Fighting for it costs the goodwill that brings people back tomorrow.'
    }
  },

  STAGE_MISMATCH: {
    'announce|need': 'You are announcing a feature to someone at a moment of need. A person mid-problem experiences news as noise — or worse, as the product ignoring them. Consider holding the announcement for calmer ground.',
    'announce|leaving': 'You are announcing a feature to someone on their way out. If the feature truly addresses why they are leaving, name that connection plainly. If not, this will read as a last-second sales pitch.',
    'onboarding|everyday': 'You chose an onboarding screen for people in everyday use. Habitual users skip onboarding patterns on reflex — they will dismiss before reading. Consider an in-context nudge instead.',
    'error|first': 'An error at first contact is the highest-stakes copy there is: it may be the only thing this user ever reads from you. Reassure first, instruct second, apologize like a person.',
    'confirm|everyday': 'A confirmation dialog inside a habitual flow gets clicked through on muscle memory. If the action is truly risky, make the dialog state the consequence, not just ask "are you sure?"'
  },

  /* ---- Goals coaching — books/01, mistakes/business-vs-user-goals -- */

  BUSINESSY_WORDS: /(adopt|engag|discover|upgrad|convert|conversion|aware|retention|monetiz|activat|funnel|sign.?up)/i,

  CONFLICT_RULES: [
    { biz: 'Upsell or upgrade', stages: ['need', 'leaving'], msg: 'Upselling someone who is stuck or leaving reads as opportunism at their worst moment. If the upgrade genuinely solves their problem (a plan limit, say), it can earn a place — but an upsell and an error are different message types and never share a sentence. Let the error copy do its job first; the upgrade path gets its own message with its own treatment.' },
    { biz: 'Adoption of a feature', userGoal: 'Get out quickly', msg: 'You want them to discover a feature; they want to leave. Detaining a user who wants out costs more trust than the feature earns. Let this moment go — find them at a calmer one.' },
    { biz: 'Conversion or sign-ups', stages: ['need'], msg: 'Asking for commitment during a moment of need puts a toll booth in front of help. Help first; the conversion case gets stronger, not weaker.' },
    { biz: 'Fewer support tickets', stages: ['first'], msg: 'Deflecting tickets at first contact often means front-loading warnings and caveats. New users read that as "this product is complicated." Prevent confusion with clarity, not with disclaimers.' }
  ],

  COMM_PROBES: {
    inform: {
      title: '"Inform" is the easy answer — check it',
      reasoning: 'Inform is where goals go to hide. If you want the user to do something after reading, your goal is instruct. If you want them to feel safe, it is reassure. Pure information with no intended effect is rare.',
      recommendation: 'Ask what should change after they read. If the answer is a behavior, switch to instruct. If it is a feeling, switch to reassure.',
      tradeoffs: 'Naming a sharper goal makes the copy more accountable — it can now fail. That is a feature, not a bug.'
    },
    instruct: {
      title: 'Instruct — good. Now earn the click',
      reasoning: 'Instruction only works when the user already believes the action is worth taking. If doubt exists, an instruction alone reads as bossy.',
      recommendation: 'Lead with the outcome the user gets, then the action. Verb-first for the action itself.',
      tradeoffs: 'Outcome-first adds a few words. Action-only is tighter but assumes motivation you may not have.'
    },
    reassure: {
      title: 'Reassure with facts, not adjectives',
      reasoning: 'Reassurance made of adjectives ("don\'t worry, this is easy and safe!") raises suspicion. Reassurance made of facts ("your data is saved; nothing was lost") lowers it.',
      recommendation: 'Find the specific fact that makes the worry unnecessary and state it plainly. Cut the soothing tone words.',
      tradeoffs: 'Fact-based reassurance requires knowing the facts — you may need engineering to confirm what is actually true.'
    },
    confirm: {
      title: 'Confirmations get clicked, not read',
      reasoning: 'Users treat confirmation dialogs as speed bumps. "Are you sure?" gets a reflexive yes. The dialog earns its interruption only if it states the consequence.',
      recommendation: 'Name what happens and what cannot be undone. Make the button label repeat the action ("Delete 12 files"), never "OK".',
      tradeoffs: 'Consequence-first copy is scarier and may lower completion of the action. If the action is destructive, that is the point.'
    },
    warn: {
      title: 'A warning competes with every other warning',
      reasoning: 'Users are trained by a thousand cry-wolf warnings to dismiss them. Yours will be judged by all the ones that came before it.',
      recommendation: 'State the specific risk and the specific moment it applies. A warning without a "when" is just ambient anxiety.',
      tradeoffs: 'Specific warnings can be long. Vague ones are short and ignored. Length is the cheaper cost.'
    },
    persuade: {
      title: 'Persuasion in-product is a trust withdrawal',
      reasoning: 'Inside a product, users expect a tool, not a pitch. Persuasion works here only when it removes a doubt, not when it adds pressure.',
      recommendation: 'Find the doubt blocking the choice and answer it with evidence. If there is no doubt to remove, reconsider whether this moment needs persuading at all.',
      tradeoffs: 'Doubt-removal is slower than urgency tactics and demos worse in a stakeholder review. It is also the only kind users forgive.'
    }
  },

  /* ---- Placement — books/06-placement-rules.md -------------------- */

  PLACEMENT_DEFAULTS: {
    byVerdict: { cut: 'none', defer: 'later', secondary: 'helper' },
    leadByComponent: { error: 'inline', form: 'inline', confirm: 'modal', notification: 'banner' },
    leadFallback: 'inline'
  },

  OVERRIDE_WARNINGS: {
    'keep|tooltip': 'A tooltip hides your lead message behind a hover most users never make. If it must be read to act, it cannot live in a tooltip.',
    'keep|helper': 'Helper text is quiet by design. Your lead message may get skipped by the very users who need it most.',
    'keep|later': 'Deferring a message the user needs right now means they act without it. That is the outcome this message exists to prevent.',
    'keep|none': 'You marked this message need-to-act, then placed it nowhere. One of those two decisions is wrong — worth deciding which.',
    'secondary|modal': 'A modal demands full attention. Support information has not earned a door in the user\'s face.',
    'secondary|banner': 'Banners broadcast to everyone. Support information is better whispered to whoever asks.',
    'defer|inline': 'You deferred this message but placed it inline, now. If it belongs on this screen, it is not deferred — re-evaluate it in step 8.'
  },

  /* ---- Component fit — books/07-component-standards.md ------------ */

  COMPONENT_GOAL_FIT: {
    confirm: ['confirm', 'warn'],
    error: ['inform', 'instruct', 'reassure'],
    announce: ['inform', 'persuade'],
    onboarding: ['instruct', 'inform'],
    empty: ['instruct', 'inform', 'persuade'],
    form: ['instruct', 'inform', 'warn'],
    settings: ['inform', 'instruct', 'confirm', 'warn'],
    notification: ['inform', 'instruct', 'persuade', 'reassure', 'warn']
  },

  /* ---- Standards engine data — books/08-content-standards.md ------ */

  /* PROVENANCE NOTE: these numeric budgets are internal placeholder values,
     not sourced from Polaris — public systems mostly don't publish hard
     character limits. Sourced limits that do exist: toast ≈ 3 words,
     banner ≤ 1–2 sentences (Polaris). Replace these numbers with the
     internal design system's real specs on access. */
  CHAR_BUDGETS: { inline: 120, helper: 160, modal: 240, tooltip: 80, banner: 100 },

  /* Translated text runs up to 50% longer than English on average, and
     short labels can expand up to 300%. (source: Polaris internationalization) */
  LOCALIZATION_EXPANSION: 1.5,

  ACRONYM_OK: ['GB', 'MB', 'KB', 'TB', 'PDF', 'URL', 'API', 'FAQ', 'CSV', 'USB', 'PIN'],

  /* Plain language — terminology/banned-terms.md.
     Caution words per Polaris inclusive language + Intuit word list:
     ease is subjective and discourages anyone struggling. */
  COMPLEX_WORDS: [['utilize', 'use'], ['leverage', 'use'], ['facilitate', 'help'], ['functionality', 'feature'], ['in order to', 'to'], ['prior to', 'before'], ['assistance', 'help'], ['additional', 'more'], ['approximately', 'about'], ['sufficient', 'enough'], ['terminate', 'end'], ['commence', 'start'], ['please note', '(cut it)'], ['easy', '(caution — ease is subjective)'], ['simple', '(caution — ease is subjective)']],

  /* Inclusivity — terminology/banned-terms.md */
  INCLUSIVE_TERMS: [[/\bwhitelist\w*/i, 'allowlist'], [/\bblacklist\w*/i, 'blocklist'], [/\bmaster\b/i, 'primary'], [/\bslave\b/i, 'replica'], [/\b(crazy|insane)\b/i, 'surprising'], [/\bsanity check\b/i, 'quick check'], [/\bguys\b/i, 'everyone'], [/\bgrandfathered\b/i, 'legacy'], [/\bdummy\b/i, 'placeholder'], [/\bblind spot\b/i, 'gap']],

  A11Y_FLAGS: [[/\bclick here\b/i, 'link text should say where it goes'], [/\bsee (below|above)\b/i, 'position shifts with layout — name the thing instead'], [/\bin (red|green|yellow|orange)\b/i, 'color alone excludes color-blind users — pair it with a label'], [/\bclick\b/i, 'prefer "select" — not everyone has a mouse']],

  /* Vague wrappers — a generic line is redundant once the specific cause
     is named; the specific problem is its own announcement. */
  VAGUE_PHRASES: [/something went wrong/i, /an error (has )?occurred/i, /invalid input/i, /unable to complete/i, /failed to process/i, /there was a problem/i],

  PLAYFUL_WORDS: /\b(oops|whoops|yay|awesome|woohoo|hooray|uh.?oh|no worries|hang tight)\b/i,

  /* Teaser openers: a message that opens with one of these carries no
     information in its most-read position. (source: retirement popup
     review, 2026-07-18 — "Did you know?" → "Let's go!" reads as
     nothing → nothing) */
  TEASER_OPENERS: /^(did you know|heads up|guess what|great news|good news|big news|attention|just so you know|fun fact)\b/i,

  TIME_BOUND: /\b(right now|now|currently|at this time|at the moment|for now|soon|coming soon|temporarily|today)\b/i,

  LIFECYCLE_WORDS: /\b(new|beta|coming soon|latest|improved|recently)\b/i,

  IDIOMS: /\b(oops|whoops|hang tight|heads up|hiccup|hit a snag|in a jiffy|heads-up)\b/i,

  /* Termbase — terminology/approved-terms.md.
     Sourced from the Intuit word list (contentdesign.intuit.com/word-list),
     cross-checked against Polaris content standards. Swap for the real
     product's termbase on internal access. */
  TERM_RULES: [
    [/\blog ?in\b/i, 'sign in'], [/\blog ?out\b/i, 'sign out'],
    [/\be-mail\b/i, 'email'], [/\bclick\b/i, 'select'],
    [/\benable\b/i, 'turn on'], [/\bdisable\b/i, 'turn off'],
    [/\bpurchase\b/i, 'buy'], [/\berror message\b/i, 'error'],
    [/\binvalid\b/i, 'wrong / not working'],
    [/\b(grayed.?out|greyed.?out|dimmed)\b/i, 'unavailable'],
    [/\b(hacked|breached|leaked)\b/i, 'compromised'],
    [/\bcrash(ed|es)?\b/i, 'stopped responding'],
    [/\bbug\b/i, 'issue'],
    [/\bfraud\b/i, 'suspicious activity'],
    [/\boverwrite\b/i, 'replace'],
    [/\bdismiss\b/i, 'close'],
    [/\bfunds\b/i, 'money'],
    [/\bdowngrade\b/i, 'change plans'],
    [/\btype\b(?= (a|an|the|your|in)\b)/i, 'enter'],
    [/\b401k\b/i, '401(k)'],
    /* Claim words: defaults and offers need legally defensible labels.
       (sources: Kate, 2026-07-18 — see mistakes/indefensible-defaults.md;
       Intuit word list on free/guarantee/effortless) */
    [/\bbest value\b/i, 'a verifiable claim ("most common", "cheapest") — and make the real charge the most prominent number'],
    [/\bguaranteed?\b/i, '(legal review required — "guarantee" has strict legal meaning)'],
    [/\beffortless(ly)?\b/i, '(cut or get legal approval — it overpromises)']
  ],

  NAMING_PAIRS: [['file', 'document'], ['upload', 'import'], ['remove', 'delete'], ['folder', 'directory'], ['photo', 'image']],

  /* Standard phrase library. Caveat (books/02-principles.md): a next step
     must be viable and complete — "Try again" alone is only right when
     retrying without changes can actually succeed. */
  PHRASE_VARIANTS: [[/\b(retry|re-try|try once more|have another go)\b/i, 'Try again'], [/\b(learn more|more info|further information|read more)\b/i, 'specific link text that says where it goes ("See file size limits") — "Learn more" is a last resort'], [/\b(reach out|drop us a line|get in touch)\b/i, 'Contact support']],

  /* ---- Standards categories — coaching frame per category --------- */

  STD_CATEGORIES: {
    writing: {
      name: 'Writing',
      reasoning: 'Writing standards are not taste — they are the accumulated record of what users misread. Each flag is a place a reader could stumble.',
      tradeoffs: 'Standards can flatten a distinctive voice. Break one on purpose when you can say why — never by accident.'
    },
    design: {
      name: 'Design system',
      reasoning: 'The system exists so users learn a pattern once. An off-pattern component makes every screen a first screen.',
      tradeoffs: 'Following the system can feel constraining when the moment is unusual. Diverge deliberately and document it.'
    },
    product: {
      name: 'Product language',
      reasoning: 'Users learn your product\'s words. Two names for one thing doubles what they have to learn.',
      tradeoffs: 'A termbase ossifies if never questioned. Propose changes to it — don\'t silently break it.'
    },
    communication: {
      name: 'Communication',
      reasoning: 'Messages without owners and end dates become permanent residents. Screens fill up one "temporary" note at a time.',
      tradeoffs: 'Tracking lifecycle is bookkeeping nobody enjoys. The alternative is archaeology nobody can do.'
    },
    technical: {
      name: 'Technical constraints',
      reasoning: 'Copy ships into containers: pixel widths, character limits, other languages. Words that ignore the container break in production.',
      tradeoffs: 'Writing to the tightest constraint everywhere makes copy terse everywhere. Fit the constraint that is real for each placement.'
    }
  },

  /* =========================================================
     v2 (chat coach) — verdicts, heuristics, KPIs, strategy
     ========================================================= */

  /* Verdict vocabulary from the mid-period review. A message's value level
     plus how it should be delivered. "Non-verbal cue" and "solve through
     design" mean the answer is not words. */
  VERDICT_LEVELS: ['Critical', 'Very helpful', 'Helpful', 'Not helpful'],
  VERDICT_FLAGS: ['non-verbal cue', 'solve through design', 'interaction design change', 'conditional'],

  /* Named heuristics for defect logging. When a Plan B honors a bad
     constraint, the defect gets logged with the heuristic it breaks,
     phrased as user impact — not as rulebook citation. */
  HEURISTICS_LIBRARY: {
    'error-prevention': {
      name: 'Error prevention (Nielsen #5)',
      impact: 'The design lets the user walk into a failure it could have blocked. They do the work, then lose it.'
    },
    'proximity': {
      name: 'Proximity / grouping (Gestalt)',
      impact: 'Related things sit apart. The user answers a question, moves on, then gets scolded about it two steps later.'
    },
    'visibility-of-status': {
      name: 'Visibility of system status (Nielsen #1)',
      impact: 'The system knows something the user can\'t see — pending changes, applied rates — so the user assumes the worst.'
    },
    'recognition-over-recall': {
      name: 'Recognition over recall (Nielsen #6)',
      impact: 'The user must remember something the screen could show them — what they set, when, and why.'
    },
    'progressive-disclosure': {
      name: 'Progressive disclosure',
      impact: 'Everything shows at once, or the key fact hides behind a tooltip. Either way the user reads the wrong amount.'
    },
    'defensible-defaults': {
      name: 'Defensible defaults',
      impact: 'The default option carries no reason. The user can\'t tell if it\'s a recommendation or a trap.'
    }
  },

  /* Deceptive patterns, named. The coach cites these by name with UX people
     and translates them to user impact for everyone else.
     Governing rule (Kate, 2026-07-22): preselection is only a problem when
     it's part of a deceptive pattern that benefits the business rather than
     the user. A free default the user already bought, or a radio reporting
     a factual status, is neither. */
  DECEPTIVE_PATTERNS: {
    'preselection': {
      name: 'Preselection',
      impact: 'An option that benefits the business is chosen for the user, so inaction becomes consent.',
      test: 'Does the default benefit the business at the user\'s expense? If it costs them nothing and they already wanted it, this is just a sensible default.'
    },
    'hidden-costs': {
      name: 'Hidden costs',
      impact: 'The price appears after the user has committed time or left the product.',
      test: 'Is the full cost visible at the moment of the decision, not one screen later?'
    },
    'comparison-prevention': {
      name: 'Comparison prevention',
      impact: 'Each option\'s real cost is only visible after choosing it, so the options cannot be compared.',
      test: 'Can the user see what both paths cost and involve before picking one?'
    },
    'sneaking': {
      name: 'Sneaking (sneak into basket)',
      impact: 'A charge is added without an explicit, informed confirmation naming the amount.',
      test: 'Is there a step that states the amount and requires an affirmative action?'
    },
    'confirmshaming': {
      name: 'Confirmshaming',
      impact: 'The decline option is worded to make the user feel foolish for choosing it.',
      test: 'Is the "no" option stated as neutrally as the "yes"?'
    },
    'fake-social-proof': {
      name: 'Fake social proof',
      impact: 'A popularity claim that is not true or not verifiable.',
      test: 'Is "most companies choose this" actually measured, owned, and reviewed?'
    }
  },

  /* Success indicators the strategy can recommend. Rule: recommend 1–4
     KPIs, and at least some must be in-product. Usage-data collection is
     out of MVP scope — the coach indicates it would ask, and would use
     usage to set defect severity and fix effort. */
  KPI_INDICATORS: {
    inProduct: [
      'Workflow completion rate (vs. before the change)',
      'Shorter session length',
      'Fewer clicks on ?, help, or chat',
      'Fewer chat escalations to a live agent',
      'Fewer clicks inside the edit screens',
      'Fewer clicks between starting the change and submitting payroll',
      'Fewer sessions between starting the change and submitting payroll',
      'Less time between those events'
    ],
    outside: [
      'Fewer support calls on this topic',
      'Fewer live-agent chats on this topic'
    ],
    rule: 'Recommend 1 to 4. At least some must be in-product.'
  },

  /* The deliverable structure. Plan A is the ideal: workflow fixes allowed,
     bad requirements overridden and named. Plan B honors the constraints —
     and logs every honored defect with its heuristic. */
  STRATEGY_SECTIONS: [
    'Problem we\'re fixing',
    'Goals',
    'Indicators and recommended KPIs',
    'Message plan (content audit + content need)',
    'Plan A — fix the workflow',
    'Plan B — if the constraint holds',
    'Defect log',
    'Risks — screens not seen',
    'Open questions'
  ]
};
