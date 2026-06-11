import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Writing by Brian Best"

export default function Image() {
  return renderOgImage({
    title: "~/writing/",
    subtitle:
      "Working notes on building with LLMs — patterns, harnesses, evals, the parts nobody puts in the demo.",
    path: "~/writing",
  })
}
