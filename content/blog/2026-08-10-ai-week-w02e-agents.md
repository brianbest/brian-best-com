---
title: "This Week in AI Agents: Code Review Became an Agent"
date: "2026-08-10"
summary: "GitHub didn't ship a new model July 28–Aug 3 — it shipped the plumbing: review that runs your tools, PRs that stack, and agents you trigger with a comment."
tags: ["ai-agents", "coding-tools", "github-copilot"]
---

If you were waiting for a new coding model last week, you missed the actual shift.

Between July 28 and August 3, GitHub dropped a dozen changes and none of them were "smarter autocomplete." The work was all plumbing — making review, PRs, and the editor behave like an agentic system instead of a chat box with a diff view.

That's more consequential than a benchmark bump.

### Code review grew a brain

The headline is July 29: Copilot code review support for Agent Skills and MCP is now generally available. Previously in preview since June 2, now on for Pro, Pro+, Business and Enterprise.

This is the biggest change to review I've seen in a while. You drop a `SKILL.md` under `.github/skills/` and review actually invokes your team's standards and internal tools during the pass. Wire up an MCP server and it pulls context from your issue tracker or service catalog — read-only, but live. GitHub's own MCP and Playwright's are the exceptions where it does more.

Same week, Copilot cloud agent got a reasoning knob (Aug 3). You pick a level alongside the model when you delegate — higher reasoning helps on complex tasks, burns more tokens and credits. It's the first cost/performance dial for the cloud agent, and it mirrors what OpenAI did with reasoning effort on o1/o3.

Review isn't a linter anymore. It's an agent with tools and a budget.

### PRs learned to stack, actions learned to self-reference

July 30 shipped two things engineers will actually feel Monday morning.

**Stacked PRs in public preview.** Ordered series of PRs you can review in parallel and merge in one click. Vercel's been using it on Next.js for months — Tim Neutkens said it let them ship smaller changes while building larger features. If you've been duct-taping `ghstack` or `spr`, this is the native version.

**Self-repository syntax: `$/`.** This one's small and perfect:

```yaml
# Before: checkout dance
# - uses: actions/checkout@v4
# - uses: ./path/to/local/action

# Now: no checkout, pinned to the running commit
- uses: $/actions/deploy@v1
```

`uses: $/path/to/action` resolves to your own repo at the exact commit running the workflow. Works in workflow steps, composite actions, nested composition, reusable workflows. If you're having an agent scaffold workflows, this eliminates a whole class of fragile relative-path bugs.

And in the IDE, both VS Code (July 30, v1.127–v1.131) and Visual Studio (July 30) pushed agents to the front. VS Code's new Agents window gives you an editor panel, compact diffs, and worktrees for any harness — Copilot, Claude, Codex. Visual Studio's new Agent preview runs on the same Copilot SDK as VS Code and CLI, with portable skills. The pattern's clear: worktrees are the primitive, the IDE is the orchestrator.

### Now you can poke agents with a comment

The Aug 3 pair closes the loop.

**Trigger Copilot automations with comments** — also Aug 3. You can set an automation to fire on `issue_comment` or `pull_request_comment` with a trigger phrase. Comment `/generate-docs` on a PR and the cloud agent updates docs. Comment a stack trace on an issue and it investigates. It's available on Pro/Pro+/Max/Business/Enterprise (Business/Enterprise need the cloud agent policy on).

Pair that with **enterprise team specialization for managed settings** (Aug 3) and **team-level model targeting** (July 31, public preview) and the governance story clicks: enterprises are moving from org-wide toggles to per-team policies. Who gets which models, who can remote-control a CLI session from a phone — now at the team level.

One retirement to note: **GitHub Models was fully retired July 30** — playground, catalog, inference API, BYOK, all gone. If you were prototyping on `api.github.com/models`, you're migrating to Foundry or Copilot. GitHub's done trying to host inference.

### What I'd try next

Set up one stacked PR with two layers and point review with a single SKILL.md at it. Then add a comment-triggered automation on that repo — even a dumb one like "create follow-up issues." You'll learn more about your agentic workflow from that hour than from swapping models.

I couldn't verify Cursor, Claude Code, or Codex releases for this exact window — their changelogs were behind Cloudflare/JS walls when I pulled Aug 11. So this week is a GitHub story, but the direction is universal: the moat isn't the model anymore. It's who routes, who reviews, and who remembers.
