
import { Project } from "./ProjectData";
import { ProjectListItem } from "./ProjectListItem";

interface ProjectListProps {
  projects: Project[];
  selectedProject: Project;
  onSelectProject: (project: Project) => void;
}

export function ProjectList({ projects, selectedProject, onSelectProject }: ProjectListProps) {
  return (
    <div className="col-span-1 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="space-y-8">
        {/* Map through all projects to create the sidebar navigation */}
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            isSelected={project.id === selectedProject.id}
            onClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </div>
  );
}
