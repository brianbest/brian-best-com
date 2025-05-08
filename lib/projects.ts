// This is a mock implementation for static generation
// In a real project, you would fetch this data from a CMS or file system

import { sanityClient } from "./sanity";

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url: string
  featured: boolean
}

export async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(title asc){
    "id": _id,
    title,
    description,
    "image": image.asset->url,
    tags,
    url,
    featured
  }`;
  const projects = await sanityClient.fetch<Project[]>(query);
  return projects;
}
