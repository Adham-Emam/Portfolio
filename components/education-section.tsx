import { education } from "@/data/education";

export const EducationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {education.reverse().map((education) => (
        <div key={education.id} className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
          <p className="text-muted-foreground mb-4">
            {education.institute}, {education.date}
          </p>
          <p>{education.description}</p>
        </div>
      ))}
    </div>
  );
};
