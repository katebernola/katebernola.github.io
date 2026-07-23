# Dialog

## What it is

A modal overlay that stops everything. It demands full attention — that demand must be earned.

## Primary objective

Require an action before the user can proceed — confirmations and conditional changes. Best for focused, temporary tasks, never persistent UI. *(source: Polaris modal)*

## Use it for

- Confirming consequential or irreversible actions.
- One focused task with focused actions. One dialog, one job.

## Don't use it for

- Complex forms or large amounts of information. *(source: Polaris modal)*
- Non-blocking content (use a popover) or page-context notifications (use a banner). *(source: Polaris modal)*
- Support information. A door in the face for optional content.

## Copy rules

- Title is verb + noun: "Edit email address", "Delete customer?" — not "Edit the email address for this order". *(source: Polaris modal)*
- **Title + button tell one cohesive story on their own** — users read title → button, then act; the body is optional depth, never the glue. Different verbs are often helpful: the button can add a unique piece of information. See [Title plus button](../heuristics/title-plus-button.md).
- **Destructive confirmations are the exception: mirror the words.** Title "Delete customer?" gets button "Delete customer" — never "Remove", never "OK". Re-verification friction is the point when the action can't be undone.
- Body starts with the consequence, critical information first. Use "need", not "must", for requirements. *(source: Polaris modal)*
- State what happens and what cannot be undone — confirmations get clicked on muscle memory.
- **Two buttons maximum** (primary + secondary) — more makes hierarchy unclear, especially on mobile. *(source: Polaris modal)*
- Button labels are verb + noun ("Delete 12 files"), never "OK" for consequential actions; common actions (Save, Cancel) may stand alone. *(source: Polaris modal)*
- Character budget for the body: **240** (canonical: [`../rules.js`](../rules.js) → `CHAR_BUDGETS.modal`).
- Consequence-first copy may lower completion of destructive actions. That is the point.

## Interaction requirements

- Dismissible four ways: X, Cancel, Esc, click outside. Focus trap while open. *(source: Polaris modal)*

## Related

→ [07-component-standards](../books/07-component-standards.md)
→ [06-placement-rules](../books/06-placement-rules.md)

## Sources

- Polaris modal: https://polaris-react.shopify.com/components/deprecated/modal
