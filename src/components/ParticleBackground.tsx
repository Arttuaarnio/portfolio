import { Particles } from "@/components/ui/shadcn-io/particles";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particleColor, setParticleColor] = useState("#ffffff");

  useEffect(() => {
    const updateParticleColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      // Brighter, more visible colors that pop out
      setParticleColor(isDark ? "#d0d0d0" : "#555555");
    };

    // Initial check
    updateParticleColor();

    // Watch for theme changes
    const observer = new MutationObserver(updateParticleColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Particles
        className="absolute inset-0 h-full w-full"
        quantity={100}
        ease={60}
        staticity={55}
        color={particleColor}
        size={1.8}
      />
    </div>
  );
}

