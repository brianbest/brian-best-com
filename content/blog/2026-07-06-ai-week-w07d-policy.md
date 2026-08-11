---
title: "This Week in AI Policy: Brake Pedals, Chip Wars, and a Model Gate"
date: "2026-07-06"
summary: "For June 23-29, Washington pulled the brake pedal for robotaxis while tightening the gates on chips and frontier models — and Brussels mostly waited for August."
tags: ["ai-policy", "regulation", "industry-moves"]
---

Washington spent the last week of June doing two opposite things at once: making it easier to build a car without controls, and harder to ship a model without permission.

That contradiction is the story.

### Chips and cars as industrial policy

On June 24, Dutch Trade Minister Sjoerd Sjoerdsma flew to Washington to lobby against the MATCH Act (H.R.8170), per TechCrunch citing Bloomberg. The bill would extend U.S. equipment curbs to cover ASML's deep-ultraviolet immersion machines — not just EUV — cutting off a big chunk of sales to Chinese chipmakers. China is ~19% of ASML's net system sales, and ASML is the only company that can build the lithography tools at stake. The bill was introduced in April and hadn't gotten a floor vote by June 24; Sjoerdsma called the stakes "very high" for the Netherlands.

A day later, Commerce showed it wasn't waiting for Congress to use trade tools. It denied Polestar authorization under the Connected Vehicle Rule, barring new Polestar sales in the U.S. because the Geely-owned brand is deemed to have Chinese software/hardware. Polestar said it can sell existing Polestar 3/4 stock and keep service running, but 94% of its Q1 retail was already outside the U.S. anyway. Sibling Volvo — also Geely-owned — had gotten the same authorization in May.

Same day, different door: DOT/NHTSA proposed to strip the brake-pedal requirement from Federal Motor Vehicle Safety Standards for vehicles "designed to be driven exclusively by automated driving systems." There's a 30-day comment window. NHTSA Administrator Jonathan Morrison pitched it as tearing down "pointless barriers" under Secretary Sean Duffy's AV Framework. If finalized, it directly helps Tesla's Cybercab (no wheel, no pedals, no exemption on file) and Zoox (Amazon's robotaxi, which got a demo exemption in 2024). Waymo keeps its pedals — it runs retrofitted Jaguars.

Deregulate the chassis, regulate the supply chain. That's the pattern.

### A de facto license for frontier models?

The other gate was software.

On June 26, two model-release stories hit the same TechCrunch archive, both attributed to Semafor/Reuters and company posts I couldn't independently fetch (Commerce, OpenAI, and ftc.gov all threw WAF blocks on my fetch pass, so treat the names and numbers as reported, not primary-verified).

First, Commerce Secretary Howard Lutnick reportedly wrote Anthropic on June 26 that "appropriate safeguards are in place to permit certain trusted partners to access the Claude Mythos 5 Model" — a partial reversal of a June 12 ban on non-American access after researchers bypassed guardrails. The allowance covers 100+ U.S. agencies and companies, plus their non-American staff.

Second, OpenAI reportedly limited its GPT-5.6 preview (Sol/Terra/Luna) to a "small group of trusted partners whose participation has been shared with the government," at government request. Pricing was listed as Sol $5/$30 per million input/output tokens, Terra half that, Luna $1/$6. OpenAI's quoted line: "We don't believe this kind of government access process should become the long-term default. It keeps the best tools from users, developers, enterprises, cyber defenders, and global partners who need them."

Read together with the administration's voluntary 30-day pre-release review EO, that's what former White House adviser Dean Ball called a voluntary framework acting like an involuntary license. Whether you call it safety review or prior restraint depends on which side of the API you sit.

### Industry and the quiet in Brussels

Amazon added a $13B AI infrastructure commitment in India on June 25 — the one clean industry number with a date stamp that week.

What didn't happen matters too. I found no verifiable EU enforcement order, new U.S. AI law, or FTC AI action dated June 23-29. The AI Act's next real teeth — GPAI obligations and the August 2, 2026 general application date — were still a month out, and Politico wouldn't report the AI Office's full fining/pull-from-market powers until July 31. FTC press releases show a gap for that week; the next entries are July 8 onward. No copyright ruling in the AI docket verified inside the window either.

That quiet is probably real, not just a fetch miss — but flag it as low-confidence until EUR-Lex and the Federal Register render cleanly.

### What I'm watching

1. **MATCH Act vs. ASML.** Does a chip-equipment ban get folded into a must-pass package, or does Dutch lobbying carve out DUV? That's your tell for how far Washington will push allies on China controls.

2. **Brake-pedal comments.** Watch who files in the 30-day window. The AV lobby wants hardware freedom; safety groups will want performance data in exchange.

3. **Trusted-partner as template.** If 100-org allowlists become the norm for Mythos/Sol-class releases, frontier deployment just got a government gate without a licensing law on the books.

Back next week. This one was Washington choosing where to be hands-off and where to be hands-on.
