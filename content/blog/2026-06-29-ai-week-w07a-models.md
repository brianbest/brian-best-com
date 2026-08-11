---
title: "No Open Flagship This Week — Just Gated Access"
date: "2026-06-29"
summary: "June 23-29 had no open flagship launch — instead GPT-5.6 was throttled at the White House's request and Mythos went gated to 100+ orgs."
tags: ["ai-weekly", "frontier-models", "benchmarks"]
---

If you were waiting for a new flagship to actually ship last week, it didn't.

For June 23-29 I checked the usual newsrooms — OpenAI, Anthropic, Google, Meta, xAI, Mistral — and couldn't verify a single GA flagship release with a date in that window. No GPT-5, no Claude 5, no Gemini 2.5 Pro, no Grok 4. What I *could* verify was weirder: the biggest models existed, they just didn't ship openly.

### GPT-5.6 went gated

The headline model of the week was OpenAI's GPT-5.6 — and the story was that you couldn't have it.

TechCrunch reported June 25 that the White House asked OpenAI to slow-roll the release over safety concerns, pushing it to a select partner group instead of general availability. OpenAI followed June 26 with a post saying it had limited the GPT-5.6 rollout — including a variant tagged "GPT-5.6 Sol" — and added: "We don't believe this kind of government access process should become the long-term default. It keeps the best tools from users, developers, enterprises, cyber defenders, and global partners who need them."

I couldn't pull the primary OpenAI blog directly to cross-check — it returned a Cloudflare challenge on my fetch — so I'm relying on TechCrunch's reporting here. But the signal is consistent: the frontier was ready, distribution was the bottleneck.

### Mythos went the other way

Anthropic's Mythos 5 had the opposite distribution story. Also per TechCrunch, the Trump administration cleared Mythos for use by 100+ US companies and agencies on June 26-27, including their non-American employees. Not a new weights drop — a permissions change.

And the second-order effect hit immediately. On June 27 TechCrunch noted Asian startups launching "Mythos-like" models explicitly pitched as without export-ban risk, with the deck warning U.S. labs "may never recover this enormous market." We've seen this movie with chip controls. Now it's happening at the model layer.

### The actual hardware that shipped: Jalapeño

The one concrete artifact that *did* ship was infrastructure. OpenAI unveiled its first custom inference chip June 24 — Jalapeño, built with Broadcom, "designed specifically for the unique needs of OpenAI's inference systems."

No model card, no eval table. But if you're building agents that loop, this matters more than a point on MMLU. Inference cost and latency are what's gating deployment, and a custom chip is a flagship move even if it doesn't have a leaderboard score.

### Benchmarks: nothing to score

And that's the last piece — there was nothing to score.

I ran the full June 23-29 TechCrunch dump (100 posts) for MMLU, GPQA, HumanEval, SWE-bench, MATH, AIME, LiveBench — zero hits with numeric results. No verified eval sheet from any lab in that window. The closest leaderboard-adjacent item was a June 29 piece noting LM Arena is now a "$100M business" — no scores, no movement table.

That's not stagnation. It's a coordinated pause. When access is gated by government request, you don't publish a chart bragging about the capability you're not allowed to ship.

### What I'd take from a gated week

This week wasn't about which model is smartest. It was about who gets to use it.

If you're planning around this:

1. **Don't wait for an open launch.** Build your evals assuming tiered access — partner-only flags, government-cleared lists. Your routing logic needs a "not available here" branch now.
2. **Watch inference economics, not just intelligence.** Jalapeño tells you where OpenAI thinks the edge is — cost per token at scale, not another reasoning bump.
3. **Track the clones.** If Mythos-like models fill the export-ban gap, you'll have a bifurcated market with different models behind different borders. Test there too.

The labs didn't need a bigger number last week. They needed permission to ship. That's the benchmark that mattered.
