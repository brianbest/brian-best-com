import { HeroBanner } from "@/components/hero-banner"
import { PostCard } from "@/components/post-card"
import { ProjectCard } from "@/components/project-card"
import { PixelSection } from "@/components/pixel-section"
import { getPosts } from "@/lib/posts"
import { getProjects } from "@/lib/projects"
import Link from "next/link"

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3)
  const featuredProjects = (await getProjects()).filter((project) => project.featured)

  return (
    <main className="flex flex-col gap-0">
      <HeroBanner />

      {/* Latest Blog Posts */}
      <PixelSection bordered>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="font-pixel text-2xl md:text-3xl text-primary mb-2">Latest Posts</h2>
            <p className="text-muted-foreground text-sm">Recent thoughts and tutorials</p>
          </div>
          <Link 
            href="/blog" 
            className="font-pixel text-xs text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>View All</span>
            <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </PixelSection>

      {/* Featured Projects */}
      <PixelSection bordered className="bg-muted/30">
        <div className="mb-10">
          <h2 className="font-pixel text-2xl md:text-3xl text-primary mb-2">Featured Projects</h2>
          <p className="text-muted-foreground text-sm">Showcasing my best work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PixelSection>

      {/* Now Section Preview */}
      <PixelSection bordered>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-pixel text-2xl md:text-3xl text-primary mb-4">What I'm Up To</h2>
          <p className="text-muted-foreground mb-8">
            Currently focused on building innovative solutions, learning new technologies, and sharing knowledge with the developer community.
          </p>
          <Link 
            href="/about" 
            className="inline-block font-pixel text-xs text-primary hover:text-secondary transition-colors border-2 border-primary px-6 py-3 hover:bg-primary/10"
          >
            Learn More About Me →
          </Link>
        </div>
      </PixelSection>
    </main>
  )
}
