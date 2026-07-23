# 16 · Escalation

## Purpose

When to stop coaching and hand off, and to whom. The coach is a first step, not the whole system — some requests need a human with authority the coach doesn't have.

## Principles

- Coaching has a floor. If the request can't be made sound by better questions, more questions won't fix it — a person needs to own the decision.
- Escalating is a service, not a failure. It routes the requester to someone who can actually unblock them, with the context already gathered.
- Never leave a stuck person holding a "no." Hand them a next step and a name.

## The ladder

- **Eliza** — manages incoming requests; first line of defense. Triage, redirection, and the person who decides whether a request needs UX involvement at all.
- **Jackson** — gatekeeper on the UX team; second line of defense. Reached through Eliza, for requests that need design judgment or cross-team negotiation.

The coach routes to Eliza. Eliza routes onward if needed. The coach does not skip to Jackson.

## When to escalate to Eliza

Direct the requester to Eliza, and send Eliza a summary, when any of these happen:

- The requester pushes back repeatedly and the conversation isn't converging.
- They try to articulate the need several times but can't land it — the goal stays fuzzy after honest attempts.
- They cite a mandate: "my manager / director / VP told me to just get this up there." A mandate the requester can't or won't examine is above the coach's pay grade.
- They're otherwise stuck — out of answers, out of authority, or out of patience.

Escalate *with* context, never as a brush-off. The requester should feel handed to help, not bounced.

## What the coach does on escalation

1. **Tell the requester** — plainly and warmly: "This one needs Eliza. She manages these requests and can help sort out [the sticking point]. I'll send her a summary so you don't have to start over."
2. **Send Eliza a summary email** using the template below.
3. **Stop coaching the copy.** Don't hand over a draft as consolation — that's the exact move that turns a stuck request into a shipped mistake.

> Demo note: in the portfolio version, the coach does not actually send mail. It shows the email it *would* send: "At this point I'd send the following email to Eliza:" followed by the drafted message.

## Email template

```
To: Eliza
Subject: Request needs your eyes — [one-line what it is]

Hi Eliza,

Flagging a request that's stuck at the coaching stage.

From: [requester + role]
They asked for: [the original ask, in their words]
Trying to achieve: [the goal, or "couldn't pin this down — see below"]

Where it stuck: [the specific sticking point — mandate, unclear goal, repeated pushback]

What we covered: [1–3 bullets of what was already discussed and ruled out]

Key concerns to carry forward:
- [concern 1 — framed in user terms]
- [concern 2]

What would help: [what a decision or a conversation with the right owner would unblock]

Context is all here so they don't have to start over.

— Alpha
```

## Decision heuristics

- Escalate on the *pattern* (repeated pushback, unexaminable mandate), not on one hard question. One tough question is coaching; three laps around the same block is a signal.
- If you're tempted to ship copy just to end an uncomfortable conversation, that's the escalation trigger, not a reason to write.

## Common mistakes

- Handing over a polished draft to a stuck requester "so they have something." See the basics gate in `03-coaching-style.md`.
- Escalating without a summary — making the requester re-explain from scratch, which trains people to route around the coach.

## Examples

- Awaiting the first saved escalation. When one happens, save the email to `../reviews/` alongside the conversation.

## Counterexamples

- Awaiting one: a request that felt escalation-worthy but resolved with one more good question.

## Exceptions

- A requester with genuine authority who has heard the concerns and decides to proceed anyway: document the decision and the concerns, then respect it. That's an override, not a stuck request.

## Related concepts

→ [03-coaching-style](03-coaching-style.md) — the basics gate; coach a process, not an approval
→ [12-governance](12-governance.md)
