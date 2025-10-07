import { PostCard } from "@/components/post-card"
import { getPosts } from "@/lib/posts"

export const metadata = {
  title: "Blog | Brian Best",
  description: "Articles and thoughts by Brian Best on software development and technology",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on software development, technology, and building products
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-mono">
          <span className="text-muted-foreground">{posts.length} articles</span>
          <span className="text-primary">•</span>
          <span className="text-muted-foreground">Updated regularly</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16 border-3 border-primary bg-card">
          <p className="font-pixel text-primary mb-2">No posts yet</p>
          <p className="text-muted-foreground text-sm">Check back soon for new content!</p>
        </div>
      )}
    </main>
  )
}
