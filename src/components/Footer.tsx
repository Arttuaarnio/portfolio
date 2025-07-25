import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-md py-6">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Arttu Aarnio
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arttu-aarn-io"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="w-6 h-6" />
            </Button>
          </a>

          <a
            href="https://github.com/arttuaarnio"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="w-6 h-6" />
            </Button>
          </a>

          <a href="mailto:arttueino@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
