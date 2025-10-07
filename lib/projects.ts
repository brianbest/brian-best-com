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

// Mock projects for when Sanity is not configured
const mockProjects: Project[] = [
  {
    id: "1",
    title: "AI Code Review Assistant",
    description: "An intelligent code review tool powered by GPT-4 that provides automated feedback on pull requests.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "OpenAI", "Node.js", "GitHub API"],
    url: "https://github.com",
    featured: true
  },
  {
    id: "2",
    title: "Personal Blog Redesign",
    description: "A modern pixel-art inspired blog built with Next.js 15 and Tailwind CSS featuring a 16-bit aesthetic.",
    image: "/placeholder.svg",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    url: "https://github.com",
    featured: true
  },
  {
    id: "3",
    title: "Developer Productivity Dashboard",
    description: "A comprehensive dashboard for tracking coding metrics, habits, and productivity trends.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "PostgreSQL", "Express"],
    url: "https://github.com",
    featured: false
  },
  {
    id: "4",
    title: "Real-time Collaboration Tool",
    description: "A WebSocket-based collaboration platform for remote teams with live editing capabilities.",
    image: "/placeholder.svg",
    tags: ["WebSockets", "Node.js", "Redis", "MongoDB"],
    url: "https://github.com",
    featured: false
  }
];

export async function getProjects(): Promise<Project[]> {
  // Check if Sanity is configured
  const hasProjectId = process.env.SANITY_PROJECT_ID && process.env.SANITY_PROJECT_ID !== "";
  
  if (!hasProjectId) {
    // Return mock data if Sanity is not configured
    return mockProjects;
  }

  try {
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
  } catch (error) {
    console.warn("Failed to fetch projects from Sanity, returning mock data:", error);
    return mockProjects;
  }
}
