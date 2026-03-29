'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Scale } from '@/components/animations/Scale'
import { Loader2 } from 'lucide-react'

export const revalidate = 60

export function TechStack() {
  const [filter, setFilter] = useState<null | string>(null)
  const [technologies, setTechnologies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/technologies')
      const data = await res.json()

      const parsed = data.reverse().map((page: any) => {
        const props = page.properties
        return {
          name: props.Name.title[0].plain_text,
          category: props.Category.select.name.toLowerCase(),
          icon: props.Icon.files[0]?.external.url,
        }
      })

      setTechnologies(parsed)
      setLoading(false)
    }

    fetchData()
  }, [])

  const filteredTech = filter
    ? technologies.filter((tech) => tech.category === filter)
    : technologies

  return (
    <div className="space-y-6">
      {/* Filter Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        {['languages', 'frontend', 'backend', 'devops'].map((cat) => (
          <Badge
            key={cat}
            variant={filter === cat ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => (filter ? setFilter(null) : setFilter(cat))}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Badge>
        ))}
      </div>

      {/* Grid of Tech */}
      {loading ? (
        <div className="flex justify-center items-center h-24">
          <Loader2 className=" animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-2 px-2 md:px-4 lg:px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTech.map((tech, index) => (
            <Scale
              key={index}
              className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              delay={index * 0.02}
            >
              <div className="relative h-12 w-12 mb-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className={cn(
                    'object-contain',
                    ['Next.js', 'Express.js', 'GitHub', 'Flask'].includes(
                      tech.name,
                    ) && 'dark:invert',
                  )}
                />
              </div>
              <span className="text-center text-sm font-medium">
                {tech.name}
              </span>
            </Scale>
          ))}
        </div>
      )}
    </div>
  )
}
