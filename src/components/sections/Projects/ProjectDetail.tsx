
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "./ProjectData";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="col-span-1 lg:col-span-2 bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
      {/* Project header with icon and title */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gray-900 rounded-lg">
          {project.icon}
        </div>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
          {project.date}
        </Badge>
      </div>

      <p className="text-gray-700 mb-8">
        {project.description}
      </p>

      {/* Only render tech stack section if there are tech items */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-6">
          <h4 className="text-gray-500 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Materials section - only displayed for the Ballerina Box project */}
      {project.materials && project.materials.length > 0 && (
        <div className="mb-6">
          <h4 className="text-gray-500 mb-2">Materials:</h4>
          <div className="flex flex-wrap gap-2">
            {project.materials.map((material, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                {material}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Only render role section if it exists */}
      {project.role && (
        <div className="mb-6">
          <h4 className="text-gray-500 mb-2">Role:</h4>
          <p className="text-gray-700">{project.role}</p>
        </div>
      )}

      {/* Only render team section if it exists */}
      {project.team && project.team.length > 0 && (
        <div className="mb-8">
          <h4 className="text-gray-500 mb-2">Team:</h4>
          <p className="text-gray-700">
            {project.team.map((member, index) => (
              <span key={index} className="text-gray-900 font-medium">
                {member}{index < project.team.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      )}

      <div className="pt-6 border-t border-gray-200 flex gap-4">
        {project.links.map((link, index) => (
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
  );
}
