import { getPosts } from "@/lib/posts"
import { BlogIndex } from "@/components/blog-index"

export const metadata = {
  title: "~/writing",
  description:
    "Working notes on building with LLMs — patterns, harnesses, evals, the parts nobody puts in the demo.",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="max-w-[1440px] mx-auto">
      <BlogIndex posts={posts} />
    </main>
  )
}
