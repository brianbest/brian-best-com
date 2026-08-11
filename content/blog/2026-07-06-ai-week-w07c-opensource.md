---
title: "While Flagships Were Gated, Open Source Shipped Inference"
date: "2026-07-06"
summary: "No open flagship shipped June 23-29. Open source did — four verified drops from 0.6B to 75B, all about making models cheaper and faster to run."
tags: ["open-source", "ai-weekly", "research"]
---

Flagships were gated last week. Open source wasn't.

While GPT-5.6 and Mythos sat behind partner lists, the verifiable drops with a Hugging Face `createdAt` in June 23-29 were all efficiency plays. Not smarter — cheaper, smaller, faster. That's the story.

### Puzzle: compress the flagship

NVIDIA's `NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B` hit June 24 ([BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-BF16), [FP8](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-FP8), [NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)) and it's the most honest release of the week. No new pretrain. Just Iterative Puzzle compression applied to Nemotron-3-Super-120B-A12B.

75.3B total, 9.3B active. Hybrid Mamba2-MoE with Multi-Token Prediction, cut from 120.7B / 12.8B. The claim in the card: ~2x throughput on an 8xB200 node and 1M-token concurrency on a single H100 from 1 to 8 requests. Active experts per layer drop from 22 to 4-18, Mamba state 128→96. Paper: [arxiv:2607.04371](https://arxiv.org/abs/2607.04371).

License is [openmdw-1.1](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-BF16) — commercial-use, but not Apache-2.0. If you run big MoEs, this is the pattern to study.

```python
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained(
    "nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-BF16", trust_remote_code=True
)
```

### Small specialists that you'll actually use

Two drops on opposite ends of the size spectrum, both immediately pluggable.

**OlmoEarth v1.2** shipped four sizes in two days — [Nano](https://huggingface.co/allenai/OlmoEarth-v1_2-Nano) (June 24), [Tiny](https://huggingface.co/allenai/OlmoEarth-v1_2-Tiny), [Small](https://huggingface.co/allenai/OlmoEarth-v1_2-Small), [Base](https://huggingface.co/allenai/OlmoEarth-v1_2-Base) (June 25). ViT-Base is 114M params, trained on Sentinel-1, Sentinel-2, and Landsat time series. Paper: [arxiv:2605.20804](https://arxiv.org/abs/2605.20804). License: OlmoEarth Artifact License. If you touch geospatial at all, this beats wrapping a chat model.

**Qwen3-ASR** landed June 26 — [0.6B](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) and [1.7B](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) plus [ForcedAligner-0.6B](https://huggingface.co/Qwen/Qwen3-ForcedAligner-0.6B-hf). 32 languages, word-level alignment, Apache-2.0. Finally a permissive ASR you can fork without thinking about it.

```python
from transformers import Qwen3ASRForConditionalGeneration, AutoProcessor
model = Qwen3ASRForConditionalGeneration.from_pretrained("Qwen/Qwen3-ASR-0.6B-hf")
```

### DeepSeek's inference stack and the quant wave

DeepSeek dropped the other half of the inference story June 27-28. [DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) (284B / 13B active) and [Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) (1.6T / 49B active), both 1M context, FP8, MIT — plus 12 speculative decoding variants on June 28 (`dspark`, `dflash`, `eagle3` heads for Qwen3 and Gemma). Preview paper: [arxiv:2606.19348](https://arxiv.org/abs/2606.19348).

NVIDIA was the distributor that week too. Alongside Puzzle they pushed quantized day-zero variants: [Kimi-K2.6-DFlash](https://huggingface.co/nvidia/Kimi-K2.6-DFlash) and [MiniMax-M3-NVFP4](https://huggingface.co/nvidia/MiniMax-M3-NVFP4) on June 23, [Qwen3.5-397B-A17B-NVFP4-V2](https://huggingface.co/nvidia/Qwen3.5-397B-A17B-NVFP4-V2) on June 29. Two other pluggable drops: [c-fast-foundationstereo](https://huggingface.co/nvidia/c-fast-foundationstereo) (14.6M, 10x faster than FoundationStereo) and Tencent's [Rosetta-inference](https://huggingface.co/tencent/Rosetta-inference) ([arxiv:2607.00293](https://arxiv.org/abs/2607.00293), Apache-2.0) for composable multimodal pretraining. Google also shipped [tabfm-1.0.0](https://huggingface.co/google/tabfm-1.0.0-jax) June 29 — zero-shot tabular foundation, JAX and PyTorch.

No new intelligence frontier. Just the plumbing to actually run what we already have.

### What I'd pull Monday

If you run inference at scale, benchmark Puzzle's NVFP4 against your current MoE. If you do speech, swap in Qwen3-ASR-0.6B — it's Apache-2.0 and small enough to run everywhere. And if you do anything with satellite imagery, try OlmoEarth-Tiny before you fine-tune anything bigger. This week rewarded the teams optimizing deployment, not the ones waiting for permission to ship.
