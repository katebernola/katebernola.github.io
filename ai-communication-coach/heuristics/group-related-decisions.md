# Group related decisions

## The idea

Messages about a decision belong next to that decision. When feedback about an earlier answer appears after later steps, the user has to walk backwards through their own work to understand what went wrong.

## The failure this prevents

The mid-period flow ran: input date → input new salary → "there's something wrong with your date." The date problem surfaced two steps after the date — attached to nothing. Putting all date-related messaging together, with zero other content changes, would make the flow substantially easier to process.

## Rules

- Consequences of a choice appear at the choice, not downstream.
- If the flow order fights this, the flow order is the defect — log it (error prevention, proximity/grouping) rather than papering over it with copy.
- Reordering steps so related decisions sit together can beat any wording improvement.

## Related

→ [../mistakes/late-validation.md](../mistakes/late-validation.md)
→ [audit-existing-cues](audit-existing-cues.md)
