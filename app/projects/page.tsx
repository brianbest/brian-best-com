import { ProjectCard } from "@/components/project-card"
import { getProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects | Brian Best",
  description: "Personal and open-source projects by Brian Best",
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  const featuredCount = projects.filter(p => p.featured).length

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Projects</h1>
        <p className="text-muted-foreground mb-4">
          A collection of personal projects, experiments, and open-source contributions
        </p>
        <div className="flex flex-wrap gap-4 items-center text-sm font-mono">
          <span className="text-muted-foreground">{projects.length} total projects</span>
          <span className="text-primary">•</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-accent"></span>
            <span className="text-muted-foreground">{featuredCount} featured</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16 border-3 border-primary bg-card">
          <p className="font-pixel text-primary mb-2">No projects yet</p>
          <p className="text-muted-foreground text-sm">Check back soon for new projects!</p>
        </div>
      )}
    </main>
  )
}
