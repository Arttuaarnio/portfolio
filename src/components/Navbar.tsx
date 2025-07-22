import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-2">
          <Button
            asChild
            variant={location.pathname === "/" ? "default" : "ghost"}
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            asChild
            variant={location.pathname === "/projects" ? "default" : "ghost"}
          >
            <Link to="/projects">Projects</Link>
          </Button>
        </nav>

        <div className="w-[250px] flex justify-end cursor-pointer">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
