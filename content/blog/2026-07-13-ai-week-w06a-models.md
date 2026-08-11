---
title: "Sonnet 5 Gets Cheaper, Leanstral Gets Proofs, GeneBench Gets a Blank Slate"
date: "2026-07-13"
summary: "June 30 to July 6 gave us a cheaper Sonnet that chases Opus, a 6B-active prover that saturates miniF2F, and a new bio benchmark with no scores yet."
tags: ["ai-models", "benchmarks", "weekly-roundup"]
---

If you wanted a bigger number last week, you got a cheaper one instead.

June 30 to July 6 didn't bring a new frontier from OpenAI or Google. It brought Anthropic making its middle tier act like a frontier, Mistral proving math finds real bugs, and OpenAI launching a benchmark without results. More useful than another +2% on MMLU.

### What shipped

**Claude Sonnet 5 — June 30.** Anthropic's pitch is one line: "most agentic Sonnet model yet." It's now default for Free and Pro, available to Max/Team/Enterprise, API id `claude-sonnet-5`, at $2 input / $10 output per million tokens. That's permanent — the charts still show $3/$15, but the text says $2/$10 stuck.

The claim is cost-performance, not peak. Anthropic says Sonnet 5 is close to Opus 4.8 ($5/$25) but cheaper, and a strict improvement over Sonnet 4.6. The named harnesses are BrowseComp and OSWorld-Verified, where Sonnet 5 "covers a much wider range of cost-performance options than Opus 4.8" and can match Opus at higher effort.

I couldn't verify the full table — it's an image on the post, no HTML numbers. So I'm not quoting GPQA or SWE-bench deltas here. The safety note I could verify: lower rate of undesirable behaviors than 4.6, and "much lower ability to perform cybersecurity tasks than our current Opus models." That's deliberate tiering — capability *down* by design.

**Leanstral 1.5 — July 2.** The opposite of a chat flagship. 119B total, 6B active, Apache-2.0, on Hugging Face and a free API. Three-stage training with CISPO RL, using a multiturn Lean loop and a code-agent loop with SafeVerify.

The numbers are in-text for once:

* miniF2F: 100% on validation and test. Saturated.
* PutnamBench: 587/672 solved, scaling from 44 at 50k tokens to 493 at 1M to 587 at 4M. Edges Seed-Prover 1.5 high by 7 problems at ~$4/problem vs ~$300+ for Seed-Prover.
* FATE-H/X: 87 and 34 problems solved — SOTA on both by Mistral's count.

The part that matters: across 57 Rust repos, the Leanstral → Aeneas → Lean pipeline flagged 47 violated properties, 11 genuine bugs, 5 previously unreported on GitHub — including a `Std.U64.MAX` zigzag overflow. That's a prover, not a chatbot.

**GeneBench-Pro — June 30.** OpenAI announced it via RSS: "a new benchmark testing AI performance in genomics, biology, and scientific research using complex, real-world datasets." Companion "Inside GeneBench-Pro" same day.

I couldn't pull the page body — Cloudflare-challenged on fetch — so no dataset list or baseline scores. It's a harness launch, not a result. Wait for numbers.

### What didn't ship

No verified flagship or general benchmark from Google DeepMind, Meta, or xAI inside this window that I could fetch with a clean date. Their newsrooms were JS shells or Cloudflare-blocked. That doesn't prove silence — just nothing verifiable.

Anthropic did redeploy Claude Fable 5 globally July 1 after export controls (applied June 12) were lifted June 30, but that's a re-ship of June 9 weights with a new 99%-block classifier — a policy story, not a new model.

### My take

This was the week labs sold efficiency, not intelligence.

Sonnet 5 says you don't need Opus if you'll pay for effort. Leanstral says you don't need dense 100B+ if you'll pay for verification loops. Both pitch cost per solved task.

If you're routing today: try `claude-sonnet-5` where you reached for Opus and measure tool use, not chat. If you touch formal methods or Rust, Leanstral is the only open-weights model this window with receipts — and at $4 a Putnam problem, you can afford to let it think.
