import { getPost, getPosts } from "@/lib/posts"

// Raw markdown source of a post — linked from the post page's "view raw"
// affordance so LLMs (and humans) can grab the original file.
export const dynamic = "force-static"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return new Response("not found", { status: 404 })
  }

  const raw = `---
title: "${post.title}"
date: "${post.date}"
summary: "${post.summary}"
tags: [${post.tags.map((t) => `"${t}"`).join(", ")}]
---

${post.content.trim()}
`

  return new Response(raw, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
