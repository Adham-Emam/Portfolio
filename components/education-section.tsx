import { FadeIn } from '@/components/animations/FadeIn'
import { getEducation } from '@/lib/notion'
import { formatMonthYear } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'

export const EducationSection = async () => {
  const education = await getEducation()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {education.map((education, index) => (
        <FadeIn
          key={education.id}
          className="border rounded-lg p-6"
          direction="right"
          delay={index * 0.1}
        >
          <h3 className="text-xl font-semibold mb-2">
            {(education.properties.Degree as any).title[0].plain_text}
          </h3>
          <div className="text-muted-foreground mb-4">
            {(education.properties.Institute as any).rich_text[0].plain_text}
            {(education.properties.Progress as any).formula.number === 1 ? (
              <span className="text-sm text-muted-foreground">
                ,{' '}
                {formatMonthYear(
                  (education.properties.EndDate as any).date.start
                )}
              </span>
            ) : (
              <>
                , Expected{' '}
                {formatMonthYear(
                  (education.properties.EndDate as any).date.start
                )}
                <div className="w-full mt-4 flex justify-between items-center gap-4">
                  {/* 1. “In Progress” label */}
                  <span className="text-sm font-medium text-blue-600">
                    In Progress
                  </span>

                  {/* 2. Bar stretches to fill available space */}
                  <div className="flex-1">
                    <Progress
                      value={
                        (education.properties.Progress as any).formula.number *
                        100
                      }
                      className="h-1"
                    />
                  </div>

                  {/* 3. Percentage badge */}
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(
                      (education.properties.Progress as any).formula.number *
                        100
                    )}
                    %
                  </span>
                </div>
              </>
            )}
          </div>
          <p>
            {(education.properties.Description as any).rich_text[0].plain_text}
          </p>
        </FadeIn>
      ))}
    </div>
  )
}
