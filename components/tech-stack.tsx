"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/data/technologies";

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
            key={tech.id}
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
