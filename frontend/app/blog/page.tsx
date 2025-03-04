import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Search, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

const posts = [
  {
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=800&auto=format&fit=crop",
    date: "2025-01-15",
    slug: "building-responsive-uis-with-tailwind",
    category: "Frontend"
  },
  {
    title: "Django REST Framework Best Practices",
    description: "Explore best practices for building robust APIs with Django REST Framework.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    date: "2025-01-05",
    slug: "django-rest-framework-best-practices",
    category: "Backend"
  },
  {
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to getting started with the latest version of Next.js.",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop",
    date: "2024-12-20",
    slug: "getting-started-with-nextjs-14",
    category: "Frontend"
  },
  {
    title: "Containerizing Your Applications with Docker",
    description: "Learn how to containerize your applications using Docker for consistent deployment.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop",
    date: "2024-12-10",
    slug: "containerizing-applications-with-docker",
    category: "DevOps"
  },
  {
    title: "Introduction to SQL and Database Design",
    description: "A beginner's guide to SQL and relational database design principles.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    date: "2024-11-25",
    slug: "introduction-to-sql-database-design",
    category: "Database"
  },
  {
    title: "Version Control with Git and GitHub",
    description: "Master version control with Git and collaborate effectively using GitHub.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    date: "2024-11-15",
    slug: "version-control-git-github",
    category: "DevOps"
  },
  {
    title: "Building RESTful APIs with Django",
    description: "A step-by-step guide to building RESTful APIs using Django and Django REST Framework.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    date: "2024-11-05",
    slug: "building-restful-apis-django",
    category: "Backend"
  },
  {
    title: "Modern JavaScript Features You Should Know",
    description: "Explore modern JavaScript features that will improve your code quality and productivity.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    date: "2024-10-25",
    slug: "modern-javascript-features",
    category: "Frontend"
  }
]

const categories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Database"
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, programming, and technology.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search posts..." className="pl-8" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <div className="flex items-center justify-between mb-2">
                          <Badge>{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {formatDate(post.date)}
                          </div>
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
              
              <div className="md:w-1/4">
                <div className="border rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link 
                        key={index} 
                        href={`/blog?category=${category === 'All' ? '' : category.toLowerCase()}`}
                        className="block p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}