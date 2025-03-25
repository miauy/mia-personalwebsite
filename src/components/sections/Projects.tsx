
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Mic, Rocket, Trophy, Code as CodeIcon, Leaf } from "lucide-react";
import { useState } from "react";

// Project data
const projects = [
  {
    id: "pitchperfect",
    icon: <Mic className="h-5 w-5 text-amber-500" />,
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
    icon: <Rocket className="h-5 w-5 text-blue-400" />,
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
    icon: <CodeIcon className="h-5 w-5 text-gray-300" />,
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
    icon: <Trophy className="h-5 w-5 text-yellow-500" />,
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
    icon: <Leaf className="h-5 w-5 text-green-500" />,
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
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-24 bg-white">
      <Container>
        <h2 className="text-5xl font-display font-bold tracking-tight mb-16 text-center text-amber-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project List Column */}
          <div className="col-span-1 bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="space-y-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all",
                    project.id === selectedProject.id ? 
                      "bg-amber-500/10 border-l-4 border-amber-500" : 
                      "hover:bg-gray-100"
                  )}
                >
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {project.icon}
                  </div>
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

          {/* Project Details Column */}
          <div className="col-span-1 lg:col-span-2 bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-800 rounded-lg">
                {selectedProject.icon}
              </div>
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-amber-500/10 text-amber-700 border-amber-200">
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
                  <span key={index} className="text-amber-500 font-medium">
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
                  className="bg-gray-800 text-white hover:bg-gray-700 border-none"
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
