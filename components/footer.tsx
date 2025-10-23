import Link from 'next/link'
import Image from 'next/image'
import { IoMdMail } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12 w-fit mx-auto px-2 md:px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center md:justify-start mb-4">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
                priority
                className="me-2 brightness-0 dark:brightness-100"
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
            <ul className="grid grid-cols-1 md:grid-cols-2 space-y-2">
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
                  href="/now"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Now
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
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/adham-emam-91935a229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://dev.to/adham_emam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaDev className="h-6 w-6" />
                <span className="sr-only">Dev.to</span>
              </Link>
              <Link
                href="mailto:adhamh372002@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IoMdMail className="h-6 w-6" />
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
  )
}
