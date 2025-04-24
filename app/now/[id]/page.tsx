import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft } from 'lucide-react'
import { formatRelativeDate } from '@/lib/utils'
import { getNowItemById, getPostContent, notionClient } from '@/lib/notion'
import { NotionRenderer } from '@notion-render/client'

export const revalidate = 60 // Revalidate every 60 seconds

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  const nowItem = await getNowItemById(id)

  if (!nowItem) {
    notFound()
  }

  return {
    title: `What I'm Doing Now | ${
      (nowItem.properties.Title as any).title[0].plain_text
    }`,
    description: (nowItem.properties.Description as any).rich_text[0]
      .plain_text,
    openGraph: {
      title: `What I'm Doing Now | ${
        (nowItem.properties.Title as any).title[0].plain_text
      }`,
      description: (nowItem.properties.Description as any).rich_text[0]
        .plain_text,
    },
  }
}

export default async function NowDetailPage({ params }: PageProps) {
  const { id } = await params

  const nowItem = await getNowItemById(id)

  if (!nowItem) {
    notFound()
  }

  const content = await getPostContent(id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  const html = await notionRenderer.render(...content)

  const priorityColor = (priority: string) => {
    switch (priority) {
      case 'Low':
        return 'bg-green-700'
      case 'Medium':
        return 'bg-yellow-700'
      case 'High':
        return 'bg-red-700'
      default:
        return null
    }
  }

  return (
    <section className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div>
          <Link
            href="/now"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Now
          </Link>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h1 className="text-4xl font-bold mb-6">
              {(nowItem.properties.Title as any).title[0].plain_text}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <div className="mt-1">
                    <Badge variant="default">
                      {(nowItem.properties.Status as any).status.name}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    Priority
                  </span>
                  <Badge
                    variant="outline"
                    className={`block w-fit mt-1 font-medium bg-red-800 ${priorityColor(
                      (nowItem.properties.Priority as any).select.name
                    )}`}
                  >
                    {(nowItem.properties.Priority as any).select.name}
                  </Badge>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    Category
                  </span>
                  <p className="mt-1 font-medium">
                    {(nowItem.properties.Category as any).select.name}
                  </p>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    Last Updated
                  </span>
                  <p className="mt-1 font-medium">
                    {formatRelativeDate(
                      (nowItem.properties['Updated at'] as any).last_edited_time
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm text-muted-foreground">Progress</span>
              <div className="mt-2">
                <Progress
                  value={
                    (nowItem.properties.Progress as any).formula.number * 100
                  }
                />
                <span className="text-sm text-muted-foreground mt-1 inline-block">
                  {Math.round(
                    (nowItem.properties.Progress as any).formula.number * 100
                  )}
                  % Complete
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground">
                {
                  (nowItem.properties.Description as any).rich_text[0]
                    .plain_text
                }
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Current Items</h2>
              <p
                className="space-y-3"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
