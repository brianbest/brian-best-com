---
title: "Stop Prompt Engineering. Start Context Engineering."
date: "2026-04-12"
summary: "Prompt engineering was a useful crutch when models were smaller and more brittle. With today's frontier models and large context windows, the real lever is what you put in the context, not how you phrase it."
tags: ["llms", "prompting", "context"]
---

I've watched a lot of engineers spend hours tweaking a system prompt to get a different answer out of a model. Most of the time they're solving the wrong problem.

The model isn't being stubborn. It just doesn't know what you know.

## Prompt engineering is a 2023 skill

In 2023, prompt engineering was load-bearing because models were brittle. Tiny phrasing changes flipped outputs. "Think step by step" added points on benchmarks. Few-shot examples were the difference between usable and useless.

That world has narrowed. Frontier models have gotten good enough that *how* you ask matters far less than *what they have to work with* when you ask — though truncation, retrieval quality, and tool design can still make a good prompt necessary.

## What context engineering looks like

When I review an underperforming agent today, I almost never touch the system prompt first. I ask:

- **What does the model actually see at decision time?** Half the time the answer is "less than I assumed." A retrieval step is silently truncating. A tool result is being summarized into uselessness. The agent is one cache layer away from blindness.
- **Is the context organized for the model, or organized for the engineer who wrote it?** Logs dumped in raw form. JSON blobs the model has to parse mentally. Stale memory that contradicts current state. Context hygiene is a real skill.
- **What's the signal-to-noise ratio?** A large context window doesn't help if most of it is irrelevant. Models still attend better to short, dense context than long, sparse context — even with bigger windows.

## A concrete example

Last sprint we had an agent that kept misclassifying support tickets. The team's first instinct was to rewrite the system prompt. I asked them to print the actual context the model received on a failing case.

The retrieval step was returning the right knowledge-base article. But it was returning it *after* roughly 40k tokens of unrelated chat history, with no separator, no labeling, and no instruction to prioritize it. The model wasn't ignoring the article — it was drowning in everything else.

Here's the shape of what the model actually saw (redacted):

```text
# What we assumed the model saw:
[KB article: "How to reset learner progress" — 400 tokens, high relevance]

# What the model actually saw:
[chat history — ~40k tokens, no section markers]
[KB article — 400 tokens, appended at the end, no label, no priority cue]
[system prompt tail — "Use retrieved context to classify the ticket"]
```

We didn't change a word of the prompt. We restructured what got pasted in — labeled sections, the most relevant retrieval at the top, and a short instruction to prioritize it. On our internal eval set of ~200 labeled tickets, classification accuracy rose by 18 percentage points (from the low 70s to the low 90s) on the next run.

Eighteen points from formatting. Zero from prompting.

## The takeaway

Prompts are interfaces. Context is the actual input. If your agent is underperforming, look at the input before you blame the interface.
