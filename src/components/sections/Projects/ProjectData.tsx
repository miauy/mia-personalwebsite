
import { Mic, Trophy, CodeIcon, Leaf, Headset, Music, ExternalLink, GitBranch, Image, FileText } from "lucide-react";
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
  images?: string[]; // Add new property for carousel images
}

// Project data - edit this array to update your projects
export const projects: Project[] = [
  {
    id: "recordPlayer",
    icon: <Music className="h-5 w-5 text-gray-500" />,
    title: "Record Player",
    date: "May 2025",
    description: "I designed and 3D printed a record player then integrated an Adafruit microcontroller, a continuous rotation servo to spin the platter, and an RFID reader to detect and select tracks. It merges analog vinyl playback with programmable controls for interactive listening.",
    techStack: ["Adafruit Circuit Playground Express", "360 Servo Motor", "Mono Class D Audio Amp", "MU Editor", "Cricut Design Space", "RFID Sensor", "RFID Keys", "Onshape", "Bambu Studio", "Physical Computing"],
    materials: ["Bambu 3D Printer", "Cardstock", "Cricut Maker 3", "Spray Paint"],
    links: [
      { label: "Documentation", icon: <FileText className="h-4 w-4" />, url: "https://island-find-780.notion.site/Physical-Computing-Record-Player-1ddbe8f1e25580c5b4d4c46677cc417b" },
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
      { label: "Demo", icon: <ExternalLink className="h-4 w-4" />, url: "https://youtu.be/heUM3D9q4Pk" },
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
    links: [
      { label: "Event", icon: <Image className="h-4 w-4" />, url: "#" },
    ],
    images: [
      "/lovable-uploads/8b3b4f20-698d-4051-ae50-b5aa8ad94dc0.png",
      "/lovable-uploads/783d9597-d82d-4235-8f5f-a223a1d19e06.png",
      "/lovable-uploads/70d75a5b-b596-45d7-ad58-8470924e2e3a.png",
      "/lovable-uploads/2b33698c-c347-43a0-9c7b-6eed2ae50898.png",
      "/lovable-uploads/9f761d06-12f7-4ea8-b776-be696a10d49d.png", 
      "/lovable-uploads/c0b2a62c-5a84-479c-9ceb-f54948ba1662.png",
      "/lovable-uploads/315a399a-d030-483d-95a7-d95372fd677f.png"
    ]
  }
];
