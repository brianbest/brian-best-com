import { MDXContent } from "@/components/mdx-content"
import { getPost, getPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post Not Found | Brian Best",
    }
  }

  return {
    title: `${post.title} | Brian Best`,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="font-bungee text-sm text-persona-grey hover:text-persona-red transition-colors"
        >
          ← Back to blog
        </Link>

        <div className="mt-6 mb-8">
          <h1 className="font-bungee text-3xl md:text-4xl lg:text-5xl text-persona-red mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-persona-grey mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-bungee text-xs px-2 py-1 border border-persona-maroon text-persona-grey"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg prose-red max-w-none">
          <MDXContent content={post.content} />
        </div>
      </article>
    </main>
  )
}
