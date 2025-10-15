"use client"

import Link from "next/link"
import { Star, Sparkles, Search } from "lucide-react"
import { getPosts } from "@/lib/posts"
import { useState, useEffect } from "react"
import type { Post } from "@/lib/posts"

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts()
      setPosts(data)
      setFilteredPosts(data)
      setIsLoading(false)
    }
    loadPosts()
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setFilteredPosts(posts)
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredPosts(filtered)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#E8DCC8] flex items-center justify-center">
        <div className="text-center">
          <Sparkles size={40} className="text-[#F4B942] animate-pulse mx-auto mb-4" />
          <p className="font-serif text-xl text-[#1A1A1A]">Loading posts...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
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
        <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </Link>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#F4B942] mb-4">
              <Sparkles size={32} className="animate-pulse" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#E8DCC8] mb-6">
              Blog
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl">
              Thoughts on software development, AI, and building scalable systems
            </p>
            <div className="flex items-center gap-2 text-sm text-[#E8DCC8] mt-4">
              <span>{posts.length} articles</span>
              <span className="text-[#F4B942]">•</span>
              <span>Updated regularly</span>
            </div>
          </div>
        </div>

        {/* Large "BLOG" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          BLOG
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[#E8DCC8] py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts by title or content..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white text-[#1A1A1A] px-6 py-4 pr-12 border-2 border-[#1A1A1A] text-base focus:outline-none focus:border-[#E8944A]"
              />
              <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6C6C6C]" />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-[#6C6C6C]">
                Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} matching "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="bg-[#E8DCC8] py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white border-2 border-[#1A1A1A] hover:border-[#E8944A] transition-colors group cursor-pointer h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={16} fill="#E8944A" className="text-[#E8944A]" />
                      <span className="text-xs text-[#6C6C6C]">{post.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#E8944A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#6C6C6C] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#E8944A] text-sm font-semibold">
                      <span>Read more</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && searchQuery && (
            <div className="text-center py-16">
              <Star size={40} fill="#E8944A" className="text-[#E8944A] mx-auto mb-4" />
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2">No posts found</p>
              <p className="text-[#6C6C6C] text-sm">Try a different search term</p>
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-16">
              <Sparkles size={40} className="text-[#F4B942] mx-auto mb-4" />
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2">No posts yet</p>
              <p className="text-[#6C6C6C] text-sm">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Stay Updated
          </h2>
          <p className="text-[#1A1A1A] text-lg mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about software development, AI, and technology
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C4A3E] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
