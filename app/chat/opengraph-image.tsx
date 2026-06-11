import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Chat with Brian's AI"

export default function Image() {
  return renderOgImage({
    title: "Chat with Brian's AI_",
    subtitle:
      "Ask anything about how Brian works, or paste a job description for a candid fit assessment. No login.",
    path: "~/chat",
  })
}
