import { Metadata } from 'next'
import Link from 'next/link'
import { NowSection } from '@/components/now-section'
import { getNowData } from '@/lib/notion'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Boxes } from 'lucide-react'

export const metadata: Metadata = {
  title: "What I'm Doing Now",
  description:
    "Portfolio of Adham Emam - Explore all the projects, learnings and posts that I'm working on now.",
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function NowPage() {
  const nowSections = await getNowData()

  return (
    <div className="min-h-screen pb-16">
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            What I&apos;m Doing Now
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Updated monthly – here’s what I’m focused on these days.
          </p>
        </div>
      </section>

      {nowSections.length > 0 ? (
        <section className="container grid grid-cols-1 lg:grid-cols-2 px-2 md:px-4 lg:px-8 gap-6 space-y-8 py-8">
          {nowSections.map((section, index) => (
            <NowSection
              key={section.id}
              index={index}
              id={section.id}
              title={(section.properties.Title as any).title[0].plain_text}
              category={(section.properties.Category as any).select.name}
              status={(section.properties.Status as any).status.name}
              progress={(section.properties.Progress as any).formula.number}
              description={
                (section.properties.Description as any).rich_text[0].plain_text
              }
              updatedAt={
                (section.properties['Updated at'] as any).last_edited_time
              }
            />
          ))}
        </section>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Boxes width={50} height={50} />
            </EmptyMedia>

            <EmptyTitle>Nothing public yet</EmptyTitle>

            <EmptyDescription>
              I&apos;m currently learning and building behind the scenes.
              I&apos;ll share what I&apos;m working on here soon.
            </EmptyDescription>
          </EmptyHeader>

          <EmptyContent className="flex-row justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/projects">What I usually build</Link>
            </Button>
          </EmptyContent>
        </Empty>
      )}
    </div>
  )
}
