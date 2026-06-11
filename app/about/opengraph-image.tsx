import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "About Brian Best"

export default function Image() {
  return renderOgImage({
    title: "~/about/",
    subtitle:
      "12+ years of full-stack engineering, 3+ architecting production AI systems. Radio → web dev → startup CTO → principal developer.",
    path: "~/about",
  })
}
