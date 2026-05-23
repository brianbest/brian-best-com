import { PostCard } from "@/components/post-card"
import { getPosts } from "@/lib/posts"

export const metadata = {
  title: "Blog | Brian Best",
  description: "Articles and thoughts by Brian Best on agentic AI, LLMs, and shipping software",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-4">Blog</h1>
      <p className="text-persona-white/80 mb-12 max-w-2xl">
        Notes on agentic AI, LLMs, the Model Context Protocol, and what it&apos;s like to ship software with them.
      </p>

      {posts.length === 0 ? (
        <p className="text-persona-grey">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
