import { getPost, getPosts } from "@/lib/posts"
import { getPublicProfileAsText } from "@/lib/career-profile"

const BASE_URL = "https://brianbest.com"

// Posts are read from the filesystem at build time; regenerate on deploy.
export const dynamic = "force-static"

// llms-full.txt — the whole site as one plain-text document for LLM readers:
// career profile plus every blog post's raw markdown.
export async function GET() {
  const metas = await getPosts()
  const posts = await Promise.all(metas.map((m) => getPost(m.slug)))

  const postsText = posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map(
      (post) => `----

# ${post.title}

URL: ${BASE_URL}/blog/${post.slug}
Date: ${post.date}
Tags: ${post.tags.join(", ")}
Summary: ${post.summary}

${post.content.trim()}`,
    )
    .join("\n\n")

  const body = `# brianbest.com — full site content for LLMs

This file contains the complete content of Brian Best's personal site in plain text:
his career profile followed by every blog post in full. Canonical URLs are included.
For interactive questions, his AI assistant lives at ${BASE_URL}/chat.

${getPublicProfileAsText().trim()}

${postsText}
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
