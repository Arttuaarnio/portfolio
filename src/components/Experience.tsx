import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EducationData from "@/data/EducationData.ts";
import WorkData from "@/data/WorkData.ts";

export default function Experience() {
  const workData = WorkData;

  const educationData = EducationData;

  return (
    <section className="bg-background pb-8">
      <div className="max-w-3xl mx-auto px-4">
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="work" className="cursor-pointer">Work</TabsTrigger>
            <TabsTrigger value="education" className="cursor-pointer">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <ExperienceList data={workData} />
          </TabsContent>

          <TabsContent value="education">
            <ExperienceList data={educationData} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ExperienceList({ data }: { data: any[] }) {
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 p-6 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-border/40 dark:border-border/60 backdrop-blur-md shadow-md dark:shadow-lg"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
            {item.logoType === "image" ? (
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div
                className={`w-full h-full ${item.logoColor} rounded-lg flex items-center justify-center`}
              >
                <span className="text-white font-bold text-sm">
                  {item.logo}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <span className="text-sm text-muted-foreground ml-4 ">
                {item.duration}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{item.position}</p>

            {item.achievements.length > 0 && (
              <ul className="space-y-3">
                {item.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white-500 text-l">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
