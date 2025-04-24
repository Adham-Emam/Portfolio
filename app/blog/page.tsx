import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Binary } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/animations/FadeIn'
import { getPosts } from '@/lib/notion'
import { formatRelativeDate } from '@/lib/utils'

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Adham's Tech Blog",
  description:
    'In-depth technical articles on dynamic programming algorithms, TypeScript design patterns, database optimization strategies, and React performance tuning.',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="blog-pattern py-16 md:py-24 bg-muted/50">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full p-4 bg-primary/10 ring-1 ring-primary/20">
                <Binary className="h-12 w-12 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Binary Thoughts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Where logic meets creativity – a developer&apos;s perspective
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeIn key={index} direction="right" delay={(index / 3) * 0.2}>
                <Card className="relative overflow-hidden pb-12">
                  {(post.cover as any).external.url ? (
                    <Image
                      src={(post.cover as any).external.url}
                      alt={(post.properties.Title as any).title[0].plain_text}
                      width={382}
                      height={192}
                      priority
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="h-48 w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {(post.properties.Category as any).select.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {formatRelativeDate(post.created_time)}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      {(post.properties.Title as any).title[0].plain_text}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {(post.properties.Excerpt as any).rich_text[0].plain_text}
                    </p>
                    <div className="absolute right-5 bottom-5">
                      <Link
                        href={`/blog/${
                          (post.properties.Slug as any).rich_text[0].plain_text
                        }`}
                      >
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
