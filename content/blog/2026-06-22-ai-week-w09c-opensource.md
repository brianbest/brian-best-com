---
title: "While Flagships Got Grounded, Open Source Fixed Long Context"
date: "2026-06-22"
summary: "June 9-15, the only flagship that shipped got pulled. Open source shipped the fix for 1M-token context — two sparse attention systems, a 30B MoE that actually does video, and a way to compress agent skills."
tags: ["open-source", "ai-weekly", "research"]
---

Flagships had a bad week. Open source had a useful one.

Anthropic shipped Claude Fable 5 on June 9 and pulled it June 12. While the frontier was gated, the verified open-source drops June 9-15 were all about the same bottleneck: long context is too expensive to actually use.

### Sparse attention is now the open-source race

Two separate systems shipped the same week, same problem, different philosophy.

**MiniMax-M3 + MiniMax Sparse Attention (MSA)** — paper [2606.13392](https://arxiv.org/abs/2606.13392) published June 11, updated June 12. 109B natively multimodal model, but the real artifact is the attention. MSA is blockwise sparse attention on top of GQA: a lightweight Index Branch scores KV blocks and picks Top-k per GQA group, then a Main Branch does exact attention only over the selected blocks.

Claim: 28.4x per-token compute reduction at 1M context, with 14.2x prefill and 7.6x decode speedups on H800 via a co-designed kernel. As-claimed, but they shipped the kernel and the weights:

```bash
git clone https://github.com/MiniMax-AI/MSA
# model: https://huggingface.co/MiniMaxAI/MiniMax-M3
```

**SparDA** from NVIDIA — paper [2606.04511](https://arxiv.org/abs/2606.04511), published June 3 but Hugging Face Daily Papers June 11 — is the retrofit answer. Instead of rebuilding attention, it adds a fourth projection per layer, the Forecast, that predicts which KV blocks the *next* layer will need. That lets you prefetch while the current layer executes. One Forecast head per GQA group, &lt;0.5% extra parameters, and you only train the Forecast heads. Up to 1.25x prefill / 1.7x decode over the offload baseline on two 8B sparse-pretrained models. Code at [github.com/NVlabs/SparDA](https://github.com/NVlabs/SparDA).

And **Kwai Keye-VL-2.0-30B-A3B** — paper [2606.10651](https://arxiv.org/abs/2606.10651) June 9 — brings the same idea to multimodal. 30B total, 3B active MoE, first adaptation of DeepSeek Sparse Attention to a GQA-based multimodal architecture. 256K lossless context for long video, with checkpoints open. If you do video agents, this is the one to pull before you rent a closed VLM.

Retrofit vs. native. Both agree 1M context won't work with dense attention.

### Your skills are too expensive

**SKIM** — [2606.12203](https://arxiv.org/abs/2606.12203), June 10 — noticed what anyone running agent harnesses already feels: reusable natural-language skills get pasted into *every* context, and prefill cost explodes. SKIM compresses procedural knowledge — workflows, tool protocols, dependencies — into adaptive soft tokens.

30-60% of original token length, better task preservation than existing compression baselines. Different problem than RAG compression: you're compressing instructions, not facts.

```bash
git clone https://github.com/bebr2/SKIM
```

That same week GitHub saw a harness surge: [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) (June 10, agents and models co-evolve), [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) (June 11, meta-harness for Claude Code/Codex/Cursor/Pi), and [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) (June 12, MIT). Stars are inflated, but the direction isn't — the skill economy needs compression.

### Do VLMs actually see?

**Do Vision-Language Models See or Guess?** — [2606.10400](https://arxiv.org/abs/2606.10400), June 9 — built a 540-image benchmark across six reasoning categories with four phrasings per image. Same image, phrasing is the controlled variable.

Every model degraded on the hardest variant. Open-weight models fell furthest — the no-image ablation collapsed them to 1-9% accuracy, their text-only floor. That's not vision, that's memorization. GRPO post-training recovered some of it, and transferred to held-out sets, so it's partly trainable away. But if you're benchmarking open VLMs on "visual reasoning," measure textual-prior reliance first.

Also worth skimming: **Towards Diverse Scientific Hypothesis Search** — [2606.10587](https://arxiv.org/abs/2606.10587), June 9. Evolutionary search for molecules/equations/algorithms collapses to one mode under selection pressure. Paper proposes parallel tempering across temperatures with principled exchange. For wet-lab budgets where you want a *set* of good hypotheses, not one, it's a cleaner framing than "optimize harder."

### What I'd pull Monday

Benchmark MSA's kernel on your longest actual context — not synthetic needle-in-haystack — and compare to SparDA's Forecast retrofit if you can't retrain. Try Keye-VL-2.0 on a long video you already pay a closed model to watch. And if you inject the same skill every turn, compress it with SKIM and measure prefill, not just accuracy.

Long context got cheaper this week. Flagships getting cheaper to *access* is a different story.
