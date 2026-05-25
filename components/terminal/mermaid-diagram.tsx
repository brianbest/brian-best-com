/**
 * MermaidDiagram — static hand-drawn SVG (ported from shared.jsx).
 * Dark theme, accent #ef4444.
 * Used in the "Harness Project Pattern" post as fig.01.
 * Pure SVG, no dependencies.
 */
export function MermaidDiagram() {
  const bg = "#161311"
  const stroke = "#3a3431"
  const fill = "#1f1b18"
  const txt = "#e8e3dd"
  const muted = "#7d7570"
  const accent = "#ef4444"
  const accentSoft = "rgba(239,68,68,0.18)"

  return (
    <svg
      viewBox="0 0 880 360"
      width="100%"
      style={{ background: bg, borderRadius: 4, display: "block" }}
    >
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill={stroke} />
        </marker>
      </defs>

      {/* Harness box */}
      <g>
        <rect
          x="60"
          y="40"
          width="320"
          height="280"
          rx="4"
          fill={accentSoft}
          stroke={accent}
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text
          x="80"
          y="68"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fill={accent}
          fontWeight="600"
        >
          my-product-harness/
        </text>
        <rect x="92" y="92" width="256" height="44" rx="3" fill={fill} stroke={stroke} />
        <text x="220" y="119" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          AGENTS.md
        </text>
        <rect x="92" y="148" width="256" height="44" rx="3" fill={fill} stroke={stroke} />
        <text x="220" y="175" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          prompts/
        </text>
        <rect x="92" y="204" width="256" height="44" rx="3" fill={fill} stroke={stroke} />
        <text x="220" y="231" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          scripts/run_eval.py
        </text>
        <rect x="92" y="260" width="256" height="44" rx="3" fill={fill} stroke={stroke} />
        <text x="220" y="287" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          evals/
        </text>
      </g>

      {/* Arrow */}
      <g>
        <path d="M 380 180 L 500 180" stroke={stroke} strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        <text x="440" y="170" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={muted}>
          operates on
        </text>
      </g>

      {/* Product box */}
      <g>
        <rect x="500" y="40" width="320" height="280" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="520" y="68" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt} fontWeight="600">
          my-product/
        </text>
        <rect x="532" y="92" width="256" height="44" rx="3" fill={bg} stroke={stroke} />
        <text x="660" y="119" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          src/
        </text>
        <rect x="532" y="148" width="256" height="44" rx="3" fill={bg} stroke={stroke} />
        <text x="660" y="175" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          tests/
        </text>
        <rect x="532" y="204" width="256" height="44" rx="3" fill={bg} stroke={stroke} />
        <text x="660" y="231" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          package.json
        </text>
        <rect x="532" y="260" width="256" height="44" rx="3" fill={bg} stroke={stroke} />
        <text x="660" y="287" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={txt}>
          .git/
        </text>
      </g>
    </svg>
  )
}
