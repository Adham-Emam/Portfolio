import { getExperience } from '@/lib/notion'
import { ExperienceItem } from './experience-item'
import { FadeIn } from '@/components/animations/FadeIn'

export const revalidate = 60

export const ExperienceSection = async () => {
  const experience = await getExperience()

  return experience.map((item, index) => {
    return (
      <FadeIn key={index} direction="right" delay={index * 0.2}>
        <ExperienceItem
          id={item.id}
          index={index}
          title={(item.properties.Title as any).title[0].plain_text}
          institute={(item.properties.Institute as any).rich_text[0].plain_text}
          startDate={(item.properties.Date as any).date.start}
          endDate={(item.properties.Date as any).date.end}
        />
      </FadeIn>
    )
  })
}
