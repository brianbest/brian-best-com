"use client"

import { PostCard } from "@/components/post-card"
import { SearchBar } from "@/components/search-bar"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
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
      <main className="container mx-auto px-4 py-16">
        <div className="text-center py-16">
          <div className="inline-block w-8 h-8 border-3 border-primary border-t-transparent animate-spin mb-4"></div>
          <p className="font-pixel text-sm text-primary">Loading posts...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12">
          <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Blog</h1>
          <p className="text-muted-foreground mb-4">
            Thoughts on software development, technology, and building products
          </p>
          <div className="flex items-center gap-2 text-sm font-mono">
            <span className="text-muted-foreground">{posts.length} articles</span>
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">Updated regularly</span>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="mb-8">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search posts by title or content..."
          />
          {searchQuery && (
            <p className="mt-3 text-sm font-mono text-muted-foreground">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} matching "{searchQuery}"
            </p>
          )}
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <AnimateOnScroll key={post.slug} animation="fade-up" delay={index * 50}>
            <PostCard post={post} />
          </AnimateOnScroll>
        ))}
      </div>

      {filteredPosts.length === 0 && searchQuery && (
        <AnimateOnScroll animation="fade-in">
          <div className="text-center py-16 border-3 border-primary bg-card">
            <p className="font-pixel text-primary mb-2">No posts found</p>
            <p className="text-muted-foreground text-sm">Try a different search term</p>
          </div>
        </AnimateOnScroll>
      )}

      {posts.length === 0 && (
        <div className="text-center py-16 border-3 border-primary bg-card">
          <p className="font-pixel text-primary mb-2">No posts yet</p>
          <p className="text-muted-foreground text-sm">Check back soon for new content!</p>
        </div>
      )}
    </main>
  )
}
