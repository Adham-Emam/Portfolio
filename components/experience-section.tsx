import { Separator } from "@/components/ui/separator";
import { experience } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <>
      {experience
        .slice()
        .reverse()
        .map((experience) => (
          <div key={experience.id}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
              <div className="md:col-span-1">
                <h3 className="font-semibold">
                  {experience.start_date}
                  {experience.end_date
                    ? ` - ${experience.end_date}`
                    : " - Present"}
                </h3>
                <p className="text-muted-foreground">{experience.title}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold">
                  {experience.institute}
                </h3>
                <ul className="list-disc ms-4 mt-4 space-y-2 text-muted-foreground">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
            {experience.id !== 1 && <Separator />}
          </div>
        ))}
    </>
  );
};
