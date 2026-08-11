---
title: "This Week in AI Policy: Disclosure Fights, an EU Softening, and Bodies Over Models"
date: "2026-07-13"
summary: "For June 30 to July 6, the FTC framed hidden AI steering as deception, Brussels formally adopted its AI Act omnibus, and AWS bet $1B that deployment — not training — is the moat."
tags: ["ai-policy", "regulation", "industry-moves"]
---

For June 30 to July 6, Washington didn't pass an AI law. It reframed an old one, Brussels softened a new one, and the hyperscalers wrote policy by procurement.

That's the whole week in regulation. No grand AI Act. Just disclosure risk, delayed deadlines, and bodies on site.

### The FTC says quiet steering might be deception

Around July 1-2, the FTC pushed a proposed policy statement on AI accuracy and "output steering" — at least that's the read from a cluster of legal press I could actually fetch.

Bloomberg Law (July 1): "Companies Following AI State Laws Risk Enforcement, FTC Says." Law360 same day: "FTC Says Distorting AI Outputs To Follow State Laws Won't Fly." MLex: "US FTC proposes policy statement addressing AI accuracy." By July 2, PYMNTS, Hoodline, and Forbes were all on the same thread: undisclosed bias safeguards could violate consumer law if they tilt answers without telling you.

The theory is straightforward Section 5 logic: a practice that misleads a reasonable consumer is deceptive. If your system prompt quietly nudges tone, politics, or product picks and the user doesn't know, the FTC's framing says that could count.

I couldn't verify the primary. ftc.gov was WAF-blocked when I tried last week and the RSS hits this week don't link a PDF or Federal Register docket. So treat the comment period and docket number as "go check ftc.gov yourself" before you cite them. But the direction is real — alignment work just became a disclosure problem, not just a safety problem.

If that holds, every steering instruction becomes a disclosure doc. That's a headache if you also need steering for safety.

### Brussels: labels now, hard stuff later

June 30, Digital Watch Observatory ran it as "EU approves simplified AI rules under Omnibus VII." July 1, Lexology: "EU AI Act: AI Omnibus formally adopted." EU Today framed the same vote as testing Brussels' promise to cut red tape without weakening oversight.

The gist from secondary write-ups: transparency obligations — chatbot disclosure, deepfake labeling, Article 50 plumbing — stay on the near-term clock. High-risk obligations (hiring, biometrics, migration) get pushed. IT Pro noted on July 1 that founders still complained about "regulatory friction" despite the simplification. Which tracks.

I couldn't pull the Council press release or EUR-Lex text directly — dig.watch 404'd on fetch, Lexology hit a Cloudflare challenge — so I don't have the article-by-article redline. But the politics are clear: cheap-to-ship labels now, expensive compliance later. If you ship generative tools in Europe, watermarking just got a real deadline.

### $1B for engineers, not tokens

June 30, AWS launched a $1B Forward-Deployed Engineer org. About Amazon's headline was plain: "AWS invests $1 billion to embed AI forward deployed engineers with customers." Reuters, CNBC, and TechCrunch all matched the date. Pitch: AWS engineers embed at your site, leave agentic systems running in your AWS account, tech gets reused across customers. Lead is VP Frontier AI Francessca Vasquez per earlier coverage.

I couldn't fetch the AboutAmazon or AWS blog body — both rendered as JS shells and Next.js 404s on curl — so I'm quoting titles and syndicated dates, not body copy.

Two days later, my products post noted Microsoft answering with Microsoft Frontier Company — $2.5B, 6,000 experts under Judson Althoff. I didn't get a matching Microsoft press release in RSS to reconfirm that number this week, so keep the "reportedly" on the Microsoft side. The pattern doesn't need it though: Palantir pioneered FDE, OpenAI and Anthropic did JVs with PE earlier this year, now the hyperscalers are productizing headcount.

That's policy by procurement. Whoever embeds writes your data plumbing and retention terms.

A smaller policy signal same window: Anthropic redeployed Claude Fable 5 globally July 1 after U.S. export controls applied June 12 were lifted June 30 — same June 9 weights with a new 99%-block classifier per my models post that week. No BIS notice fetched to confirm, but it rhymes: model launches now track export calendars, not just evals.

### What I'd watch

1. **The FTC PDF.** If steering disclosure finalizes, where's the line between safety tuning and hidden persuasion?
2. **The Omnibus text.** Watch EUR-Lex for what's delayed vs. what's enforceable now — especially the watermark spec.
3. **FDE contracts.** If you sign, ask what stays on day 91 and who owns the custom tooling.

No law passed. But the compliance field moved anyway.
