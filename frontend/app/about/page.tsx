import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TechStack } from "@/components/tech-stack";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  I'm a passionate full-stack developer with expertise in
                  building modern web applications.
                </p>
                <p className="mb-6">
                  With over 5 years of experience in web development, I
                  specialize in creating responsive, user-friendly applications
                  using the latest technologies and best practices. I enjoy
                  solving complex problems and turning ideas into reality
                  through clean, efficient code.
                </p>
                <p className="mb-8">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
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
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="font-semibold">2022 - Present</h3>
                  <p className="text-muted-foreground">Senior Developer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">
                    Tech Innovations Inc.
                  </h3>
                  <p className="mb-4">
                    Lead developer for multiple client projects, focusing on
                    Next.js, Django, and cloud infrastructure.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Developed and maintained large-scale web applications
                    </li>
                    <li>
                      Implemented CI/CD pipelines using GitHub Actions and
                      Docker
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                    <li>
                      Optimized application performance and improved user
                      experience
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="font-semibold">2020 - 2022</h3>
                  <p className="text-muted-foreground">Web Developer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">
                    Digital Solutions Co.
                  </h3>
                  <p className="mb-4">
                    Full-stack developer working on e-commerce and SaaS
                    applications.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Built responsive front-end interfaces using React.js
                    </li>
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
                  <h3 className="font-semibold">2018 - 2020</h3>
                  <p className="text-muted-foreground">Junior Developer</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">WebTech Studios</h3>
                  <p className="mb-4">
                    Front-end developer focused on creating responsive websites
                    and web applications.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Developed responsive websites using HTML, CSS, and
                      JavaScript
                    </li>
                    <li>
                      Implemented UI designs using Bootstrap and custom CSS
                    </li>
                    <li>
                      Collaborated with designers to ensure pixel-perfect
                      implementations
                    </li>
                    <li>Optimized websites for performance and SEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground mb-4">
                  University of Technology, 2014 - 2018
                </p>
                <p>
                  Graduated with honors, specializing in software engineering
                  and web development.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  AWS Certified Developer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Amazon Web Services, 2021
                </p>
                <p>
                  Certified in developing, deploying, and debugging cloud-based
                  applications using AWS.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Professional Scrum Master I
                </h3>
                <p className="text-muted-foreground mb-4">Scrum.org, 2020</p>
                <p>
                  Certified in Scrum methodologies and agile project management.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  React.js Advanced Concepts
                </h3>
                <p className="text-muted-foreground mb-4">
                  Frontend Masters, 2019
                </p>
                <p>
                  Completed advanced training in React.js, Redux, and modern
                  front-end architecture.
                </p>
              </div>
            </div>
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
      </main>
      <Footer />
    </div>
  );
}
