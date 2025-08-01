import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Github, ExternalLink } from "lucide-react";
import data from "@/data/FeaturedProjectsData.ts";

const projectData = data;

export default function Projects() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <Button asChild className="ml-auto">
            <Link to="/projects">View more</Link>
          </Button>
        </div>
        <p className="text-muted-foreground mb-8">
          Swipe through couple of my favorite personal projects.
        </p>

        <Carousel
          opts={{ align: "start" }}
          className="max-w-3xl mx-auto relative p-6 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-border/40 dark:border-border/60 backdrop-blur-md shadow-md dark:shadow-lg"
        >
          <CarouselContent className="">
            {projectData.map((project, index) => (
              <CarouselItem key={index} className="md:basis-full lg:basis-full">
                <div className=" ">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
