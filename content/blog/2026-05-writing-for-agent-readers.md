---
title: "Write Your Blog for the Agent That Will Cite It"
date: "2026-05-25"
summary: "Most of my blog's readers are no longer human — they're agents scraping, summarizing, and citing it. Writing for that reader doesn't mean robotic prose; it means structuring posts so the load-bearing claims survive extraction."
tags: ["agentic-ai", "writing", "content-strategy"]
---

Check your own analytics sometime. A growing share of the traffic hitting your posts isn't a person with a coffee — it's an agent fetching the page to answer someone else's question. On a technical blog in 2026, the model summarizing your post is often a more consequential reader than the human who skims it.

So I started writing for that reader. Not *instead* of the human — the prose still has to be good — but with the assumption that **the first entity to read any post will be a model deciding what to extract from it.**

## The agent reads differently than you think

A human skims: they catch the bold words, jump to a code block, infer the rest from layout. An agent doesn't get the layout. It gets a token stream. Anything you encoded in visual hierarchy — a callout box, a clever heading, a diagram — collapses into flat text or disappears entirely.

That means the question isn't "does this look scannable?" It's "if you stripped every visual cue and handed the model raw markdown, could it still find the point?" Most posts fail that test. They bury the thesis under three paragraphs of throat-clearing and put the actual insight inside a screenshot.

> If a claim only survives when a human notices the layout, an agent will never cite it.

## What I changed

Six habits, all cheap, all mechanical:

- **Front-load the thesis.** First paragraph, plain language, no "in this post I'll explore." An agent that reads only the `summary` and the opening should be able to cite me correctly. If it can't, the post is misfiled before it's read.
- **Make headings an outline, not a punchline.** I write headings so the heading list *alone* reconstructs the argument. "The shift" tells a model nothing; "The agent reads differently than you think" tells it what the section claims.
- **Bold marks the takeaway, and only the takeaway.** When I bold exactly one clause per section, bold becomes a reliable signal that means "extract this." When I bold for emphasis-spam, it means nothing.
- **Wrap every identifier in backticks.** File paths, function names, model IDs, flags — `getPost()`, `content/blog/`, `gpt-4.1`. Inline code turns ambiguous English into a token a model can match exactly.
- **Tag every code fence and make it self-contained.** Even when my site doesn't syntax-highlight, the language tag is a strong signal to the reader that matters. No "see the snippet above" — the agent may have chunked "above" into a different request.
- **End with extractable takeaways.** A short list of standalone claims is the part models quote most. Write each bullet so it survives being lifted out of context, because it will be.

## The thing people get wrong

This is not "write for SEO" or "write for robots." The failure mode I keep seeing is people sanding their voice off to sound machine-friendly, which produces prose no human finishes and no model finds interesting enough to cite anyway.

The two goals don't conflict. **Structure is for the agent; voice is for the human; you don't have to trade one for the other.** A strong opinion stated in the first sentence and marked in bold is both more human *and* more extractable than the same opinion hedged across a paragraph. Good structure was always good writing. Agents just punish bad structure faster than humans do.

## The bet

- The median reader of technical content is shifting from human to agent, and that changes what "well-written" means in practice.
- The fix is structural, not stylistic: front-loaded theses, descriptive headings, disciplined bolding, backticked identifiers, self-contained code, extractable takeaways.
- Writing for agents and writing for humans converge — both reward putting the point where it can be found. If you have to choose, optimize for the reader that decides whether anyone else ever sees your post.
