import { MDXContent } from "@/components/mdx-content"
import { PixelButton } from "@/components/pixel-button"
import { PixelBadge } from "@/components/pixel-badge"
import { getPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

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
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-pixel text-3xl text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The post you're looking for doesn't exist.</p>
          <PixelButton asChild variant="primary">
            <Link href="/blog">Back to Blog</Link>
          </PixelButton>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <div className="mb-12">
          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-pixel text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>

          <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-relaxed">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <time dateTime={post.date} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary"></span>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          {post.coverImage && (
            <div className="relative w-full aspect-video mb-12 border-3 border-primary shadow-pixel-lg overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={630}
                className="object-cover"
                priority
              />
              {/* Pixel corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary"></div>
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <MDXContent content={post.content} />
        </div>

        {/* Author section */}
        <div className="border-t-3 border-primary pt-12 mt-12">
          <div className="flex items-start gap-6">
            <div className="relative w-20 h-20 flex-shrink-0 border-3 border-primary overflow-hidden">
              <Image
                src="/brian.jpeg"
                alt="Brian Best"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-pixel text-lg text-primary mb-2">Brian Best</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Senior Software Developer at Axonify. Writing about web development, AI, and building products.
              </p>
              <div className="flex gap-2">
                <PixelButton asChild variant="outline" size="sm">
                  <Link href="/about">About Me</Link>
                </PixelButton>
                <PixelButton asChild variant="outline" size="sm">
                  <Link href="/blog">More Posts</Link>
                </PixelButton>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
