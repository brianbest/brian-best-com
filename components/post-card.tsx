import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { PixelBadge } from "@/components/pixel-badge"

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
      className="group block bg-card border-3 border-primary hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
    >
      <div className="relative aspect-video overflow-hidden border-b-3 border-primary">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={340}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Pixel corner accent */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-accent"></div>
      </div>
      <div className="p-6">
        <h3 className="font-pixel text-base text-primary mb-3 group-hover:text-secondary transition-colors leading-relaxed">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readingTime} min</span>
        </div>
        <p className="text-foreground/80 line-clamp-2 text-sm">{post.excerpt}</p>
        
        {/* Read more indicator */}
        <div className="mt-4 flex items-center gap-2 text-primary text-xs font-pixel">
          <span>READ</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}
