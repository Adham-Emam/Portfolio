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
import { FadeIn } from '@/components/animations/FadeIn'

type ProjectProps = {
  index: number
  title: string
  bannerImage: string
  tags: { name: string }[]
  description: string
  github: string
  demo: string
}

export function ProjectCard(props: ProjectProps) {
  const { index, title, bannerImage, description, github, demo, tags } = props

  return (
    <FadeIn direction="right" delay={(index * 0.1) / 3}>
      <Card className="overflow-hidden relative pb-16 animate-neon-glow">
        <div className="relative h-48 w-full">
          <Image
            src={bannerImage}
            alt={`Screenshot or preview of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="eager"
            priority
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="capitalize">
                {tag.name}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between w-full absolute bottom-0">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title} on GitHub`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {demo && (
            <Button size="sm" asChild>
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo of ${title}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </FadeIn>
  )
}
