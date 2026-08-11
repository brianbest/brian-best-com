---
title: "Open Source's Quiet Week — and the One Paper Worth Pulling"
date: "2026-06-08"
summary: "No open model dropped June 2-8. One NVIDIA paper did — SparDA — and it's the clearest hint at how 1M context gets cheap."
tags: ["open-source", "ai-weekly", "research"]
---

If you were waiting for a big open-source model drop the week of June 2-8, you can stop looking.

I checked the usual places — Hugging Face trending, GitHub, arXiv — for anything with a clean date inside that window. No flagship weights, no gated release gone GA, no model card with numbers. The labs were heads-down. The next week's stack — MiniMax-M3, Keye-VL, SKIM — all landed June 9-11, just outside this window. I'm not going to backfill them and pretend they shipped here.

But one paper did land inside the window, and it's worth your time.

### The one paper: SparDA

**SparDA** from NVIDIA — [arxiv:2606.04511](https://arxiv.org/abs/2606.04511), published June 3 — is a retrofit for sparse attention.

The problem it names is honest: sparse attention cuts FLOPs, but KV cache still grows with sequence length. If you offload KV to CPU, you hit a PCIe bottleneck. And the sparse selection step itself is still O(T²) — at 1M tokens, picking which blocks to attend to gets expensive.

SparDA's fix is simple and a little clever. It adds a fourth projection per layer — they call it the **Forecast** — alongside Query, Key, and Value. The Forecast predicts which KV blocks the *next* layer will need, so you can prefetch them while the current layer is still computing.

One Forecast head per GQA group, &lt;0.5% extra parameters, and you only train the Forecast heads. No full retrain.

As reported: up to 1.25× prefill and 1.7× decode speedup over an offload baseline on two 8B sparse-pretrained models, with overlapping compute and transfer. That's not 10×, but it's on a retrofit — no new kernel, no rebuilt attention. The code is at [github.com/NVlabs/SparDA](https://github.com/NVlabs/SparDA).

```bash
git clone https://github.com/NVlabs/SparDA
# paper: https://arxiv.org/abs/2606.04511
```

Why I like it: it reframes the bottleneck. At 1M context, the question isn't "can you attend?" — it's "can you move KV fast enough?" SparDA says you don't need to rebuild the model to answer that. You just need to look ahead one layer.

The following week, MiniMax would answer the same question the other way — natively sparse with a co-designed H800 kernel. Retrofit vs. native. Both agree dense attention at 1M is dead. They just disagree on the prescription.

### What else — and what didn't

The only other artifact with a hard June 2-8 date I could anchor was **GitHub Copilot code review for Agent Skills and MCP — in preview June 2**. Not weights, but plumbing. It stayed in preview until July 29, but June 2 is when you could first have Copilot review code that uses agent skills. If you build harnesses, that's where you live.

Everything else people cite for this week is either outside the window or unverified. WWDC opened June 8, but Apple's newsroom was JS-gated on my pulls — no citable model launch to pull from it.

### What I'd pull Monday

This is a good week to measure, not to chase.

Clone SparDA and run it on your longest *real* context — not synthetic needle-in-haystack — and track prefill vs. decode separately. If you offload KV today, measure PCIe time, not just attention FLOPs. That's the number SparDA is actually optimizing.

And re-baseline cost per completed task at 128K before the June 9 stack hits. When 1M gets cheap next week, you'll want to know what "cheap" is relative to — and whether you even need 1M, or just cheaper 128K.

No flagship. One useful paper. Sometimes that's the more honest week.
