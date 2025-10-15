import { MDXContent } from "@/components/mdx-content"
import { getPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, Calendar, Clock } from "lucide-react"

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
      <main className="min-h-screen bg-[#E8DCC8] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6">
          <Star size={60} fill="#E8944A" className="text-[#E8944A] mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-[#1A1A1A] mb-4">Post Not Found</h1>
          <p className="text-[#6C6C6C] mb-8">The post you're looking for doesn't exist.</p>
          <Link 
            href="/blog"
            className="inline-block bg-[#E8944A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#D17A2E] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            About me
          </Link>
          <Link href="/projects" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Work
          </Link>
          <Link href="/contact" className="bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium hover:bg-[#D4A854] transition-colors text-sm">
            Get in touch!
          </Link>
        </div>

        {/* Back Button */}
        <Link href="/blog" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </Link>

        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-[#E8DCC8] mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#E8DCC8]">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#F4B942]" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <span className="text-[#F4B942]">•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#F4B942]" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image Section */}
      {post.coverImage && (
        <section className="bg-[#E8DCC8] py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full aspect-video overflow-hidden border-2 border-[#1A1A1A]">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="bg-[#E8DCC8] py-12 md:py-16">
        <div className="container mx-auto px-6">
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1A1A1A]
              prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-12
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-8
              prose-p:text-[#1A1A1A] prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-[#E8944A] prose-a:no-underline hover:prose-a:text-[#D17A2E] hover:prose-a:underline
              prose-strong:text-[#1A1A1A] prose-strong:font-semibold
              prose-code:text-[#E8944A] prose-code:bg-white prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-[#1A1A1A] prose-pre:text-[#E8DCC8] prose-pre:p-6 prose-pre:border-2 prose-pre:border-[#1A1A1A]
              prose-blockquote:border-l-4 prose-blockquote:border-[#E8944A] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#6C6C6C]
              prose-ul:list-none prose-ul:pl-0
              prose-li:relative prose-li:pl-8 prose-li:mb-2
              before:prose-li:content-['▸'] before:prose-li:absolute before:prose-li:left-0 before:prose-li:text-[#E8944A]
              prose-img:border-2 prose-img:border-[#1A1A1A] prose-img:w-full
            ">
              <MDXContent content={post.content} />
            </div>
          </article>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden border-2 border-[#F4B942]">
                  <Image
                    src="/brian.jpeg"
                    alt="Brian Best"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={20} fill="#F4B942" className="text-[#F4B942]" />
                    <h3 className="font-serif text-2xl text-[#F4B942]">Brian Best</h3>
                  </div>
                  <p className="text-[#E8DCC8] text-sm leading-relaxed mb-4">
                    Senior Software Developer at Axonify. Writing about web development, AI, and building scalable systems that make a difference.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href="/about"
                      className="bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium hover:bg-[#D4A854] transition-colors text-sm"
                    >
                      About Me
                    </Link>
                    <Link 
                      href="/blog"
                      className="bg-[rgba(0,0,0,0.5)] text-[#F5F1E8] border-2 border-[#F4B942] px-6 py-2 rounded-full font-medium hover:bg-[rgba(0,0,0,0.7)] transition-colors text-sm"
                    >
                      More Posts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Enjoyed this article?
          </h2>
          <p className="text-[#1A1A1A] text-lg mb-8 max-w-2xl mx-auto">
            Check out more of my writing or get in touch to discuss your next project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/blog"
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C4A3E] transition-colors"
            >
              Read More Articles
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] px-8 py-4 rounded-full font-medium hover:border-[#2C4A3E] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
