"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "frontend",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "frontend",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "frontend",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "backend",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    category: "backend",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    category: "backend",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    category: "backend",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "backend",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "devops",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "devops",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "devops",
  },
];

export function TechStack() {
  const [filter, setFilter] = useState("all");

  const filteredTech =
    filter === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === filter);

  return (
    <div className="space-y-6">
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
          className="cursor-pointer py-1.5 px-4"
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
            <span className="text-center text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
