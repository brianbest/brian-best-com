import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

// Shared Open Graph image template in the Terminal Notebook design language.
// Colors are literal hex because satori has no access to the Tailwind theme;
// values mirror the term-* tokens in tailwind.config.ts.
const C = {
  bg: "#0f0d0c", // term-bg
  bg2: "#161311", // term-bg-2
  fg: "#ece6dd", // term-fg
  fgSoft: "#b8b0a6", // term-fg-soft
  fgMuted: "#7a7166", // term-fg-muted
  rule: "#2a2622", // term-rule
  accent: "#ef4444", // term-accent
}

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

interface OgImageProps {
  title: string
  subtitle?: string
  path?: string
  meta?: string
}

export async function renderOgImage({ title, subtitle, path, meta }: OgImageProps) {
  // satori cannot read woff2 — these TTFs are copied from the geist package
  // (see assets/fonts/). JetBrains Mono is google-hosted only, so GeistMono
  // stands in for the mono chrome here.
  const [geistBold, geistMonoRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Geist-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/GeistMono-Regular.ttf")),
  ])

  const titleSize = title.length > 55 ? 56 : title.length > 32 ? 68 : 84

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: C.bg,
          fontFamily: "GeistMono",
        }}
      >
        {/* Top bar: $ monogram + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "28px 56px",
            borderBottom: `1px solid ${C.rule}`,
            backgroundColor: C.bg2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              backgroundColor: C.accent,
              color: C.bg,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            $
          </div>
          <div style={{ display: "flex", fontSize: 22, color: C.fgSoft }}>brianbest.com</div>
          <div style={{ display: "flex", flexGrow: 1 }} />
          <div style={{ display: "flex", fontSize: 20, color: C.fgMuted }}>
            principal software developer
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          {path && (
            <div style={{ display: "flex", fontSize: 26, color: C.accent, marginBottom: 24 }}>
              {`$ cat ${path}`}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontFamily: "Geist",
              fontSize: titleSize,
              fontWeight: 700,
              color: C.fg,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: C.fgSoft,
                marginTop: 28,
                lineHeight: 1.4,
                maxWidth: 980,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "26px 56px",
            borderTop: `1px solid ${C.rule}`,
            fontSize: 20,
            color: C.fgMuted,
          }}
        >
          <div style={{ display: "flex", color: C.accent, marginRight: 14 }}>●</div>
          <div style={{ display: "flex" }}>brian best</div>
          <div style={{ display: "flex", flexGrow: 1 }} />
          {meta && <div style={{ display: "flex" }}>{meta}</div>}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "GeistMono", data: geistMonoRegular, weight: 400, style: "normal" },
      ],
    },
  )
}
