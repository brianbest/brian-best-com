import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Projects are markdown files in content/projects/*.md — same content model as
// the blog (see lib/posts.ts). The filename (minus ".md") is the project id.

const projectsDir = path.join(process.cwd(), "content/projects")

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url: string
  featured: boolean
  content: string // raw markdown body (optional longer write-up)
}

function readProjectFile(filename: string): Project {
  const id = filename.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(projectsDir, filename), "utf8")
  const { data, content } = matter(raw)

  return {
    id,
    title: (data.title as string) ?? id,
    description: (data.description as string) ?? "",
    image: (data.image as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    url: (data.url as string) ?? "",
    featured: (data.featured as boolean) ?? false,
    content,
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return []
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"))
  const projects = files.map(readProjectFile)

  // Featured first, then alphabetical by title.
  return projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return a.title.localeCompare(b.title)
  })
}

export async function getProject(id: string): Promise<Project | null> {
  const fullPath = path.join(projectsDir, `${id}.md`)
  if (!fs.existsSync(fullPath)) return null
  return readProjectFile(`${id}.md`)
}
