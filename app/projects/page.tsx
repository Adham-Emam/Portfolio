import type { Metadata } from 'next'
import { ProjectCard } from '@/components/project-card'
import { getProjects, getFeaturedProjects } from '@/lib/notion'

export const metadata: Metadata = {
  title: "Adham's Projects",
  description:
    'Case studies of my technical projects including Forge (skill exchange platform).',
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  const featuredProjects = await getFeaturedProjects()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work, including web applications, mobile apps,
            and other software projects.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${
                  (project.properties.Title as any).title[0].plain_text
                }`}
                index={index}
                title={(project.properties.Title as any).title[0].plain_text}
                bannerImage={(project.cover as any).external.url}
                tags={(project.properties.Tags as any).multi_select}
                description={
                  (project.properties.Description as any).rich_text[0]
                    .plain_text
                }
                demo={(project.properties.Demo as any).url}
                github={(project.properties.Github as any).url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                title={(project.properties.Title as any).title[0].plain_text}
                bannerImage={(project.cover as any).external.url}
                tags={(project.properties.Tags as any).multi_select}
                description={
                  (project.properties.Description as any).rich_text[0]
                    .plain_text
                }
                demo={(project.properties.Demo as any).url}
                github={(project.properties.Github as any).url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
