import { HeroSection } from '@/components/hero-section'
import { TechStack } from '@/components/tech-stack'
import { FeaturedProjects } from '@/components/featured-projects'
import { ExperienceSection } from '@/components/experience-section'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background/90 backdrop-blur-lg">
        <HeroSection />
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            My Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container">
          <FeaturedProjects />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">My Experience</h2>
            <Button asChild variant="ghost">
              <Link href="/about" aria-label="View all projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ExperienceSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">
                Let&apos;s Work Together
              </h3>
              <p className="text-muted-foreground">
                I&apos;m currently available for freelance work and full-time
                positions. If you have a project that you want to get started,
                think you need my help with something, or just want to say
                hello, then get in touch.
              </p>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    adhamemam372002@gmail.com
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
