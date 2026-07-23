# Notification

## What it is

A message that reaches out to the user. The interruption cost is paid before a single word is read.

## Use it for

- Things that change what the user would do next.
- Deferred messages whose trigger has arrived.

## Don't use it for

- Anything that duplicates an in-product message — one channel per message.
- Habitual reassurance. Quiet products earn trust.

## Copy rules

- The first line must carry the whole message — previews truncate hard.
- Say what happened and what to do. No teaser copy that makes the user open it to find out.
- Every recurring notification has an owner and a way to stop it.

## In-product transient notifications (toast pattern)

For quick at-a-glance feedback on the outcome of an action, use the toast pattern rather than a reach-out notification: *(source: Polaris toast)*

- Noun + verb, three words or so: "Product updated", "Connection timed out" — not "Your product has been successfully updated".
- Success confirmations and minor, time-relevant issues only. Persistent or critical errors get a banner instead.
- Action label, if any, is a single verb (Undo, Retry) — never "Cancel", "OK", or "Dismiss".
- Display at least 10 seconds for accessibility.

## Open questions

- Frequency caps and digest rules — awaiting a real case (see `../patterns/notifications.md`).

## Related

→ [Email](email.md)
→ [12-governance](../books/12-governance.md)
→ [Communication cost](../heuristics/communication-cost.md)

## Sources

- Polaris toast: https://polaris-react.shopify.com/components/deprecated/toast
