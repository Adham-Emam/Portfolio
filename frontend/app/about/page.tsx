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
                  I&apos;m a passionate full-stack developer with expertise in
                  building modern web applications.
                </p>
                <p className="mb-6">
                  With over 3 years of experience in web development, I
                  specialize in creating responsive, user-friendly applications
                  using the latest technologies and best practices. I enjoy
                  solving complex problems and turning ideas into reality
                  through clean, efficient code.
                </p>
                <p className="mb-8">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact" className="transition-colors">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Link>
                  </Button>
                  <a
                    className="flex items-center text-sm text-muted-foreground bg-muted/50 hover:bg-muted/30 rounded-md px-4 py-2 border transition-colors"
                    href="/AdhamEmam.pdf"
                    download="AdhamEmam.pdf"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
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
                  Bachelor of Business
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cairo University, 2021 - 2024
                </p>
                <p>
                  Excitedly anticipating graduation from Cairo University’s
                  Faculty of Commerce with a focus on business, Eager to
                  leverage my education in future professional endeavors.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  CS50 Intro to Programming with Python
                </h3>
                <p className="text-muted-foreground mb-4">
                  Harvard University, 2023
                </p>
                <p>
                  This intensive course offered a thorough introduction to
                  computer science and Python programming. I mastered core
                  concepts, problem-solving techniques, and translating ideas
                  into functional code. Through challenging problem sets and
                  projects, I sharpened my programming skills and built a
                  logical approach to tackling algorithmic challenges.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Kimit Academy , 2025
                </p>
                <p>
                  Completed a full-stack MEAN bootcamp at Kimit Academy,
                  mastering MongoDB, Express.js, Angular, and Node.js. Built
                  dynamic web applications, honing skills in front-end and
                  back-end development through hands-on projects. Passionate
                  about creating scalable, user-friendly solutions with the MEAN
                  stack.
                </p>
              </div>

              {/* <div className="border rounded-lg p-6">
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
              </div> */}
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
