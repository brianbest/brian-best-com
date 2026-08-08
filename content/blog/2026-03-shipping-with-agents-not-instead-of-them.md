---
title: "Shipping With Agents, Not Instead of Them"
date: "2026-03-08"
summary: "The 'AI replaces developers' framing is bad for both your career and your codebase. After two years of agent-assisted shipping at Axonify, here's what actually works."
tags: ["agentic-ai", "developer-experience", "axonify"]
---

The discourse online keeps oscillating between two bad framings: agents will replace developers, or agents are toys that produce slop. Both are wrong in ways that are unhelpful for anyone trying to actually ship software.

What's true is more interesting. Agents change the unit of work, not the worker.

## The unit-of-work shift

Pre-agent, the unit of work was "a change I will type." Post-agent, the unit of work is "a change I will review."

That sounds like a small shift. It is not. It restructures almost every part of how a senior dev spends their day:

- **Reviewing matters more than typing.** If an agent can write a passable PR in ten minutes, the bottleneck is the human who has to decide whether it's correct. Review velocity is now the rate-limiter on shipping.
- **Tests become specifications, not chores.** When the agent reads your tests to figure out what "done" means, weak tests produce wrong code. Strong tests produce right code. Test discipline went from "good practice" to "load-bearing."
- **Context-setting is the real prompt.** "Build this feature" produces garbage. "Build this feature, here's the existing pattern in `payments/charges.ts`, here's the constraint we have around idempotency keys, here's the test fixture that proves it works" produces something you can merge.

## What I tell my team

Three rules of thumb that have held up across about 18 months of agent-assisted shipping:

1. **Never accept code you can't read.** If the agent produces 400 lines you don't fully understand, you don't have working code — you have a bug you haven't found yet. Make it explain. Make it simplify. Reject anything you can't defend in review.
2. **Use agents for the parts you find boring.** Boilerplate, migrations, test scaffolding, refactors with clear acceptance criteria. Don't use them for the parts you find interesting — that's where you build the taste that makes you valuable.
3. **Treat agent output like a junior dev's PR.** It deserves the same review rigor, the same "why did you choose this approach?" pushback, and the same expectation that you'll catch and explain the mistakes.

Every agent PR on our team goes through the same checklist we use for human PRs:

```text
review-checklist.md — applied to every agent PR
- [ ] Can I explain this diff without re-reading the prompt?
- [ ] Do tests encode the constraint, not just the happy path?
- [ ] Is there a simpler shape that passes the same tests?
- [ ] Would I be comfortable owning this code after the agent is gone?
```

If the answer to any of those is no, the PR doesn't ship — no matter how green the CI is.

## What I don't tell my team (but should)

The senior devs on my team got more valuable, not less, when we adopted agents. The juniors had a harder time, because the gap between "I can prompt my way to working code" and "I can tell when working code is wrong" is the gap that experience used to be.

I don't have a clean answer for closing that gap, but we have a working hypothesis we're iterating on:

- **Paired review on every agent PR** — a junior authors the prompt and the senior reviews the output with them, narrating what they're checking and why. The point isn't gatekeeping; it's transferring the taste for what's wrong.
- **A shared review rubric** (like the checklist above) so "good" isn't vibes — it's four checkable boxes.
- **Guardrails, not freedom** — juniors start with agents scoped to well-tested areas (migrations, test scaffolding, mechanical refactors) before they get the keys to ambiguous product work.

It doesn't fully close the gap. But "agents will figure it out" definitely won't either.
