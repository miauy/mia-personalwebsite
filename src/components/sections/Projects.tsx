
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Mic, Trophy, Code as CodeIcon, Leaf, Headset, Music } from "lucide-react";
import { useState } from "react";

// Project data - edit this array to update your projects
// Each project has the following properties:
// - id: Unique identifier for the project
// - icon: Icon component to display
// - title: Project name
// - hackathon: Event where the project was created
// - date: When the project was created
// - description: Brief overview of the project
// - techStack: Technologies used
// - role: Your position in the project
// - team: Team members
// - links: URLs to demos, code, etc.
const projects = [
  {
    id: "ballerinaBox",
    icon: <Music className="h-5 w-5 text-gray-500" />,
    title: "Ballerina Box",
    date: "February 2024",
    description: "A physical computing project featuring a ballerina that turns on top of a box and plays music when activated with a switch.",
    techStack: ["Adafruit Circuit Playground Express", "360 Servo Motor", "Mono Class D Audio Amp", "MU Editor", "Cricut Design Space"],
    materials: ["Cardstock", "Cricut Maker 3", "Spray Paint"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "https://youtube.com/shorts/KTcZ1mz92Z8?feature=share" },
    ]
  },
  {
    id: "communityGarden",
    icon: <Leaf className="h-5 w-5 text-gray-500" />,
    title: "VR Community Garden",
    date: "Aug 2024 - Dec 2024",
    description: "A virtual reality experience aimed to teach children in underprivileged communities about where food comes from and how it's grown.",
    techStack: ["Unity", "Figma"],
    role: "UI/UX Designer",
    team: [
      <span key="raquel">
        <a href="https://www.linkedin.com/in/raquel-henao-1a268129a/" target="_blank" rel="noopener noreferrer">
          Raquel Henao
        </a> <em>(Developer and UI/UX Designer)</em>
      </span>
    ],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "https://miami.box.com/s/ihfi3bm5j0bwhos30conug1atfhiru4p" },
    ]
  },
  {
    id: "miamiXR",
    icon: <Headset className="h-5 w-5 text-gray-500" />,
    title: "Miami XR 2025",
    date: "Feb 2025",
    description: "The University of Miami's largest XR conference featuring industry experts, tech visionaries, artists, and university scholars from around the globe in exploring the latest trends and innovations in XR technology. As the student lead organizer I worked directly with the head of the University of Miami Department of Interactive Media to plan and execute the event.",
    techStack: [], // Adding an empty array for techStack
    role: "Student Lead Organizer",
    team: ["The University of Miami Department of Interactive Media", "Sidney Cocimano", "Raquel Henao", "Thomas Sydnor"],
    links: []  // Removed the demo and code buttons
  }
];

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
          <div className="col-span-1 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="space-y-8">
              {/* Map through all projects to create the sidebar navigation */}
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all",
                    project.id === selectedProject.id ?
                      "bg-purple-200 border-l-4 border-purple-700" : // Changed to purple for selected
                      "hover:bg-purple-50" // Changed to light purple for hover
                  )}
                >
                  {/* Project icon */}
                  <div className="p-2 bg-gray-900 rounded-lg">
                    {project.icon}
                  </div>
                  {/* Project title and metadata */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{project.title}</h3>
                    <div className="flex gap-2 items-center">
                      <span className="text-xs text-gray-500">{project.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Detailed project view */}
          <div className="col-span-1 lg:col-span-2 bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
            {/* Project header with icon and title */}
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-900 rounded-lg">
                {selectedProject.icon}
              </div>
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                {selectedProject.date}
              </Badge>
            </div>

            <p className="text-gray-700 mb-8">
              {selectedProject.description}
            </p>

            {/* Only render tech stack section if there are tech items */}
            {selectedProject.techStack && selectedProject.techStack.length > 0 && (
              <div className="mb-6">
                <h4 className="text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Materials section - only displayed for the Ballerina Box project */}
            {selectedProject.materials && selectedProject.materials.length > 0 && (
              <div className="mb-6">
                <h4 className="text-gray-500 mb-2">Materials:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((material, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Only render role section if it exists */}
            {selectedProject.role && (
              <div className="mb-6">
                <h4 className="text-gray-500 mb-2">Role:</h4>
                <p className="text-gray-700">{selectedProject.role}</p>
              </div>
            )}

            {/* Only render team section if it exists */}
            {selectedProject.team && selectedProject.team.length > 0 && (
              <div className="mb-8">
                <h4 className="text-gray-500 mb-2">Team:</h4>
                <p className="text-gray-700">
                  {selectedProject.team.map((member, index) => (
                    <span key={index} className="text-gray-900 font-medium">
                      {member}{index < selectedProject.team.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-gray-200 flex gap-4">
              {selectedProject.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-gray-900 text-white hover:bg-gray-800 border-none"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
