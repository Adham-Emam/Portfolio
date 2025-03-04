import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { formatDate } from "@/lib/utils"

// This would typically come from a database or CMS
const post = {
  title: "Building Responsive UIs with Tailwind CSS",
  description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
  image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1600&auto=format&fit=crop",
  date: "2025-01-15",
  slug: "building-responsive-uis-with-tailwind",
  category: "Frontend",
  author: {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    bio: "Full-stack developer specializing in modern web technologies."
  },
  content: `
## Introduction

Tailwind CSS has revolutionized the way developers approach UI design. Instead of writing custom CSS, Tailwind provides utility classes that can be composed to build any design directly in your markup.

### Why Tailwind CSS?

- **Utility-First**: Build complex components from a constrained set of primitive utilities
- **Responsive Design**: Built-in responsive modifiers make it easy to build responsive interfaces
- **Dark Mode**: Simple dark mode implementation with the 'dark:' prefix
- **Customization**: Highly customizable through the tailwind.config.js file

## Getting Started

To get started with Tailwind CSS, you need to install it in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Then, configure your template paths in the tailwind.config.js file:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Building Responsive Layouts

Tailwind makes it easy to build responsive layouts using breakpoint prefixes:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Content -->
</div>
\`\`\`

This creates a layout that's:
- 1 column on mobile
- 2 columns on medium screens (md)
- 3 columns on large screens (lg)

## Styling Components

Let's create a simple card component using Tailwind CSS:

\`\`\`html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="image.jpg" alt="Card image" class="w-full h-48 object-cover" />
  <div class="p-4">
    <h3 class="text-xl font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">Card description goes here.</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Learn More
    </button>
  </div>
</div>
\`\`\`

## Conclusion

Tailwind CSS provides a powerful set of tools for building responsive, maintainable user interfaces. By leveraging its utility classes, you can rapidly develop custom designs without writing custom CSS.

As you become more familiar with Tailwind, you'll find that it speeds up your development process and helps maintain consistency across your projects.
  `
}

// This would typically be a server component with params
export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {formatDate(post.date)}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-4 w-4" />
                  <span className="sr-only">Bookmark</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-semibold">Written by {post.author.name}</h3>
              <p className="text-muted-foreground">{post.author.bio}</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button>
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}