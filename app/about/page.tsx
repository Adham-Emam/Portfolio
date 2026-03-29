import type { Metadata } from 'next'
import { TechStack } from '@/components/tech-stack'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection } from '@/components/education-section'
import { Button } from '@/components/ui/button'
import { FileText, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Adham Emam | Full-Stack Developer',
  description:
    'Portfolio of Adham Emam - Building high-performance web applications with Next.js, Django, and TypeScript. Specializing in scalable architectures and algorithm optimization.',
}

export default function AboutPage() {
  const startDate = new Date(2024, 2, 1).getFullYear()
  const nowDate = new Date().getFullYear()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I&apos;m a passionate full-stack developer with expertise in
                building modern web applications.
              </p>
              <p className="mb-6">
                With over {nowDate - startDate} years of dedicated learning and
                working on project on the web, I specialize in creating
                responsive, user-friendly applications using the latest
                technologies and best practices. I enjoy solving complex
                problems and turning ideas into reality through clean, efficient
                code.
              </p>
              <p className="mb-8">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through blog posts and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="glow-effect">
                  <Link href="/contact" className="transition-colors">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <a
                  className="flex justify-center items-center text-sm text-muted-foreground bg-muted/50 hover:bg-muted/30 rounded-md px-4 py-2 border transition-colors"
                  href="https://drive.google.com/file/d/1HnL8RrlmOpeYYnBFYhppT-ejfu8jFuUd/view?usp=sharing"
                  target="_blank"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  My Resume
                </a>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border">
              <Image
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1024&auto=format&fit=crop"
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            My Experience
          </h2>
          <ExperienceSection />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Education & Certifications
          </h2>
          <EducationSection />
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Technical Skills
          </h2>
          <TechStack />
        </div>
      </section>
    </div>
  )
}
