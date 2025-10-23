import { Clock, Book, Brain, Code, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/FadeIn'
import { Progress } from '@/components/ui/progress'
import { formatRelativeDate } from '@/lib/utils'

interface NowProps {
  index: number
  id: string
  title: string
  description: string
  category: string
  status: string
  progress: number
  updatedAt: string
}

export const revalidate = 60

export async function NowSection(props: NowProps) {
  const {
    index,
    id,
    title,
    description,
    category,
    status,
    progress,
    updatedAt,
  } = props

  const getIcon = (category: string) => {
    switch (category) {
      case 'Building':
        return <Code className="h-6 w-6 mr-2 text-chart-1 text-orange-500" />
      case 'Learning':
        return <Brain className="h-6 w-6 mr-2 text-chart-2 text-green-700" />
      case 'Reading':
        return <Book className="h-6 w-6 mr-2 text-chart-3 text-blue-950" />
      default:
        return null
    }
  }

  return (
    <FadeIn
      className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow !m-0"
      direction="right"
      delay={index * 0.1}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {getIcon(category)}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <Badge variant="default" className="capitalize">
          {status}
        </Badge>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium">
            {Math.round(progress * 100)}%
          </span>
        </div>
        <Progress value={progress * 100} />
      </div>

      <p className="space-y-3 mb-6 text-muted-foreground line-clamp-none lg:line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>Updated {formatRelativeDate(updatedAt)}</span>
        </div>
        <Link
          href={`/now/${id}`}
          className="inline-flex items-center text-primary hover:underline"
        >
          View details
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </FadeIn>
  )
}
