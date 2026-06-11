import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template"
import { getPost, getPosts } from "@/lib/posts"
import { formatTerminalDate } from "@/lib/utils"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Blog post by Brian Best"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return renderOgImage({ title: "~/writing/", path: "~/writing" })
  }

  return renderOgImage({
    title: post.title,
    subtitle: post.summary,
    path: `~/writing/${post.slug}`,
    meta: `${formatTerminalDate(post.date)} · ${post.readingTime} · ${post.tags.map((t) => `#${t}`).join(" ")}`,
  })
}
