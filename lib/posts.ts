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

export async function getPosts(): Promise<Post[]> {
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
}
