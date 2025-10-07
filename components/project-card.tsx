import Image from "next/image"
import Link from "next/link"
import { PixelBadge } from "@/components/pixel-badge"
import { PixelButton } from "@/components/pixel-button"

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
    <div className="bg-card border-3 border-primary shadow-pixel-lg hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pixel-lg transition-all duration-200">
      <div className="relative aspect-video overflow-hidden border-b-3 border-primary">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <PixelBadge variant="warning">FEATURED</PixelBadge>
          </div>
        )}
        {/* Pixel corner accents */}
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-secondary"></div>
      </div>
      <div className="p-6">
        <h3 className="font-pixel text-lg text-primary mb-3 leading-relaxed">{project.title}</h3>
        <p className="text-foreground/80 mb-4 line-clamp-2 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <PixelBadge key={tag} variant="default">
              {tag}
            </PixelBadge>
          ))}
        </div>

        <PixelButton
          asChild
          variant="outline"
          size="sm"
          className="w-full"
        >
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </Link>
        </PixelButton>
      </div>
    </div>
  )
}
