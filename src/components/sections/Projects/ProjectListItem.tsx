
import { cn } from "@/lib/utils";
import { Project } from "./ProjectData";

interface ProjectListItemProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

export function ProjectListItem({ project, isSelected, onClick }: ProjectListItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all",
        isSelected ?
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
  );
}
