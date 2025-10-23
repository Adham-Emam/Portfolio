import { Separator } from '@/components/ui/separator'
import { getPostContent, notionClient } from '@/lib/notion'
import { NotionRenderer } from '@notion-render/client'
import { formatMonthYear } from '@/lib/utils'

interface ExperienceProps {
  index: number
  id: string
  title: string
  institute: string
  startDate: string
  endDate: string
}

export const revalidate = 60

export const ExperienceItem = async (props: ExperienceProps) => {
  const { index, id, title, institute, startDate, endDate } = props

  const content = await getPostContent(id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  const description = await notionRenderer.render(...content)

  return (
    <>
      {index !== 0 && <Separator />}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
        <div className="md:col-span-1">
          <h3 className="font-semibold">
            {formatMonthYear(startDate)} -{' '}
            {endDate ? formatMonthYear(endDate) : 'Present'}
          </h3>
          <p className="text-muted-foreground">{title}</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xl font-semibold">{institute}</h3>
          <div
            className="experience-description text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </>
  )
}
