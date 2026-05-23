---
title: "Stop Prompt Engineering. Start Context Engineering."
date: "2026-04-12"
summary: "Prompt engineering was a useful crutch when models were small and dumb. With Claude Opus 4.7 and a million-token window, the real lever is what you put in the context, not how you phrase it."
tags: ["llms", "prompting", "context"]
---

I've watched a lot of engineers spend hours tweaking a system prompt to get a different answer out of a model. Most of the time they're solving the wrong problem.

The model isn't being stubborn. It just doesn't know what you know.

## Prompt engineering is a 2023 skill

In 2023, prompt engineering was load-bearing because models were brittle. Tiny phrasing changes flipped outputs. "Think step by step" added points on benchmarks. Few-shot examples were the difference between usable and useless.

That world is gone. The frontier models in 2026 are good enough that *how* you ask matters far less than *what they have to work with* when you ask.

## What context engineering looks like

When I review an underperforming agent today, I almost never touch the system prompt first. I ask:

- **What does the model actually see at decision time?** Half the time the answer is "less than I assumed." A retrieval step is silently truncating. A tool result is being summarized into uselessness. The agent is one cache layer away from blindness.
- **Is the context organized for the model, or organized for the engineer who wrote it?** Logs dumped in raw form. JSON blobs the model has to parse mentally. Stale memory that contradicts current state. Context hygiene is a real skill.
- **What's the signal-to-noise ratio?** A million-token window doesn't help if 900k of it is irrelevant. Models attend better to short, dense context than long, sparse context — even now.

## A concrete example

Last sprint we had an agent that kept misclassifying support tickets. The team's first instinct was to rewrite the system prompt. I asked them to print the actual context the model received on a failing case.

The retrieval step was returning the right knowledge-base article. But it was returning it *after* 40k tokens of unrelated chat history, with no separator, no labeling, and no instruction to prioritize it. The model wasn't ignoring the article — it was drowning in everything else.

We didn't change a word of the prompt. We restructured what got pasted in. Accuracy jumped 18 points.

## The takeaway

Prompts are interfaces. Context is the actual input. If your agent is underperforming, look at the input before you blame the interface.
