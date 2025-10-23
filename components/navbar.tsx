'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import Image from 'next/image'

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/now',
    label: 'Now',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-10 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={35}
            height={35}
            priority
            className="me-2 brightness-0 dark:brightness-100"
          />
          <Link href="/" className="font-bold text-xl">
            Adham Emam
          </Link>
        </div>

        <nav className="hidden ms-auto mr-6 md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === route.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <>
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'py-4 text-sm font-medium transition-colors hover:text-primary',
                        pathname === route.href
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {route.label}
                    </Link>
                    <Separator />
                  </>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
