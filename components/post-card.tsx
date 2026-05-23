"use client"

import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { track } from "@vercel/analytics"

type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-persona-black border border-persona-maroon shadow-thief hover:transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 p-6"
      onClick={() =>
        track("post_open", {
          location: "post_card",
          postSlug: post.slug,
          label: post.title,
        })
      }
    >
      <h3 className="font-bungee text-xl text-persona-red mb-2 group-hover:text-persona-white transition-colors">
        {post.title}
      </h3>
      <div className="text-sm text-persona-grey mb-3">{formatDate(post.date)}</div>
      <p className="text-persona-white/80 line-clamp-3 mb-4">{post.summary}</p>
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
    </Link>
  )
}
