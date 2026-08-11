---
title: "This Week in Open Source: One Header Deleted, One Flash Preview"
date: "2026-08-10"
summary: "July 28 to Aug 3 was quiet for open weights and papers — the only verifiable open source ship was MCP going stateless on July 28, plus DeepSeek's V4 Flash hitting beta July 31."
tags: ["open-source", "ai-weekly", "research"]
---

You'd expect open source to fill the gap when the big labs go quiet. It didn't — not this week.

Between July 28 and August 3, I couldn't verify a single new open-weight release or a fresh arXiv paper with a date in that window. No new Apache 2.0 checkpoint, no new eval sheet on Hugging Face, nothing citable from primary sources. That's not me missing it. Hugging Face, arXiv, and GitHub trending were all quiet for that exact 7-day slice, and the labs' own newsrooms were behind Cloudflare or JS hydration anyway.

That silence is useful to name out loud. I'd rather tell you nothing shipped than invent a paper from July 30.

### The one thing that did ship: MCP goes stateless

The most important open source change actually landed *on* July 28 — the MCP spec revision `2026-07-28`.

One deletion: `Mcp-Session-Id` is gone. So is the sticky `initialize` handshake.

Before, your client had to pin to one replica after `initialize`. Now any request can hit any replica. It's a line deleted from a spec, but it's the difference between "works on my laptop" and "scales behind a load balancer."

If you run MCP servers in production, this is your week-one todo. Upgrade your SDKs, drop the session affinity config, and test horizontal scaling. The ecosystem catch-up — Ruby SDK 1.0, the Agents Working Group — all started from this change, but they landed the *next* week. This week was the spec.

### Just inside the window: DeepSeek-V4-Flash

DeepSeek put `DeepSeek-V4-Flash` (tagged `0731`) into public beta on July 31 — four days before most roundups closed.

Same API shape as before, but the pitch is specific: stronger agent performance than V4-Pro-Preview, with V4-Pro proper still "coming soon." No verified benchmark sheet I could pull with a stable date — no SWE-bench or τ-Bench numbers with a July 31 stamp. So treat it as a preview to benchmark yourself, not a leaderboard claim.

If you have DeepSeek API access, it's the only new weight-adjacent thing worth running your own agent loop against from this window. Measure tool-use completion on your MCP servers, not token speed.

### What didn't ship (and why I'll call it out)

No verifiable papers for this window. The papers that *did* matter — CreativeInstruct (2608.07460), CoinRAG (2608.07458), Evidence-RL (2608.08021) — are all stamped Aug 7-8. I'm not backdating them to make the week look busy.

Same for open weights. Muse Glimmer 30B Apache 2.0, LFM2.5-2.6B, Shieldstral 3B — all Aug 4-10. They were the open source explosion the *next* week, and they're the direct answer to this quiet week. But they don't belong in a July 28-Aug 3 post.

### So what do you do with a quiet week?

Two things.

1. **Update MCP.** If you pinned sessions, unpin them. Stateless MCP is the plumbing that makes everything next week possible. It's boring and load-bearing.

2. **Prep your eval harness.** A quiet week is the best time to run your own numbers. When Flash or Glimmer drops into your stack, you want a before/after on your tasks, not a vendor chart.

Next week open source would do the shipping the labs didn't — 30B on one GPU, 2.6B on device, safety as a prompt. This week just cleared the runway.
