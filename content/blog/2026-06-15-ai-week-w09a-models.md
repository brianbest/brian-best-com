---
title: "The Flagship That Launched and Then Disappeared"
date: "2026-06-15"
summary: "For June 9-15, one real frontier model shipped — Claude Fable 5 and Mythos 5 — then got pulled three days later. Google filled the gap with speech and speed, not a Gemini flagship."
tags: ["ai-weekly", "frontier-models", "benchmarks"]
---

For the week of June 9-15, there was exactly one new frontier model to talk about. And then for most of the week, you couldn't use it.

I checked the usual newsrooms — Anthropic, Google, OpenAI, xAI, Meta, Mistral, DeepSeek — for anything with a verifiable date inside that window. Here's what actually shipped.

### Fable 5 shipped, then got pulled

Anthropic launched Claude Fable 5 and Claude Mythos 5 on Tuesday, June 9th.

Same underlying Mythos-class model, two distributions. Fable 5 is the general-release version with full safeguards. Mythos 5 is the same weights with cyber safeguards lifted, restricted to Project Glasswing partners. Pricing for both: $10 per million input tokens, $50 per million output — less than half of Mythos Preview.

The safety design is the product here. When Fable's classifiers detect a cyber, bio/chem, or distillation-related request, it falls back to Claude Opus 4.8 instead and tells you. Anthropic says more than 95% of sessions never hit that fallback, so for most users Fable 5 *is* Mythos 5.

Three days later it didn't matter. On June 12, after Amazon researchers demonstrated a jailbreak that got Fable 5 to surface vulnerabilities, the US government required export controls on both models. Anthropic suspended them globally the same day.

They didn't come back inside this window. Controls on Mythos 5 were cleared to lift June 26, Fable 5 on June 30 — Anthropic announced a July 1 redeploy. So the only flagship that shipped this week also produced a three-week blackout. If you're tracking what matters, it's not the parameter count — it's that safeguards and government access are now gating distribution.

### Google didn't ship a Gemini flagship — it shipped bets

Google had two releases with clean June 9-15 timestamps, neither a new Gemini Ultra.

First, Gemini 3.5 Live Translate on June 9. It's an audio model, not a text flagship — near real-time speech-to-speech translation in 70+ languages, preserving intonation and pacing, staying a few seconds behind the speaker instead of turn-by-turn. It went to the Gemini Live API (public preview), AI Studio, and a private preview in Meet.

Second, DiffusionGemma on June 10. This one's more interesting if you care about inference. It's an experimental 26B MoE (3.8B active) under Apache 2.0 that generates text via diffusion — 256 tokens per forward pass, iterative refinement, up to 4x faster than autoregressive on dedicated GPUs. Google claims 1000+ tokens/sec on a single H100, 700+ on an RTX 5090, 18GB quantized. And they're honest about the tradeoff: overall quality is lower than Gemma 4. It's for local, low-concurrency use — inline editing, code infilling — where it loses its edge in batched cloud serving.

No new Gemini model in this window. The next Gemini move was computer-use in 3.5 Flash on June 24.

### What didn't ship

OpenAI, xAI, Meta, and Mistral had no verified flagship model release dated June 9-15 that I could pull from primary newsrooms.

xAI was busy on distribution instead — powering Gopuff's Go shopping agent with Grok models (June 9), eToro's Tori sentiment agent (June 10), and a Grok Build Plugin Marketplace bundling skills, slash commands, and MCP servers (June 11). No Grok 4.5 until July 16.

DeepSeek's closest flagship is V4-Flash, with a technical report dated June (arxiv:2606.19348) and Hugging Face updates June 22, but the official V4-Flash-0731 release landed July 31 — outside this window.

### Benchmarks: nothing to score

This is the quiet part. I couldn't pull a single MMLU, HumanEval, SWE-bench, or LM Arena movement table timestamped to June 9-15.

The best benchmark sheet near this week is DeepSeek's V4-Flash-0731 eval — and it's from late July — showing agentic suites, not classic academic tests: Terminal Bench 2.1, Cybergym, DeepSWE, Toolathlon-Verified. It's where the field's moved, but it doesn't belong to this week so I'm not scoring it here.

For this week, the scoreboard didn't move. The access list did.

If you're planning evals, don't wait for a leaderboard bump from this window. Test your own tasks against what was actually available before June 9, and track fallback rate and cost per completed task — that's what Fable's design is asking you to measure anyway.
