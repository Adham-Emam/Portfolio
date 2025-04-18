import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Adham Emam | Technical Collaboration',
  description:
    "For engineering leadership roles, technical consulting, or open source contributions. Let's discuss complex system design challenges and high-performance solutions.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Contact Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to get in
              touch.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="h-fit py-4">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          adhamh372002@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">
                          +20 112 800 0832
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">Cairo, Egypt</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Link
                        href="https://github.com/Adham-Emam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/adham-emam-91935a229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>

                      <Link
                        href="mailto:adhamh372002@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      I&apos;m currently available for freelance work and
                      full-time positions. If you have a project that you want
                      to get started, think you need my help with something, or
                      just want to say hello, then get in touch.
                    </p>
                    <p className="text-muted-foreground">
                      Response time: Usually within 24-48 hours
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
