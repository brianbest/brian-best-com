import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"

const BASE_URL = "https://brianbest.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const newestPostDate = posts[0] ? new Date(posts[0].date) : new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: newestPostDate, priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: newestPostDate, priority: 0.9 },
    { url: `${BASE_URL}/about`, priority: 0.8 },
    { url: `${BASE_URL}/projects`, priority: 0.8 },
    { url: `${BASE_URL}/chat`, priority: 0.7 },
    { url: `${BASE_URL}/contact`, priority: 0.6 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
