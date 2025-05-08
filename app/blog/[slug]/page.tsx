import { MDXContent } from "@/components/mdx-content"
import { getPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import Image from "next/image"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = (await getPosts()).find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Brian Best",
    }
  }

  return {
    title: `${post.title} | Brian Best`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = (await getPosts()).find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-bungee text-3xl md:text-4xl lg:text-5xl text-persona-red mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-persona-grey mb-8">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          {post.coverImage && (
            <div className="relative w-full aspect-video mb-8 border-4 border-persona-white transform -rotate-1 shadow-thief overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={630}
                className="object-cover"
              />
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
