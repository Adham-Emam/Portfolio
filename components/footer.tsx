"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12 w-fit mx-auto px-2 md:px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-center items-center md:justify-start mb-4">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className={`me-2 ${
                  resolvedTheme === "light" && "brightness-0"
                }`}
              />
              <h3 className="text-lg font-semibold">Adham Emam</h3>
            </div>
            <p className="text-muted-foreground">
              Full-stack developer specializing in modern web technologies and
              frameworks.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Adham-Emam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/adham-emam-91935a229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:adhamh372002@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Adham Emam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
