// This is a mock implementation for static generation
// In a real project, you would fetch this data from a CMS or file system

import { sanityClient } from "./sanity";

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage: string
  readingTime: number
}

// Mock posts for when Sanity is not configured
const mockPosts: Post[] = [
  {
    slug: "pixel-perfect-design",
    title: "Building Pixel-Perfect Designs with Tailwind CSS",
    date: "2025-10-01",
    excerpt: "Learn how to create stunning pixel art aesthetics using modern CSS frameworks.",
    content: "# Building Pixel-Perfect Designs\n\nIn this post, we explore how to create retro-inspired pixel art designs using Tailwind CSS...",
    coverImage: "/placeholder.svg",
    readingTime: 8
  },
  {
    slug: "next-js-performance",
    title: "Optimizing Next.js Applications for Production",
    date: "2025-09-15",
    excerpt: "Best practices for improving performance in Next.js apps.",
    content: "# Next.js Performance\n\nPerformance is crucial for modern web applications...",
    coverImage: "/placeholder.svg",
    readingTime: 12
  },
  {
    slug: "ai-powered-development",
    title: "How AI is Transforming Software Development",
    date: "2025-09-01",
    excerpt: "Exploring the impact of AI tools on developer productivity.",
    content: "# AI-Powered Development\n\nArtificial Intelligence is revolutionizing how we write code...",
    coverImage: "/placeholder.svg",
    readingTime: 10
  }
];

export async function getPosts(): Promise<Post[]> {
  // Check if Sanity is configured
  const hasProjectId = process.env.SANITY_PROJECT_ID && process.env.SANITY_PROJECT_ID !== "";
  
  if (!hasProjectId) {
    // Return mock data if Sanity is not configured
    return mockPosts;
  }

  try {
    const query = `*[_type == "post"] | order(date desc){
      "slug": slug.current,
      title,
      date,
      excerpt,
      content,
      "coverImage": coverImage.asset->url,
      readingTime
    }`;
    const posts = await sanityClient.fetch<Post[]>(query);
    return posts;
  } catch (error) {
    console.warn("Failed to fetch posts from Sanity, returning mock data:", error);
    return mockPosts;
  }
}
