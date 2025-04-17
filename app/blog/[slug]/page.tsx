import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Calendar, ReceiptRussianRuble } from 'lucide-react'
import { posts } from '@/data/posts'
import { HighlightedContent } from '@/components/highlighted-content'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug

  // Find the post based on slug
  const post = posts.find((post) => post.slug === slug)

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug

  // Find the post based on slug
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    // Handle case when post is not found
    return <div>Post not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="relative">
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[400px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover absolute left-0 top-0 w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 mx-auto w-fit">
              <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                  <Separator orientation="vertical" className="h-8" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.posted_at}
                  </div>
                  <Separator orientation="vertical" className="h-8" />
                  <p className="text-sm text-muted-foreground">
                    {post.reading_time}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container max-w-4xl py-12 mx-auto w-fit px-8 lg:px-0">
            {/* Main Content */}
            <div className="flex-1">
              <HighlightedContent html={post.body} />
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {/* <RandomPosts slug={slug} count={4} /> */}
      </main>
    </div>
  )
}
