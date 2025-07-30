import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import data from "@/data/ProjectsData.ts";

const projectData = data;

export default function Projects() {
  return (
    <>
      <div className="flex max-w-3xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between align-start">
          {projectData.map((project, index) => (
            <div key={index}>
              <div className="max-w-3xl mx-auto relative p-6 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-border/40 dark:border-border/60 backdrop-blur-md shadow-md dark:shadow-lg mb-2">
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground flex items-center gap-1"
                      >
                        <Button variant="ghost" size="sm">
                          <Github className="w-6 h-6" />
                          Source
                        </Button>
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground flex items-center gap-1"
                      >
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-6 h-6" />
                          Website
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
