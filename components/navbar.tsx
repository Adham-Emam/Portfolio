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
import { useTheme } from 'next-themes'

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
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-10 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Image
            src={
              'https://res-console.cloudinary.com/drf4f1euk/thumbnails/v1/image/upload/v1744977988/bG9nb195dGdwMWI=/drilldown'
            }
            alt="logo"
            width={35}
            height={35}
            className={`me-2 ${resolvedTheme === 'light' && 'brightness-0'}`}
          />
          <Link href="/" className="font-bold text-xl">
            Adham Emam
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
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
