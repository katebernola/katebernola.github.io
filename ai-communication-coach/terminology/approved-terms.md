# Approved terms

One approved word per concept. Users learn your product's words — two names for one thing doubles what they have to learn.

*Seed termbase. Replace and extend with the real product's terms. Canonical data: [`../rules.js`](../rules.js) → `TERM_RULES`, `NAMING_PAIRS`, `PHRASE_VARIANTS` — the app loads that file; edit it first, then this table.*

| Use | Not | Why | Source |
|---|---|---|---|
| sign in / sign out | log in, log out, login | One verb for the action, everywhere | Intuit |
| email | e-mail | Modern spelling | Intuit |
| select | click | Not everyone has a mouse | Intuit, Polaris |
| turn on / turn off | enable / disable | Plain, and "disabled" is exclusionary | Intuit, Polaris inclusive language |
| enter | type | Not everyone types | Intuit |
| find | search | Implies success; feels empowering | Intuit |
| unavailable | grayed out, dimmed, inactive | Names the state, not the pixels | Intuit |
| wrong / not working | invalid | "Invalid" is jargon and blames the user | Intuit, Polaris error messages |
| compromised | hacked, breached, leaked | Accurate without panic | Intuit |
| stopped responding | crashed | Calm, specific | Intuit |
| issue | bug | Reduces anxiety | Intuit |
| suspicious activity | fraud | Less legally charged | Intuit |
| replace | overwrite | Less alarming | Intuit |
| close | dismiss | Plainer | Intuit |
| money | funds | Plain language | Intuit |
| change plans | downgrade | Doesn't shame the choice | Intuit |
| bank transfer (ACH) | ACH alone | Explain before abbreviating | Intuit |
| user ID | username, ID | One name for the concept | Intuit |
| buy | purchase | Plain language | — |
| to | in order to | Shorter, same meaning | Intuit |
| before | prior to | Plain language | — |
| help | assistance | Plain language | — |
| use | utilize, leverage | Plain language | — |

Caution words (use only with care, never in instructions): easy, simple, just, only, quick — ease is subjective and discourages anyone struggling. *(sources: Polaris inclusive language; Intuit word list)*

## Claim words

Claims about value or outcome need to be legally defensible, or they don't ship:

- Defaults and recommendations get verifiable labels: "most common", "cheapest", "includes your current features" — facts anyone can check.
- "Best value" is technically acceptable but borders on a dark pattern — especially when the focus is a monthly price and the user will be charged multiple months up front. The real charge is the most prominent number in the visual hierarchy — a per-period price never outranks it. See [Indefensible defaults](../mistakes/indefensible-defaults.md).
- "Free", "guarantee", "effortless": legal review before use; prefer "included" over "free". *(source: Intuit word list)*

## Naming pairs to watch

Pick one and hold the line: file/document, upload/import, remove/delete, folder/directory, photo/image.

## Standard phrase library

Reuse these exactly — users recognize them faster than fresh phrasing:

- Try again
- Contact support
- Got it

Caveats:

- A standard phrase is not automatically a viable next step. "Try again" is only right when retrying without changes can actually succeed — otherwise name the change first ("Reduce the file size and try again"). See [One next step](../heuristics/one-next-step.md).
- Links say where they go. "Learn more" is too vague — prefer specific link text ("Get pricing details", "See file size limits"); use "Learn more" only as a last resort. *(sources: Intuit word list; Polaris alternative text)*
- Buttons lead with a strong verb + noun ("Activate Apple Pay", not "Try Apple Pay"), except common actions (Save, Cancel, OK). *(source: Polaris modal / banner content guidelines)*

## Related

→ [banned-terms](banned-terms.md)
→ [product-language](product-language.md)
→ [08-content-standards](../books/08-content-standards.md)
