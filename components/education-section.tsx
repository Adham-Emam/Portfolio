import { education } from '@/data/education'
import { FadeIn } from '@/components/animations/FadeIn'

export const EducationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {education.reverse().map((education, index) => (
        <FadeIn
          key={education.id}
          className="border rounded-lg p-6"
          direction="right"
          delay={index * 0.1}
        >
          <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
          <p className="text-muted-foreground mb-4">
            {education.institute}, {education.date}
          </p>
          <p>{education.description}</p>
        </FadeIn>
      ))}
    </div>
  )
}
