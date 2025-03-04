import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

const posts = [
  {
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=800&auto=format&fit=crop",
    date: "2025-01-15",
    slug: "building-responsive-uis-with-tailwind"
  },
  {
    title: "Django REST Framework Best Practices",
    description: "Explore best practices for building robust APIs with Django REST Framework.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    date: "2025-01-05",
    slug: "django-rest-framework-best-practices"
  },
  {
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to getting started with the latest version of Next.js.",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop",
    date: "2024-12-20",
    slug: "getting-started-with-nextjs-14"
  }
]

export function LatestPosts() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
        <Button asChild variant="ghost">
          <Link href="/blog">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-1 h-4 w-4" />
                {formatDate(post.date)}
              </div>
              <CardTitle className="line-clamp-1">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}