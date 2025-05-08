import { HeroBanner } from "@/components/hero-banner"
import { PostCard } from "@/components/post-card"
import { ProjectCard } from "@/components/project-card"
import { getPosts } from "@/lib/posts"
import { getProjects } from "@/lib/projects"

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3)
  const featuredProjects = (await getProjects()).filter((project) => project.featured)

  return (
    <main className="flex flex-col gap-16 pb-16">
      <HeroBanner />

      {/* Latest Blog Posts */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bungee text-3xl text-persona-red">Latest Posts</h2>
          <a href="/blog" className="font-bungee text-sm text-persona-white hover:text-persona-red transition-colors">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 -skew-y-3 bg-persona-maroon py-16 my-16">
        <div className="skew-y-3">
          <h2 className="font-bungee text-3xl text-persona-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
