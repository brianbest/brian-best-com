import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content/blog")

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

export type Post = PostMeta & {
  content: string
}

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(postsDir, filename), "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    content,
  }
}

export async function getPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"))
  const posts = files.map((f) => {
    const { content, ...meta } = readPostFile(f)
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
