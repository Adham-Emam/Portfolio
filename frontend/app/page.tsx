import { HeroSection } from "@/components/hero-section";
import { TechStack } from "@/components/tech-stack";
import { FeaturedProjects } from "@/components/featured-projects";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundAnimation } from "@/components/ui/bg-animation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background/90 backdrop-blur-lg">
          <BackgroundAnimation />
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
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              My Experience
            </h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="font-semibold">2022 - Present</h3>
                  <p className="text-muted-foreground">Web Developer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Freelancing</h3>
                  <ul className="list-disc ms-4 mt-4 space-y-2 text-muted-foreground">
                    <li>Built responsive front-end interfaces using Next.js</li>
                    <li>Developed RESTful APIs with Django REST Framework</li>
                    <li>
                      Implemented authentication and authorization systems
                    </li>
                    <li>
                      Integrated third-party services and payment gateways
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="font-semibold">Sep 2023 - Dec 2024</h3>
                  <p className="text-muted-foreground">Graphic Designer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">
                    Cairo University, Student Council
                  </h3>
                  <ul className="list-disc ms-4 mt-4 space-y-2 text-muted-foreground">
                    <li>
                      Designed promotional materials, including posters and
                      social media graphics, showcasing creativity and attention
                      to detail.
                    </li>
                    <li>
                      Collaborated with team members to bring visual concepts to
                      life, demonstrating effective communication and teamwork.
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="font-semibold">Aug 2024 - Nov 2024</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">
                    Forge - Skill Exchange Platform
                  </h3>
                  <ul className="list-disc ms-4 mt-4 space-y-2 text-muted-foreground">
                    <li>
                      Forge was designed to be the place where users could
                      sell/trade their skills and freelance in return for a
                      digital currency called Embers.
                    </li>
                    <li>
                      Integrating the fully featured backend using Django REST
                      Framework with a dynamic Next.js frontend.
                    </li>
                    <li>
                      Skills trading, freelance job posting, and ember
                      redemption to cash out into real-life currencies are
                      features implemented in the following manner:
                    </li>
                    <li>
                      Designed a highly advanced filtering algorithm to match
                      users with highly related skill exchanges and job
                      opportunities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href="/about">
              <Button className="block w-[50%] mx-auto mt-16">View More</Button>
            </Link>
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
                      adhamh372002@gmail.com
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
      </main>
      <Footer />
    </div>
  );
}
