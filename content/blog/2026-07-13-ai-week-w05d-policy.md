---
title: "This Week in AI Policy: Steering Disclosure, an EU Omnibus, and a White House Gate"
date: "2026-07-13"
summary: "For July 7-13, the FTC said hidden output steering could be deception, Brussels gave a final green light to its AI Act Omnibus, and OpenAI's next frontier rollout reportedly routed through a White House review."
tags: ["ai-policy", "regulation", "industry-moves"]
---

If you measure regulation by laws passed, last week was quiet. If you measure it by what companies will have to disclose and who has to approve a launch, it was loud.

For July 7-13, three moves set the tone: Washington reframing hidden prompting as deception, Brussels softening timelines while hardening transparency, and a frontier launch that reportedly needed a voluntary national-security sign-off first.

### Undisclosed steering might be deception

The FTC pushed a new framing July 9: hiding how an AI system is steered could violate federal law.

That's the read from Spencer Fane, Inside Privacy (Covington), and JD Supra — all indexing a proposed FTC policy statement on AI accuracy and "output steering" with a comment period opening around July 9. JD Supra's headline put it bluntly: "When AI Has a Hidden Agenda."

The theory matters. Under Section 5, a deceptive practice is one that's misleading to a reasonable consumer. The FTC's take, per those write-ups, is that system instructions that tilt tone, politics, or product recommendations — without telling the user — could clear that bar. That's not a model capability issue. It's a product design choice becoming a consumer-protection issue.

Industry pushback is already baked in: steering *is* how you do safety and alignment. The tension is obvious. If every safety-tuned prompt needs disclosure, you either under-tune or you over-disclose. I couldn't fetch the FTC release directly — ftc.gov was returning a WAF block when I tried — so treat the docket number and comment deadline as "go verify on ftc.gov and the Federal Register" before you cite them.

### Brussels: labels now, high-risk later

The EU Council gave a final green light to the Digital Omnibus on AI — the amendment package to the AI Act — around July 8-9. Freshfields' "AI Act unpacked #34" and a JD Supra client alert both flagged it as final.

What's in it, per the secondary read: transparency obligations (Article 50 — chatbot disclosure, deepfake labeling) go live soon, while harder high-risk obligations get pushed. Tech Times framed the same week as "Chatbot Rules Live, High-Risk AI Delay Now Binding Law" dated July 11.

I couldn't pull the Freshfields PDF past Cloudflare, and the Council press release didn't render either, so I don't have the article-by-article redline. But the political signal is clear. Brussels is trying to be business-friendly and enforcement-ready at once — cheap-to-implement labels now, expensive hiring/biometrics/migration rules later. If you ship content tooling in Europe, your watermarking work just got a hard date. If you ship high-risk systems, you bought time, not a pass.

### A White House gate for GPT-5.6

On the industry side, OpenAI published new "government and national security partnership" principles July 8 — indexed by Google News RSS with that exact title.

The same week, a cluster of headlines claimed the U.S. government cleared OpenAI's most advanced model yet after a 12-day review under a voluntary framework — variously called GPT-5.6 — with launch timing slipping to accommodate it.

I couldn't fetch the OpenAI principles page directly (Cloudflare challenge) and I didn't get a model card to confirm version strings, so keep the "reportedly" on the 12-day gate and the .6 naming. But the pattern rhymes with last week's Brussels story: no formal U.S. AI Act, yet frontier launches are routing through an informal national-security clearance.

Politico added a coda July 11: the Trump administration's AI promotion program launch "underwhelmed" — per their headline, "Not where they hoped it'd be." Substance was light behind the Cloudflare gate, but the vibe fits: Washington wants to be seen promoting AI, not just policing it, and the rollout hasn't landed yet.

UNICEF also launched a coalition for children's rights in the age of AI July 8. Less regulatory bite, more norm-setting — but it shows where policy is being written while federal frameworks lag: at the institution level.

### What I'm watching

1. **Disclosure specs.** Does the FTC finalize steering-disclosure as deception, and where's the line between safety tuning and hidden persuasion? Watch the actual policy statement PDF, not the JD Supra summary.

2. **Omnibus text.** Watch EUR-Lex and the Council press room for the Omnibus final text — specifically what's delayed, for whom, and what "transparency now" actually requires in the watermark.

3. **Voluntary gates as de facto licenses.** If a 12-day White House review becomes the norm for frontier releases, that's licensing without a license law. Watch whether other labs follow the same path and whether that voluntary framework gets published.

Back next week with more policy and industry moves. This week, transparency stopped being a virtue and started being a compliance field.
