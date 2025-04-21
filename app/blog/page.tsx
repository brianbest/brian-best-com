import { PostCard } from "@/components/post-card"
import { getPosts } from "@/lib/posts"

export const metadata = {
  title: "Blog | Brian Best",
  description: "Articles and thoughts by Brian Best on software development and technology",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-12">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
