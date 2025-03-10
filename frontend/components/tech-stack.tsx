"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type Technologies = {
  name: string;
  icon: string;
  category: string;
};

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-full" />
        ))}
      </div>
      <div className="grid grid-cols-2 px-2 md:px-4 lg:px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 rounded-lg border bg-card"
          >
            <Skeleton className="h-12 w-12 mb-3 rounded-md" />
            <Skeleton className="h-4 w-20 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const [mounted, setMounted] = useState(false);
  const [technologies, setTechnologies] = useState<Technologies[]>([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const fetchTechnologies = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tech_stack/`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
        setTechnologies([]);
        setError("Failed to load Tech Stacks. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return <LoadingSkeleton />;
  }

  const filteredTech =
    filter === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === filter);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6">
      {error ? (
        <section className="py-16">
          <div className="container text-center">
            <p className="text-destructive">{error}</p>
          </div>
        </section>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={filter === "all" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter("all")}
            >
              All
            </Badge>
            <Badge
              variant={filter === "frontend" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </Badge>
            <Badge
              variant={filter === "backend" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter("backend")}
            >
              Backend
            </Badge>
            <Badge
              variant={filter === "devops" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter("devops")}
            >
              DevOps
            </Badge>
          </div>

          <div className="grid grid-cols-2 px-2 md:px-4 lg:px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <div className="relative h-12 w-12 mb-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className={cn(
                      "object-contain",
                      tech.name === "GitHub" && "dark:invert"
                    )}
                  />
                </div>
                <span className="text-center text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
