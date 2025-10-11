"use client"

import { ProjectCard } from "@/components/project-card"
import { SearchBar } from "@/components/search-bar"
import { FilterTabs } from "@/components/filter-tabs"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { getProjects } from "@/lib/projects"
import { useState, useEffect, useMemo } from "react"
import type { Project } from "@/lib/projects"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects()
      setProjects(data)
      setFilteredProjects(data)
      setIsLoading(false)
    }
    loadProjects()
  }, [])

  // Get unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [projects])

  const filterTabs = useMemo(() => [
    { id: "all", label: "All", count: projects.length },
    { id: "featured", label: "Featured", count: projects.filter(p => p.featured).length },
    ...allTags.map(tag => ({
      id: tag,
      label: tag,
      count: projects.filter(p => p.tags.includes(tag)).length,
    })),
  ], [projects, allTags])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    applyFilters(query, activeFilter)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    applyFilters(searchQuery, filter)
  }

  const applyFilters = (query: string, filter: string) => {
    let filtered = projects

    // Apply tag/featured filter
    if (filter === "featured") {
      filtered = filtered.filter(p => p.featured)
    } else if (filter !== "all") {
      filtered = filtered.filter(p => p.tags.includes(filter))
    }

    // Apply search filter
    if (query.trim()) {
      const lowercaseQuery = query.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(lowercaseQuery) ||
          project.description.toLowerCase().includes(lowercaseQuery) ||
          project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    }

    setFilteredProjects(filtered)
  }

  const featuredCount = projects.filter(p => p.featured).length

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="text-center py-16">
          <div className="inline-block w-8 h-8 border-3 border-primary border-t-transparent animate-spin mb-4"></div>
          <p className="font-pixel text-sm text-primary">Loading projects...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <AnimateOnScroll animation="fade-up">
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
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="mb-8">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search projects by name, description, or tech stack..."
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={150}>
        <div className="mb-8">
          <p className="font-pixel text-xs text-muted-foreground mb-3">FILTER BY:</p>
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onTabChange={handleFilterChange}
          />
        </div>
      </AnimateOnScroll>

      {searchQuery && (
        <p className="mb-6 text-sm font-mono text-muted-foreground">
          Found {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'all' && ` in ${activeFilter}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <AnimateOnScroll key={project.id} animation="fade-up" delay={index * 50}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>

      {filteredProjects.length === 0 && (searchQuery || activeFilter !== 'all') && (
        <AnimateOnScroll animation="fade-in">
          <div className="text-center py-16 border-3 border-primary bg-card">
            <p className="font-pixel text-primary mb-2">No projects found</p>
            <p className="text-muted-foreground text-sm">Try a different filter or search term</p>
          </div>
        </AnimateOnScroll>
      )}

      {projects.length === 0 && (
        <div className="text-center py-16 border-3 border-primary bg-card">
          <p className="font-pixel text-primary mb-2">No projects yet</p>
          <p className="text-muted-foreground text-sm">Check back soon for new projects!</p>
        </div>
      )}
    </main>
  )
}
