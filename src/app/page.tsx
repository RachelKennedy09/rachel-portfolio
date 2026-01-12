import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <main>
      {/* Hero stays separate */}
      <div className="pointer-events-none">
        <HeroSection />
      </div>

      {/* Gradient flow container */}
  

<div
  className="relative"
  style={{
    background:
      "linear-gradient(to bottom, var(--flow-start), var(--flow-mid), var(--flow-end))",
  }}
>
  <AboutSection />
  <ProjectsSection />
</div>
    </main>
  );
}
