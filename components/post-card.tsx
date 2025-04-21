import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  readingTime: number
}

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-persona-black border border-persona-maroon shadow-thief hover:transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={340}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bungee text-xl text-persona-red mb-2 group-hover:text-persona-white transition-colors">
          {post.title}
        </h3>
        <div className="text-sm text-persona-grey mb-3">
          {formatDate(post.date)} • {post.readingTime} min read
        </div>
        <p className="text-persona-white/80 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  )
}
