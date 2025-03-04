import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Django REST", "Docker", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects, skills, and blog posts.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "OpenWeather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Recipe Sharing Platform",
    description: "A platform for users to share, discover, and save recipes with social features.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    tags: ["Django", "PostgreSQL", "Bootstrap", "jQuery"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts and track progress over time.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support and user management.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "MongoDB", "Express", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Real Estate Listing",
    description: "A real estate listing platform with property search, filtering, and user accounts.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    tags: ["Django", "PostgreSQL", "Bootstrap", "Google Maps API"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my work, including web applications, mobile apps, and other software projects.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}