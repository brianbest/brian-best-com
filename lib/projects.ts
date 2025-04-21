// This is a mock implementation for static generation
// In a real project, you would fetch this data from a CMS or file system

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url: string
  featured: boolean
}

export function getProjects(): Project[] {
  return [
    {
      id: "1",
      title: "Persona UI Kit",
      description: "A React component library inspired by Persona 5's UI design, built with TypeScript and Storybook.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["React", "TypeScript", "Storybook", "CSS"],
      url: "https://github.com/brianbest/persona-ui",
      featured: true,
    },
    {
      id: "2",
      title: "Next.js E-Learning Platform",
      description:
        "A full-stack e-learning platform built with Next.js, featuring authentication, payments, and course management.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      url: "https://github.com/brianbest/nextjs-elearning",
      featured: true,
    },
    {
      id: "3",
      title: "React Native Task Manager",
      description: "A cross-platform mobile app for task management with offline support and cloud sync.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["React Native", "TypeScript", "Firebase"],
      url: "https://github.com/brianbest/task-manager-app",
      featured: false,
    },
    {
      id: "4",
      title: "Developer Portfolio Template",
      description: "A customizable portfolio template for developers, built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      url: "https://github.com/brianbest/dev-portfolio",
      featured: false,
    },
    {
      id: "5",
      title: "VS Code Theme: Phantom Thief",
      description: "A Persona 5 inspired theme for Visual Studio Code with bold colors and high contrast.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["VS Code", "Theme", "Design"],
      url: "https://github.com/brianbest/phantom-thief-theme",
      featured: false,
    },
    {
      id: "6",
      title: "GraphQL API Boilerplate",
      description: "A starter template for building GraphQL APIs with Node.js, TypeScript, and Apollo Server.",
      image: "/placeholder.svg?height=340&width=600",
      tags: ["GraphQL", "Node.js", "TypeScript", "Apollo"],
      url: "https://github.com/brianbest/graphql-api-boilerplate",
      featured: false,
    },
  ]
}
