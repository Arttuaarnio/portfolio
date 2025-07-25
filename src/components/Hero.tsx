import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "/images/profile-picture.jpeg";

export default function Hero() {
  return (
    <section className="bg-background py-8">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm Arttu. <span className="inline-block">👋</span>
          </h1>

          <h2 className="text-lg font-bold">
            Full-stack developer from Helsinki, Finland 🇫🇮
          </h2>
          <p className="text-muted-foreground text-lg">
            Enjoying the little things in life such as tech, good coffee, great
            food, music and billiards.
          </p>

          <div className="flex flex-wrap gap-2 pt-6 justify-center md:justify-start">
            <a href="/resume.pdf" download>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/arttu-aarn-io"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="https://github.com/arttuaarnio"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>

            <a href="mailto:arttueino@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex">
          <img
            src={profileImage}
            alt="Profile picture of myself"
            className="w-full max-w-[250px] rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
