import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Binary } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { posts } from '@/data/posts'
import { FadeIn } from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: "Adham's Tech Blog",
  description:
    'In-depth technical articles on dynamic programming algorithms, TypeScript design patterns, database optimization strategies, and React performance tuning.',
}

export default function BlogPage() {
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
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="h-48 w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.posted_at}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="absolute right-5 bottom-5">
                      <Link href={`/blog/${post.slug}`}>
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
