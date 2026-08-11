---
title: "Open Source Compiled Away the API Call"
date: "2026-07-13"
summary: "June 30-July 6 had no new open flagship, but it shipped a compiler that turns prompts into local adapters, a 6T-token VLM data playground, and a world model that freezes itself."
tags: ["open-source", "ai-weekly", "research"]
---

No open flagship dropped June 30-July 6. Nothing to download and brag about on parameter count.

What did ship was more interesting — research that tries to make the frontier cheaper to run, not bigger to train.

### PAW: compile the prompt, ship the weights

Program-as-Weights ([arxiv:2607.02512](https://arxiv.org/abs/2607.02512), featured July 3) is the one I'd actually try first. The pitch is simple: stop calling an API for fuzzy functions like "flag urgent logs" or "fix broken JSON." Compile them.

You give it plain English, a 4B compiler trained on their 10M-example FuzzyBench emits a tiny adapter for a frozen interpreter. Two flavors: `paw-4b-qwen3-0.6b` (594MB base, ~22MB per program) and `paw-4b-gpt2` (134MB base, ~5MB per program). After compilation, no API key, no internet.

```python
import programasweights as paw
program = paw.compile("Fix malformed JSON: repair missing quotes and trailing commas", slug="json-fixer")
fn = paw.function(program.slug)
fn("{name: 'Alice',}")  # '{"name":"Alice"}'
```

The authors' claim: the 0.6B Qwen3 interpreter with a PAW program matches direct prompting of Qwen3-32B at about 1/50th the memory, running 30 tokens/s on a MacBook M3. That's author-reported, not independently verified yet, but the artifact is real — `pip install programasweights`, Apache-2.0, runs offline.

If it holds up, it's not a better LLM. It's a way to stop using one at runtime.

### DataComp-VLM: finally a playground for VLM data

DataComp for VLMs ([arxiv:2606.28551](https://arxiv.org/abs/2606.28551), featured July 6) does for vision-language what DataComp did for CLIP. No new architecture. Just a controlled benchmark for data curation.

The corpus is big: 160 datasets spanning captions, interleaved documents, text-only, and instruction data — 6T multimodal tokens total. Plus ready-to-train shards like `DCVLM-Baseline` (200B tokens, 104M samples, decontaminated and shuffled) and baseline models from 1B to 8B ([mlfoundations/dcvlm](https://github.com/mlfoundations/dcvlm)).

The counterintuitive finding: mixing beats filtering. Their instruction-heavy mixture (70% instruction data) scales better than caption-heavy mixes, and the gap widens with size. Their 8B hits 63.6% on the 33-task core suite with just 200B tokens.

If you've been hand-tuning VLM data, stop. Start from their pools and ablate. That's the point — a reproducible lever instead of private data lore.

### Two horizon bets

Two papers argue scaling isn't about parameters right now.

**Orca** ([arxiv:2606.30534](https://arxiv.org/abs/2606.30534), BAAI) is a world foundation model trained with Next-State-Prediction — not next token or next frame. 125K hours of video plus 160M language-described events learn a frozen world latent; only lightweight decoders train for downstream text, image, or action tasks. Code and 4B weights at [BAAI/Orca-4B](https://huggingface.co/BAAI/Orca-4B) (weights landed July 14, just outside the window).

**Agents-A1** ([arxiv:2606.30616](https://arxiv.org/abs/2606.30616), 35B MoE, 3B active) claims trillion-parameter performance by scaling horizon, not size — 45K-token average trajectories via a knowledge-action-verifier loop. Apache-2.0, with quantized variants shipped July 2 and a 4B version July 14. Benchmark table is author-reported, so treat it as a direction, not a score.

And for anyone who actually ships robots: **Embodied.cpp** ([arxiv:2607.02501](https://arxiv.org/abs/2607.02501)) is trying to be `llama.cpp` for VLA/WAM models — one C++ runtime, GGUF weights, CPU/CUDA/NPU, with multi-rate control loop support. Initial models pi0.5/HY-VLA/LingBot-VA plus GR00T N1.7 and Cosmos3-Nano. They claim -30% batch-1 latency, which matters when your loop is closed.

### What I'd pull Monday

If you have a fuzzy function hitting an API in a hot path, compile it with PAW and benchmark the local adapter. If you're training VLMs, don't curate from scratch — fork DataComp-VLM's Baseline shards and test the mixing ratio first. And if your world model work is stuck on token prediction, read Orca's state-transition framing before you scale parameters again.

This week didn't give us a bigger open model. It gave us cheaper ways to not need one.
