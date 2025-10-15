"use client"

import Link from "next/link"
import { Star, Sparkles, Search, ExternalLink, Github } from "lucide-react"
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
      <main className="min-h-screen bg-[#E8DCC8] flex items-center justify-center">
        <div className="text-center">
          <Sparkles size={40} className="text-[#F4B942] animate-pulse mx-auto mb-4" />
          <p className="font-serif text-xl text-[#1A1A1A]">Loading projects...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            About me
          </Link>
          <Link href="/blog" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Resume
          </Link>
          <Link href="/contact" className="bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium hover:bg-[#D4A854] transition-colors text-sm">
            Get in touch!
          </Link>
        </div>

        {/* Back Button */}
        <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </Link>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#F4B942] mb-4">
              <Sparkles size={32} className="animate-pulse" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#E8DCC8] mb-6">
              Projects
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl">
              A collection of personal projects, experiments, and open-source contributions
            </p>
            <div className="flex flex-wrap gap-4 items-center text-sm text-[#E8DCC8] mt-4">
              <span>{projects.length} total projects</span>
              <span className="text-[#F4B942]">•</span>
              <div className="flex items-center gap-2">
                <Star size={16} fill="#F4B942" className="text-[#F4B942]" />
                <span>{featuredCount} featured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large "WORK" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          WORK
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-[#E8DCC8] py-12">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or tech stack..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white text-[#1A1A1A] px-6 py-4 pr-12 border-2 border-[#1A1A1A] text-base focus:outline-none focus:border-[#E8944A]"
              />
              <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6C6C6C]" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="max-w-5xl mx-auto">
            <p className="font-serif text-sm text-[#6C6C6C] mb-3">FILTER BY:</p>
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-4 py-2 border-2 text-sm font-medium transition-colors ${
                    activeFilter === tab.id
                      ? 'bg-[#E8944A] border-[#E8944A] text-white'
                      : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:border-[#E8944A]'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {searchQuery && (
            <p className="mt-6 text-center text-sm text-[#6C6C6C]">
              Found {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeFilter !== 'all' && ` in ${activeFilter}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          )}
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-[#E8DCC8] py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white border-2 border-[#1A1A1A] hover:border-[#E8944A] transition-colors group h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Star size={16} fill="#E8944A" className="text-[#E8944A]" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6C6C6C] hover:text-[#E8944A] transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6C6C6C] hover:text-[#E8944A] transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#E8944A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#6C6C6C] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#E8DCC8] text-[#1A1A1A] px-3 py-1 border border-[#1A1A1A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (searchQuery || activeFilter !== 'all') && (
            <div className="text-center py-16">
              <Star size={40} fill="#E8944A" className="text-[#E8944A] mx-auto mb-4" />
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2">No projects found</p>
              <p className="text-[#6C6C6C] text-sm">Try a different filter or search term</p>
            </div>
          )}

          {projects.length === 0 && (
            <div className="text-center py-16">
              <Sparkles size={40} className="text-[#F4B942] mx-auto mb-4" />
              <p className="font-serif text-2xl text-[#1A1A1A] mb-2">No projects yet</p>
              <p className="text-[#6C6C6C] text-sm">Check back soon for new projects!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-[#1A1A1A] text-lg mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or discussing an opportunity?
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C4A3E] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
