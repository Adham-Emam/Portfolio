"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-16" />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </CardFooter>
    </Card>
  );
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
          {project.tags.split(",").map((tag) => (
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
  );
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/projects/");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setProjects(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Prevent hydration issues
  if (!mounted) {
    return null;
  }

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
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

        {error ? (
          <section className="py-16">
            <div className="container text-center">
              <p className="text-destructive">{error}</p>
            </div>
          </section>
        ) : (
          <>
            <section className="py-16">
              <div className="container">
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {isLoading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                      ))
                    : featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                </div>
              </div>
            </section>

            <section className="py-16 bg-muted/50">
              <div className="container">
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                  All Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                      ))
                    : otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
