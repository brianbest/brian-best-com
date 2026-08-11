---
title: "Two Flagships in 48 Hours — and an 8B Robot That Actually Shipped a Number"
date: "2026-07-20"
summary: "July 7-13 was loud: OpenAI shipped GPT-5.6 and xAI shipped Grok 4.5 within a day of each other, while the only clean benchmark in the window came from Mistral's 8B Robostral Navigate."
tags: ["ai-models", "benchmarks", "weekly-roundup"]
---

If you blinked July 7-13, you missed two flagships.

OpenAI and xAI shipped within about 24 hours of each other. That's not the usual drip — that's both labs deciding the same window was the right time to go.

### What shipped

**GPT-5.6 — July 9.** OpenAI put up the family page for GPT-5.6 that afternoon (HN syndication says `2026-07-09T17:04:14Z`, 1.5k points). It's not one model — it's Sol / Luna / Terra. Sol is frontier, Terra is the middle, Luna is the small fast one. Preview for Sol had gone up June 26, so this was the full family landing.

I couldn't pull a clean benchmark table from the primary page on fetch — `openai.com/index/gpt-5-6/` was behind a Cloudflare challenge when I checked, and the system card PDF at `deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf` is live (4.4MB, returns 200) but it's a Flate-encoded PDF that doesn't scrape cleanly. No verified MMLU, GPQA, or SWE-Bench numbers hit RSS in-window that I could confirm. If you want the evals, you'll need to open that PDF in a reader — I'm not going to invent them.

What matters more anyway: they shipped a family designed to be routed, not a single model to be worshipped. That pricing wouldn't show up until July 30 — Luna down 80% to $0.20/$1.20, Terra to $2/$12, Sol flat at $5/$30 — but the architecture was the tell on the 9th.

**Grok 4.5 — July 8-9.** xAI's turn came right alongside it. HN algolia has it as "Grok 4.5" at `2026-07-08T18:00:32Z`, my own notes from the following week call it "Grok 4 on July 9." I'm flagging both because the primary `x.ai/news/grok-4-5` page was also Cloudflare-blocked on direct fetch, so I couldn't resolve the naming cleanly. Either way, it's a flagship-class Grok in the same 48-hour window as GPT-5.6. No verified benchmark delta from Artificial Analysis or LMArena dated to that week that I could scrape.

**Robostral Navigate — July 8.** The only model in the window with a verifiable, in-text benchmark was Mistral's. RSS says `Wed, 08 Jul 2026 12:00:59 GMT`, and the page meta confirms it: 8B, 76.6% on R2R-CE, single RGB camera. No depth sensor, no LiDAR, no multi-cam rig.

That's not a chat benchmark. It's embodied navigation — can the robot follow language instructions through messy indoor spaces with cheap sensors. And Mistral put a number on it. Lean and specific beats vague and frontier-sized for once.

### What didn't ship

No verified flagship or general benchmark from Anthropic, Google, or Meta inside July 7-13 that I could pull with a clean date. Anthropic's news page is a JS shell, Google's Gemini blog is too, and Meta's RSS didn't show anything in-window. That doesn't mean zero work — it means nothing hit the official newsrooms with a verifiable date I could confirm.

And notably, no head-to-head eval table comparing GPT-5.6 vs. Grok 4.5 dropped that week. Two flagships, same day, zero shared harness. Labs are shipping faster than eval culture can keep up.

### My take

This was a routing week disguised as a flagship week.

Everyone wants the IQ chart. What we got was more interesting: two labs saying "here's the top model, and here are the smaller ones you're actually supposed to use." And one lab saying "here's what 8B can do when you stop adding sensors and start adding smarts."

If you're deciding what to eval, don't wait for a clean GPT-5.6 vs Grok 4.5 leaderboard — run your own tasks. Route Luna/Terra where you can, save Sol for the hard 5%, and if you touch embodied stuff, Robostral's R2R-CE number is the only score this week with receipts.

The benchmarks will catch up. The architectures already shipped.
