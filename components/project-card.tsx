import Image from "next/image"
import Link from "next/link"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url: string
  featured: boolean
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-persona-black border border-persona-maroon shadow-thief hover:transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bungee text-xl text-persona-red mb-2">{project.title}</h3>
        <p className="text-persona-white/80 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-persona-maroon text-persona-white px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bungee text-sm text-persona-white hover:text-persona-red transition-colors"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}
