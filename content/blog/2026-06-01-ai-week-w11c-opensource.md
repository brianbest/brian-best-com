---
title: "The Week Open Source Bet on Less"
date: "2026-06-01"
summary: "May 26-June 1, open source didn't chase scale — it chased efficiency. Two MoEs that activate less, a vision model with no encoder, and two systems that turn video into action."
tags: ["open-source", "ai-weekly", "research"]
---

Open source didn't try to out-scale the frontier this week. It tried to out-route it.

May 26 to June 1 was all about doing more with less activated — fewer parameters per token, fewer modules in the stack, and a pivot from watching video to acting in it.

### Less active, more agentic

Two MoEs made the same argument from opposite ends.

**MiniMax-M2** — [2605.26494](https://arxiv.org/abs/2605.26494), May 26 — is 229.9B total, 9.8B active per token. The paper's bet isn't just sparsity, it's that agentic ability comes from the data pipeline. They describe verifiable-trajectory pipelines across coding, deep search, and office tasks, plus Forge, an agent-native RL system for long-horizon training. The M2.7 checkpoint even autonomously debugs its own training run — early, but it's the first time I've seen self-evolution framed as infra, not demo.

As-reported, it's frontier-tier on agentic coding at ~10B active. That's the claim to verify against your own harness, not their suite.

**Mellum2** — [2605.31268](https://arxiv.org/abs/2605.31268), May 29 — is the one you can actually fork today. JetBrains shipped a 12B MoE (64 experts, 8 active = 2.5B per token) under Apache 2.0 — base, instruct, and thinking checkpoints. Architecture is pragmatic: GQA with 4 KV heads, sliding window on 3 of 4 layers, and a Multi-Token Prediction head that doubles as a built-in speculative decoder.

Pre-trained on ~10.6T tokens, post-trained to 128K via layer-selective YaRN. It's designed for commodity GPUs, not press releases.

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
tok = AutoTokenizer.from_pretrained("JetBrains/Mellum-2-12b-base", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained("JetBrains/Mellum-2-12b-base", trust_remote_code=True)
```

If you run code agents on your own metal, this is the license you've been waiting for.

### No encoder, no adapter, no fusion

**NEO-ov** — [2605.28820](https://arxiv.org/abs/2605.28820), May 27 — asks a simpler question: why does every VLM stitch an image encoder to an LLM with adapters? NEO learns pixel-word correspondence end-to-end, no external encoder, no post-hoc fusion.

It's fully open — [github.com/EvolvingLMMs-Lab/NEO](https://github.com/EvolvingLMMs-Lab/NEO) — with training recipes and ablations. On fine-grained perception and video/spatial reasoning it closes the gap to modular VLMs, which is the point: the stack gets simpler, not bigger.

```
git clone https://github.com/EvolvingLMMs-Lab/NEO && pip install -r requirements.txt
```

If you've fought encoder-resolution mismatches, this is worth reading for the architecture alone.

### From watching to doing

The other shift was embodied — two papers that move the metric from VQA score to rollout.

**Qwen-VLA** — [2605.30280](https://arxiv.org/abs/2605.30280), May 28 — extends Qwen's VL stack with a DiT-based action decoder and embodiment-aware prompt conditioning (`[ROBOT: {embodiment_desc}] Instruction: {task}`). One model for manipulation, navigation, and egocentric demos. As reported: 97.9% on LIBERO, 86%+ on RoboTwin, 69% R2R — with generalization across embodiments and lighting. Treat those as directional until reproduced, but the unification is real.

**minWM** — [2605.30263](https://arxiv.org/abs/2605.30263), same day — goes the other way: turn a video diffusion foundation model into a real-time, causal, low-latency world model you can *play*. Controllable rollout, full open stack. It's the difference between "watch a generated video" and "step inside it" for sim and robotics.

Also worth a bookmark: **Bidirectional Evolutionary Search** — [2605.28814](https://arxiv.org/abs/2605.28814) — forward evolution plus backward subgoal decomposition for self-improvement. Code at [github.com/Embodied-Minds-Lab/BES](https://github.com/Embodied-Minds-Lab/BES).

### What I'd pull Monday

If you run code agents, bench Mellum2-instruct against whatever 7-14B dense model you're paying to host — measure decode throughput with its MTP drafter on. If you build with vision, clone NEO-ov and test it on your hardest fine-grained video task, not a generic benchmark. And if you care about embodied, read Qwen-VLA and minWM together — one unifies action, the other makes it interactive.

This week wasn't about bigger. It was about routing better.
