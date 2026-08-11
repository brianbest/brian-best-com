---
title: "This Week in AI Policy: Brussels Pries Open Android and Starts the Label Clock"
date: "2026-07-27"
summary: "For July 14-20, Brussels ordered Google to open Android and Search to rival AI assistants, set the clock for AI label rules on August 2, and left US states and the labs themselves to fill a federal vacuum."
tags: ["ai-policy", "regulation", "industry-moves"]
---

If you thought AI regulation was on summer break, Brussels didn't get the memo. The week of July 14-20 didn't give us a new US AI law — it gave us the next enforcement map instead.

### Brussels tells Google to share

The biggest move landed July 16. The European Commission told Alphabet/Google to open parts of Android and Search to rival AI assistants under the Digital Markets Act.

Two deadlines, both specific: share selected Search data with competitors and AI tools by January 2027, and update Android to grant rival assistants system-level integration by July 2027. That second one is the teeth — wake-word activation so you can summon ChatGPT the way you invoke Google Assistant today, plus access to the on-device NPUs that handle local AI workloads.

Legal hook is DMA Article 6(7), the interoperability rule for designated gatekeepers. Google qualifies. Google cited privacy and security risks; the Commission published guidance anyway, building on investigations opened in January 2026 and a July 2026 General Court ruling backing its authority.

I verified this via the Commission guidance page and a fetched Cryptobriefing excerpt that quotes it. Reuters, AP, and France24 syndicated the same guidance July 16, though their bodies were behind captchas on my fetch. The tell isn't the headline — it's the level. Brussels went from app-store fines to OS-level AI integration. If you're building an assistant, your Android distribution strategy just changed.

### Labels now, hard rules later

The EU also clarified what hits August 2. Under the AI Act's transparency obligations — Article 50 territory — providers and deployers have to label AI-generated or manipulated content: chatbot disclosure, deepfake watermarks, visible and machine-readable.

Wilson Sonsini flagged the Transparency Code of Practice July 14. Il Sole 24 ORE, National Law Review, and EurActiv followed July 15-17 — including Greece floating jail time for stripping deepfake labels. Silicon Canals summed it July 18: labels go live August 2, tougher high-risk rules on hiring, biometrics, and migration get pushed to December 2027.

As Silicon Canals put it: "The transparency obligations are the cheap ones to meet. The expensive, rights-protective rules are the ones that just got more time." If you ship content tooling in Europe, watermarking starts now. If you ship hiring or biometric systems, you just bought 17 more months — but that clock is running.

### Who writes the rules when Washington won't?

In the US, the vacuum got loud. WIRED reported Anthropic is pushing states to regulate AI faster. TCAI counted 84 new AI laws enacted in 27 states in the first half of 2026. PYMNTS and Reuters noted state AGs warning that existing consumer protection laws already apply to AI — no new statute needed.

Demis Hassabis tried to fill the same vacuum from the lab side. July 14, Axios reported he wants a US-led global AI watchdog; TechCrunch the same day framed it as a FINRA-style independent standards body to test frontier models. A Big Tech CEO proposing industry self-standards instead of government pre-approval — that's a bid to set the default.

And Washington pushed back outward. July 14, USTR Jamieson Greer's line — "US won't allow Europe to regulate American tech" — was a direct shot at the DMA and AI Act's reach.

Three bidders, one job: Brussels imposing interoperability, states writing the de facto federal law 84 times over, and labs proposing their own referee.

### What I'm watching

1. **Specs, not slogans.** For DMA, watch the Article 6(7) spec for what "selected Search data" and NPU access actually mean in AOSP. For labels, watch EUR-Lex guidance — the label is easy, the audit trail isn't.

2. **The patchwork tax.** If you deploy nationally, you're compiling for 27 state regimes plus AG enforcement under old laws. Nothing this week created federal preemption.

3. **Interoperability as antitrust.** Wake-word and NPU access is a template. Watch whether DOJ's search remedies start to rhyme with Brussels' data-sharing order — same playbook, different caption.

Back next week. If this week was Brussels loading the gun, August is when it fires.
