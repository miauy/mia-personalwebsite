
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Mic, Rocket, Trophy, Code as CodeIcon, Leaf } from "lucide-react";
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
    id: "pitchperfect",
    icon: <Mic className="h-5 w-5 text-gray-500" />,
    title: "PitchPerfect",
    hackathon: "YHacks",
    date: "Oct 2024",
    description: "An innovative and interactive tool designed to help students and professionals improve their presentation and public speaking skills in a fun and engaging way.",
    techStack: ["nextjs", "react", "vercel"],
    role: "Frontend",
    team: ["Jazib Raza", "Lorenzo", "Rachel Tomasetti"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
      { label: "Code", icon: <GitBranch className="h-4 w-4" />, url: "#" },
      { label: "Submission", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
    ]
  },
  {
    id: "pixelbattle",
    icon: <Rocket className="h-5 w-5 text-gray-500" />,
    title: "Pixel Battle",
    hackathon: "Hack NYU",
    date: "Feb 2025",
    description: "A collaborative pixel art platform where users can compete to create the best artwork in real-time.",
    techStack: ["react", "firebase", "tailwind"],
    role: "Full Stack Developer",
    team: ["Alex Kim", "Maya Johnson"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
      { label: "Code", icon: <GitBranch className="h-4 w-4" />, url: "#" },
    ]
  },
  {
    id: "intellistock",
    icon: <CodeIcon className="h-5 w-5 text-gray-500" />,
    title: "Intellistock",
    hackathon: "HackRU",
    date: "Feb 2025",
    description: "AI-powered stock analysis and prediction tool that helps users make informed investment decisions.",
    techStack: ["python", "tensorflow", "flask"],
    role: "Machine Learning Engineer",
    team: ["David Chen", "Sarah Williams"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
      { label: "Code", icon: <GitBranch className="h-4 w-4" />, url: "#" },
    ]
  },
  {
    id: "ecohoya",
    icon: <Trophy className="h-5 w-5 text-gray-500" />,
    title: "EcoHoya Cup",
    hackathon: "Georgetown Hackathon",
    date: "Jan 2025",
    description: "A sustainability initiative that gamifies and tracks campus-wide efforts to reduce carbon footprint.",
    techStack: ["react-native", "node", "mongodb"],
    role: "Backend Developer",
    team: ["Emma Rodriguez", "Tyler Nguyen"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
      { label: "Code", icon: <GitBranch className="h-4 w-4" />, url: "#" },
    ]
  },
  {
    id: "verdellm",
    icon: <Leaf className="h-5 w-5 text-gray-500" />,
    title: "Verde LLM",
    hackathon: "UTD Ripple Hacks",
    date: "Nov 2024",
    description: "An eco-focused language model optimized for sustainable development research and environmental data analysis.",
    techStack: ["python", "pytorch", "huggingface"],
    role: "AI Researcher",
    team: ["Priya Patel", "James Wilson"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "#" },
      { label: "Code", icon: <GitBranch className="h-4 w-4" />, url: "#" },
    ]
  }
];

export function Projects() {
  // State to track which project is currently selected for display
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-24 bg-white">
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
                      "bg-gray-200 border-l-4 border-gray-900" : 
                      "hover:bg-gray-100"
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
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {project.hackathon}
                      </span>
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
              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                {selectedProject.hackathon}
              </Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                {selectedProject.date}
              </Badge>
            </div>
            
            <p className="text-gray-700 mb-8">
              {selectedProject.description}
            </p>
            
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
            
            <div className="mb-6">
              <h4 className="text-gray-500 mb-2">Role:</h4>
              <p className="text-gray-700">{selectedProject.role}</p>
            </div>
            
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
