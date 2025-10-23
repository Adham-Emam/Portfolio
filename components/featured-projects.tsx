import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { getFeaturedProjects } from '@/lib/notion'

export const revalidate = 60

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <Button asChild variant="ghost">
          <Link href="/projects" aria-label="View all projects">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${
              (project.properties.Title as any).title[0].plain_text
            }`}
            index={index}
            title={(project.properties.Title as any).title[0].plain_text}
            bannerImage={(project.cover as any).external.url || ''}
            tags={(project.properties.Tags as any).multi_select}
            description={
              (project.properties.Description as any).rich_text[0].plain_text
            }
            demo={(project.properties.Demo as any).url}
            github={(project.properties.Github as any).url}
          />
        ))}
      </div>
    </section>
  )
}
