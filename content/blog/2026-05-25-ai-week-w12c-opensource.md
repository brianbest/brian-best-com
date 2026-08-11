---
title: "The Week Open Source Tried to Train Smarter"
date: "2026-05-25"
summary: "May 19-25 had no flagship model drop — instead, open source shipped efficiency. A $1,500 pretrain, a 3.8B image model on 19% compute, and RLVR that finally cares about tokens."
tags: ["open-source", "ai-weekly", "research"]
---

No new frontier base model dropped this week. That *is* the story.

May 19-25, open source didn't chase scale. It chased efficiency — fewer tokens, denser data, and sharper credit assignment. If you've been priced out of pretraining, pay attention.

### The $1,500 pretrain

**HRM-Text** — [2605.20613](https://arxiv.org/abs/2605.20613), Sapient AI — replaces Transformers with a Hierarchical Recurrent Model: slow strategic layers plus fast execution layers, stabilized by MagicNorm.

The numbers are the point. 1B params, 40B unique tokens, ~$1,500 to train from scratch. As-reported: 60.7% MMLU, 81.9% ARC-C, 84.5% GSM8K, 56.2% MATH — competitive with 2-7B open models that used 100-900x more tokens and 96-432x more compute. Their math, not mine, but the direction matters.

And it's fully open:

```bash
git clone https://github.com/sapientinc/HRM-Text
```

I wouldn't replace my 7B with it tomorrow. But it makes the "only labs can pretrain" argument a lot weaker.

### Dense captions beat more parameters

Microsoft's **Lens** — [2605.21573](https://arxiv.org/abs/2605.21573) — is a 3.8B text-to-image model that claims to match >6B SOTA on ~19.3% of Z-Image's compute.

No architecture trick. Just data density: **Lens-800M**, 800M pairs captioned by GPT-4.1 at ~109 words on average, plus multi-resolution batching. If you're still training T2I on alt-text, that's your bottleneck.

### RLVR gets surgical

Verifiable rewards score the whole response, but learning happens per token. Two papers attacked that gap:

**DelTA** — [2605.21467](https://arxiv.org/abs/2605.21467), RUC AI Box — reframes the policy gradient as a linear discriminator over token gradients and reweights tokens to make positives and negatives more contrastive. As-reported: +3.26 avg on 7 math benchmarks (Qwen3-8B-Base), +2.62 on 14B. Code: [github.com/RUCBM/DelTA](https://github.com/RUCBM/DelTA).

**Gated DeltaNet-2** — [2605.22791](https://arxiv.org/abs/2605.22791), NVIDIA — fixes linear attention itself by decoupling erase and write with channel-wise decay. Linear-time mixing, constant-memory decoding. If KV-cache is your wall, read it: [github.com/NVlabs/GatedDeltaNet-2](https://github.com/NVlabs/GatedDeltaNet-2).

Same lesson: RLVR is moving from "reward the answer" to "reward the right token."

### Skills as weights

**SkillOpt** — [2605.23904](https://arxiv.org/abs/2605.23904), Microsoft Research — treats agent skills like weights. Frozen agent, external skill file, optimizer proposes bounded add/delete/replace edits — accepted only if held-out validation strictly improves. Text-space SGD with a learning-rate budget. Repo: [github.com/microsoft/SkillOpt](https://github.com/microsoft/SkillOpt).

It landed the same week GitHub saw a harness surge: Moonshot's **kimi-code** CLI and Anthropic's defending-code harness, both created May 22 with 6k+ stars. We're optimizing harnesses faster than base models.

### What I'd try Monday

Run HRM-Text on your own eval slice and see where 40B tokens hurts. If you train T2I, recaption 10k images densely before you buy more GPUs. And if you do RLVR, read DelTA and Gated DeltaNet-2 together — one fixes the loss, the other fixes the attention.

Bigger wasn't the story this week. Better use of tokens was.
