import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'
import { FadeIn } from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: "Adham's Projects",
  description:
    'Case studies of my technical projects including Forge (skill exchange platform).',
}

type Project = {
  id: number
  title: string
  image: string
  description: string
  githubUrl: string
  liveUrl: string
  date: string
  tags: string[]
  featured: boolean
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card key={project.id} className="overflow-hidden relative pb-16">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={`Screenshot or preview of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={project.featured}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between w-full absolute bottom-0">
        <Button variant="outline" size="sm" asChild>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            Code
          </Link>
        </Button>
        {project.liveUrl && (
          <Button size="sm" asChild>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live demo of ${project.title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function ProjectsPage() {
  const featuredProjects = projects
    .slice()
    .reverse()
    .filter((project) => project.featured)
  const otherProjects = projects
    .slice()
    .reverse()
    .filter((project) => !project.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
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
                <FadeIn key={project.id} direction="right" delay={index * 0.1}>
                  <ProjectCard project={project} />
                </FadeIn>
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
              {otherProjects.map((project, index) => (
                <FadeIn
                  key={project.id}
                  direction="right"
                  delay={(index / 3) * 0.1}
                >
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
