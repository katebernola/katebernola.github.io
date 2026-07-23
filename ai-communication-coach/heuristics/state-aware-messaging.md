# State-aware messaging

## The idea

An action message should appear exactly when the user can act, and go quiet when they can't. Persistent is not the goal. Accurate is.

## The failure on both sides

**Silent when they're blocked.** In the tax registration flow, the dashboard alert clears the moment the agency ID is added — but the user still can't have their taxes filed until the auto-file service is activated and the agent is assigned. The loudest cue in the product disappears at the exact moment the user feels finished and isn't.

**Nagging when they can't act.** The naive fix — "persist the alert until everything is done" — is also wrong. After a user submits to a partner service, there's roughly a day where nothing is actionable while the partner works. An alert during that window asks for something impossible and trains the user to ignore it.

## Rules

- Model the states, not the endpoints: *action needed → in progress, nothing to do → action needed again → done.*
- Say what state they're in when they can't act ("we're reviewing, check back in about a day") rather than either nagging or going silent.
- When the action returns, word it for what's actually required now — which may differ from the last one. In the tax flow the next step is either "submit a signed form" or "assign us as your agent at the agency site," depending on the agency.
- A cleared alert is a claim that nothing is needed. Only clear it when that's true.

## Related

→ [propagate-existing-patterns](propagate-existing-patterns.md) — the auto-file setup tracker is this pattern, already built
→ [../mistakes/late-validation.md](../mistakes/late-validation.md)
→ [../books/12-governance.md](../books/12-governance.md) — messages need owners and end dates
