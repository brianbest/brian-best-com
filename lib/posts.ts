import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { slugify } from "./utils"

const postsDir = path.join(process.cwd(), "content/blog")

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime: string   // e.g. "7 min"
  wordCount: number
}

export type Post = PostMeta & {
  content: string  // raw markdown — kept for copy-as-markdown
}

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(postsDir, filename), "utf8")
  const { data, content } = matter(raw)

  const wordCount = content.trim().split(/\s+/).length
  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min`

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    content,
    wordCount,
    readingTime,
  }
}

export async function getPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"))
  const posts = files.map((f) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content: _, ...meta } = readPostFile(f)
    return meta
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const filename = `${slug}.md`
  const fullPath = path.join(postsDir, filename)
  if (!fs.existsSync(fullPath)) return null
  return readPostFile(filename)
}

/**
 * getAdjacentPosts — based on date-sorted list (newest first).
 * "prev" = the post published AFTER this one (newer, left side).
 * "next" = the post published BEFORE this one (older, right side).
 * Matching the prototype's prev/next arrow semantics:
 *   ← prev (newer)     next → (older)
 */
export async function getAdjacentPosts(
  slug: string,
): Promise<{ prev: PostMeta | null; next: PostMeta | null }> {
  const posts = await getPosts() // already sorted newest → oldest
  const idx = posts.findIndex((p) => p.slug === slug)

  if (idx === -1) return { prev: null, next: null }

  // prev = newer post = lower index (idx - 1)
  // next = older post = higher index (idx + 1)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  return { prev, next }
}

export type Heading = {
  id: string
  text: string
  level: number
}

/**
 * extractHeadings — parse ## and ### markdown headings.
 * id is generated via slugify(text) so it matches the markdown
 * heading renderer's anchor IDs.
 */
export function extractHeadings(content: string): Heading[] {
  const headingRe = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let m: RegExpExecArray | null

  while ((m = headingRe.exec(content)) !== null) {
    const level = m[1].length
    const text = m[2].trim()
    headings.push({
      id: slugify(text),
      text,
      level,
    })
  }

  return headings
}
