import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";

export default function HomePage() {
  return (
    <>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <Technologies />
        <Footer />
    </>
  );
}