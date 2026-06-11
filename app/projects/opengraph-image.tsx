import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Projects by Brian Best"

export default function Image() {
  return renderOgImage({
    title: "~/work/",
    subtitle:
      "Side projects: agentic AI tooling, MCP servers, and the self-hosted infrastructure they run on.",
    path: "~/work",
  })
}
