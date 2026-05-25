"use client"

import { useEffect, useRef, useState } from "react"

interface MermaidProps {
  chart: string
}

/**
 * <Mermaid chart="..." />
 * Client component. Renders a real Mermaid diagram from a code string.
 * Dark theme: transparent bg, accent reds, JetBrains Mono font.
 * Lazy-inits mermaid via dynamic import inside useEffect (browser-only).
 * Falls back to <pre> on error or during SSR.
 */
export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!chart) return

    let cancelled = false

    async function render() {
      try {
        // Dynamic import — mermaid is browser-only and must not run on the server
        const mermaidModule = await import("mermaid")
        const mermaid = mermaidModule.default

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            background: "transparent",
            primaryColor: "#1c1916",
            primaryTextColor: "#ece6dd",
            primaryBorderColor: "#2a2622",
            lineColor: "#3a3431",
            secondaryColor: "#161311",
            tertiaryColor: "#23201c",
            edgeLabelBackground: "#161311",
            clusterBkg: "#161311",
            titleColor: "#ece6dd",
            nodeBorder: "#2a2622",
            mainBkg: "#1c1916",
            fontFamily: "JetBrains Mono, ui-monospace, monospace",
            fontSize: "13px",
            // Accent colours
            critBkgColor: "#ef4444",
            critBorderColor: "#b91c1c",
            activeTaskBkgColor: "#ef4444",
            activeTaskBorderColor: "#b91c1c",
          },
        })

        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg: renderedSvg } = await mermaid.render(id, chart)

        if (!cancelled) {
          setSvg(renderedSvg)
        }
      } catch {
        if (!cancelled) {
          setError(true)
        }
      }
    }

    render()

    return () => {
      cancelled = true
    }
  }, [chart])

  if (error) {
    return (
      <pre className="font-mono text-[13px] text-term-fg-soft bg-term-bg-2 border border-term-rule p-4 overflow-x-auto leading-[1.65]">
        {chart}
      </pre>
    )
  }

  if (!svg) {
    // SSR placeholder / loading state
    return (
      <pre className="font-mono text-[13px] text-term-fg-muted bg-term-bg-2 border border-term-rule p-4 overflow-x-auto leading-[1.65] opacity-50">
        {chart}
      </pre>
    )
  }

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: mermaid renders trusted SVG
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
