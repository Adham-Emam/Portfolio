"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HeroSection() {
  const words = [
    {
      text: "Full-Stack",
    },
    {
      text: "Developer",
    },
    {
      text: "with",
    },
    {
      text: "passion",
    },
    {
      text: "for",
    },
    {
      text: "building",
    },
    {
      text: "great",
    },
    {
      text: "experiences.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto py-16 md:py-24 lg:py-32 space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            <span className="block">Hello, I&apos;m a</span>
          </h1>
          <TypewriterEffect
            words={words}
            className="text-2xl md:text-4xl mx-auto w-fit font-bold text-foreground tracking-tighter"
          />
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Specializing in modern web technologies and frameworks to create
            beautiful, functional, and user-friendly applications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <a
            className="flex items-center text-sm text-muted-foreground bg-muted/50 hover:bg-muted/30 rounded-md px-4 py-2"
            href="/AdhamEmam.pdf"
            download="AdhamEmam.pdf"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
