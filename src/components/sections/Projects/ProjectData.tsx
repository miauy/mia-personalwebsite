
import { Mic, Trophy, CodeIcon, Leaf, Headset, Music, ExternalLink, GitBranch } from "lucide-react";
import { ReactNode } from "react";

// Project data type definition
export interface ProjectLink {
  label: string;
  icon: ReactNode;
  url: string;
}

export interface Project {
  id: string;
  icon: ReactNode;
  title: string;
  date: string;
  description: string;
  techStack?: string[];
  materials?: string[];
  role?: string;
  team?: ReactNode[];
  links: ProjectLink[];
}

// Project data - edit this array to update your projects
export const projects: Project[] = [
  {
    id: "ballerinaBox",
    icon: <Music className="h-5 w-5 text-gray-500" />,
    title: "Ballerina Box",
    date: "Feb 2024",
    description: "Ballerina Box is an interactive music box that combines a traditional music box with modern tech to create a fun experience. It features a hand-crafted box housing a motorized ballerina figurine that spins in response to a programmed switch. This project explores creative coding, electronics, and design to bring a simple yet engaging installation to life.",
    techStack: ["Adafruit Circuit Playground Express", "360 Servo Motor", "Mono Class D Audio Amp", "MU Editor", "Cricut Design Space"],
    materials: ["Cardstock", "Cricut Maker 3", "Spray Paint"],
    links: [
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "https://youtu.be/RAWgK1XT2eg?si=t6ZasHq5tUU-izlc" },
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
    techStack: [],
    role: "Student Lead Organizer",
    team: ["The University of Miami Department of Interactive Media", "Sidney Cocimano", "Raquel Henao", "Thomas Sydnor"],
    links: []
  }
];
