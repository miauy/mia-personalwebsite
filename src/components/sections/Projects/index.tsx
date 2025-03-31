
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { projects } from "./ProjectData";
import { ProjectList } from "./ProjectList";
import { ProjectDetail } from "./ProjectDetail";

export function Projects() {
  // State to track which project is currently selected for display
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <Container>
        {/* Section heading - with updated styling to match the Resume section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={cn(
              "inline-block mb-4 px-4 py-1.5 rounded-full",
              "bg-primary/5 text-primary text-sm font-medium",
              "dark:bg-primary/10"
            )}
          >
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Project list/sidebar */}
          <ProjectList 
            projects={projects}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />

          {/* Right column: Detailed project view */}
          <ProjectDetail project={selectedProject} />
        </div>
      </Container>
    </section>
  );
}
