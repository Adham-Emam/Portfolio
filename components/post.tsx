import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Calendar } from 'lucide-react'
import { HighlightedContent } from '@/components/highlighted-content'
import { formatDate } from '@/lib/utils'

interface PostProps {
  title: string
  category: string
  bannerImage: string
  excerpt: string
  content: string
  readingTime: number
  date: string
}

export default function Post(props: PostProps) {
  const { title, bannerImage, category, excerpt, content, readingTime, date } =
    props

  return (
    <article className="flex min-h-screen flex-col relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={bannerImage}
          alt={title}
          fill
          className="object-cover absolute left-0 top-0 w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 mx-auto w-fit">
          <div className="container max-w-4xl mx-auto w-fit px-8 lg:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              {excerpt}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {category}
                </span>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formatDate(date)}
              </div>
              <Separator orientation="vertical" className="h-8" />
              <p className="text-sm text-muted-foreground">{readingTime} min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl py-12 mx-auto w-fit px-8 lg:px-0">
        <div className="flex-1">
          <HighlightedContent html={content} />
        </div>
      </div>
    </article>
  )
}
