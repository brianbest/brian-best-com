import { ProjectCard } from "@/components/project-card"
import { getProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects | Brian Best",
  description: "Personal and open-source projects by Brian Best",
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
