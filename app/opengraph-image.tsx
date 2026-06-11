import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Brian Best — Principal Software Developer"

export default function Image() {
  return renderOgImage({
    title: "Brian Best_",
    subtitle:
      "Building agentic AI, MCP integrations, and production LLM systems — resilient software with a craftsman's care.",
    path: "./about.md",
  })
}
