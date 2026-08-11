---
title: "Long Context Finally Got Cheap"
date: "2026-06-22"
summary: "June 16-22 was long-horizon week in open source — a 1M-token GLM-5.2 under MIT, Baidu's constant-memory OCR, and agents that learn to scaffold themselves."
tags: ["open-source", "ai-weekly", "research"]
---

Everyone wants long context. Nobody wants to pay for it.

June 16-22, open source attacked both sides of that problem — one team made a 1M window stable, another made parsing it constant-memory. And a third decided the harness matters more than the model.

### GLM-5.2: a 1M window that holds

Zhipu AI dropped [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) on June 16, MIT-licensed. No regional limits, no gated access.

The headline is "solid 1M context" — not marketing 1M, but stably serving it on long-horizon work. Two architecture bets: **IndexShare**, which reuses the same indexer across every four sparse attention layers (2.9x fewer FLOPs per token at 1M), and an improved MTP layer for speculative decoding (+20% acceptance length).

As reported: 40.5 on HLE, 99.2 on AIME 2026, 62.1 on SWE-bench Pro, and 81.0 on Terminal-Bench 2.1 (Terminus-2). Those are self-reported with their harness (temperature 1.0, top_p 0.95, 300K context for HLE-with-tools), so take them as directional. But on Terminus-2 it outscores its predecessor GLM-5.1 by 17.5 points — that's a real jump.

It ships for SGLang, vLLM, and Transformers day one. If you've been waiting to run long agents without an API, this is the one to benchmark.

### Baidu Unlimited-OCR: dozens of pages in one pass

Two days later Baidu shipped [Unlimited-OCR](https://github.com/baidu/Unlimited-OCR) (June 18 on GitHub, June 19 on Hugging Face, [paper June 22](https://arxiv.org/abs/2606.23050)). It builds on DeepSeek-OCR and replaces every decoder attention layer with **Reference Sliding Window Attention (R-SWA)** — constant KV cache through the entire decode.

The pitch: encode with DeepSeek-OCR's high-compression encoder, then decode dozens of pages in a single 32K forward pass without memory blowing up. MIT-licensed, vLLM recipe included.

```python
from transformers import AutoModel, AutoTokenizer
model = AutoModel.from_pretrained('baidu/Unlimited-OCR',
    trust_remote_code=True, torch_dtype='bfloat16').eval().cuda()
model.infer_multi(tokenizer, prompt='<image>Multi page parsing.',
    image_files=['page1.png','page2.png'], max_length=32768)
```

If you parse PDFs at scale, this is the opposite bet from GLM-5.2 — not bigger windows, but cheaper windows. That's the more interesting tradeoff right now.

### Ornith-1.0: the model that learns its own scaffold

[Ornith-1.0](https://huggingface.co/ornith-ai/Ornith-1.0-35B) landed June 21 — 35B MoE and 9B dense (with 397B MoE in the family), MIT, post-trained on Qwen 3.5 and Gemma 4. The idea is "self-scaffolding" RL: the model learns to generate both the solution *and* the search scaffold that produces it, jointly optimizing both.

As reported: 64.2 on Terminal-Bench 2.1 vs 41.4 for base Qwen3.5-35B, 75.6 on SWE-bench Verified. Whether that generalizes beyond their harness is the question, but the framing is right — benchmarks are increasingly won by scaffolding, not just weights.

### The plumbing and the papers

Two infra drops worth noting:

- **Vercel eve** (June 16, [github.com/vercel/eve](https://github.com/vercel/eve)) — filesystem-first durable agent framework. `agent.ts`, `instructions.md`, `tools/`, `skills/`, `channels/`, `schedules/` as conventions. `npx eve@latest init my-agent` and you're running. If you've built agents as tangled scripts, you'll like this.
- **Google TabFM** (June 16, [github.com/google-research/tabfm](https://github.com/google-research/tabfm)) — tabular foundation model, sklearn-compatible, zero-shot via in-context learning. JAX and PyTorch backends. Code is Apache-2.0, but weights are `tabfm-non-commercial-v1.0` — not open for production. Don't miss that split.

On arXiv, three papers I'd actually read:

- **Guava** ([2606.18363](https://arxiv.org/abs/2606.18363)) — 4B open model + careful harness (&lt;2K simulated trajectories) rivaling proprietary on embodied manipulation. The takeaway: iterative perception-reasoning-action loops matter more than scale here.
- **Moebius** ([2606.19195](https://arxiv.org/abs/2606.19195)) — 0.22B inpainting model matching 11.9B FLUX.1-Fill-Dev at >15x faster inference. 2% of the params, same quality claim — worth verifying on your data.
- **EfficientRollout** ([2606.18967](https://arxiv.org/abs/2606.18967)) — self-speculative decoding for RL rollouts, no separate drafter to train. 19.6% rollout latency cut as reported, which compounds fast when you're doing RL.

### What I'd try Monday

Run GLM-5.2 on your longest agent task and see if 1M is actually stable past 200K. Swap one PDF pipeline to Unlimited-OCR and measure peak memory, not just accuracy. And if you benchmark Ornith, compare it with and without its scaffold — that's where the real signal is.

This week wasn't about smarter. It was about cheaper to run long.
