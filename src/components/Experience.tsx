import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Experience() {
  const workExperience = [
    {
      id: 1,
      company: "Freelance Developer",
      logo: "/images/freelance.png",
      logoType: "image",
      logoColor: "transparent",
      position: "",
      duration: "July 2025 - Present",
      achievements: [
        "Work on freelance projects with flexible timing, consistently delivering high standards and meeting expectations",
        "Currently developing a website for my barber, which includes a clean and inviting landing page to direct customers to book appointments",
      ],
    },
    {
      id: 2,
      company: "Project Courses During My Studies at Haaga-Helia",
      logo: "/images/haaga-helia.jpg",
      logoType: "image",
      logoColor: "transparent",
      position: "Full-Stack Developer",
      duration: "Aug 2024 - May 2025",
      achievements: [
        "Completed multiple project courses as part of my Bachelor's degree",
        "Collaborated with a teams of 5-6 students using Agile methodologies (Scrum) and participated in meetings, sprint planning, and retrospectives to ensure project delivery",
        "Developed full-stack applications using technologies such as Java, Springboot, React, React-Native, Node.js, Firebase, and OpenAI APIs",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      company: "Haaga-Helia University of Applied Sciences",
      logo: "/images/haaga-helia.jpg",
      logoType: "image",
      logoColor: "transparent",
      position: "Bachelor's Degree of Business Information Technology",
      duration: "Aug 2023 - December 2026",
      achievements: [
        "GPA: 4.36/5.0",
        "Expected graduation date: December 2026",
        "Relevant coursework: Programming 1 & 2, Back-end Development, Front-end Development, Python Programming, Mobile Programming, Databases and Data Management, Software Development Technologies, Software Requirements Analysis, DevOps-Technologies, and more",
      ],
    },
    {
      id: 2,
      company: "University of Helsinki Viikki Normal School",
      logo: "/images/viikki.png",
      logoType: "image",
      position: "Upper Secondary School Diploma",
      duration: "Aug 2018 - May 2021",
      achievements: [],
    },
  ];

  return (
    <section className="bg-background pb-8">
      <div className="max-w-3xl mx-auto px-4">
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="work" className="cursor-pointer">Work</TabsTrigger>
            <TabsTrigger value="education" className="cursor-pointer">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <ExperienceList data={workExperience} />
          </TabsContent>

          <TabsContent value="education">
            <ExperienceList data={education} />
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
              <span className="text-sm text-muted-foreground">
                {item.duration}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{item.position}</p>

            {item.achievements.length > 0 && (
              <ul className="space-y-3 mb-4">
                {item.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 text-sm">•</span>
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
