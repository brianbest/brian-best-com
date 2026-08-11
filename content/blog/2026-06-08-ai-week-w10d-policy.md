---
title: "This Week in AI Policy: The Quiet Before the Export Controls"
date: "2026-06-08"
summary: "For June 2-8, no AI law passed and no regulator moved — but GitHub shipped governance plumbing and WWDC opened, right before export bans rewrote the rules the next week."
tags: ["ai-policy", "regulation", "industry-moves"]
---

For once, nothing happened. And that's the policy story.

For the week of June 2-8, I couldn't verify a new AI law, executive order, court ruling, or enforcement action with a clean date inside the window. I hit the usual primaries — White House newsroom, FTC press releases, congress.gov, EUR-Lex — and got gated pages, 404s, or nothing dated that week. That matches what my other sweeps for the same dates found: no flagship model, no benchmark table. June 2-8 was just quiet.

That doesn't mean governance stood still. It just moved through shipping, not statute.

### The only dated move that mattered

**June 2: GitHub put governance in the pull request.** Copilot code review for Agent Skills and MCP went into preview — letting Copilot review code that uses agent tooling and Model Context Protocol. It didn't go GA until July 29 for Pro through Enterprise, but June 2 is the start date.

It's not a law. It's arguably more consequential for how teams actually ship. If your agents touch your repo, you want policy checks where engineers already live, not in a separate safety dashboard. This was that plumbing, early.

### WWDC opened, rules got a refresh

**June 8: WWDC26 opened** at Apple Park and online (through June 12). I verified the dates on Apple Developer News — three separate June 8 entries — but couldn't pull a clean Apple Intelligence model launch with numbers to cite inside the window. Distribution at iOS scale matters for policy, but there was no statute to score that week.

What Apple did ship in writing: Time Allowances in iOS 27 / iPadOS 27 / macOS 27 and a revised Developer Program License Agreement plus App Review Guidelines, both noted June 8. That's app governance, not AI Act governance. But if you ship on Apple platforms, those are the compliance docs you actually read.

Smaller signals filled the gaps: Apple Design Awards announced June 2, Berlin Developer Center announced June 3. Not AI regulation — just the reminder that platform policy keeps moving even when AI policy doesn't.

### What didn't happen

No verifiable FTC action dated June 2-8 — ftc.gov was WAF-blocked on my pulls and the press-release RSS 404'd. No new EUR-Lex implementing act; the next real teeth everyone was waiting on was still August 2 for GPAI obligations. No congress.gov markup or floor vote I could anchor inside the week behind the Cloudflare gate.

And that's worth saying plainly. A lot of recaps will backfill this week with headlines that actually landed June 9-15. They didn't happen yet.

The next week is when it got loud: Anthropic's Fable 5 and Mythos 5 shipped June 9, Amodei's "Policy on the AI Exponential" landed June 10, and TechCrunch reported June 12 that the U.S. ordered Anthropic to limit export of those models — leading to a worldwide suspension. June 13 brought a reported state AG probe into OpenAI. All of that sits one day outside this window. I'm flagging it because you can't understand the quiet without the cliff right after it.

### Why a quiet week matters

Governance didn't pause June 2-8. It just happened in preview flags and platform docs instead of press releases. When the labs had to market their next models as "so capable we had to restrict them," that caution became the exact language Washington used to justify export controls the next week.

My take: if you measure policy only by laws passed, you missed the move that actually changed shipping — a GitHub checkbox that made agent governance reviewable.

### What I'm watching

1. **Preview to GA.** Does Copilot review for MCP become the default governance choke point once it goes GA?
2. **WWDC to App Review.** Watch what Apple actually enforces in the revised guidelines, not just what's announced on stage.
3. **The June 12 template.** If an export order can pull models worldwide on a "narrow jailbreak," every frontier release after June 9 needs a fallback policy on day one.

Back next week — that's when the bans hit.
