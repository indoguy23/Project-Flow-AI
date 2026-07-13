import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectsGrid = ({ projects, onEdit, onDelete }: ProjectsGridProps) => {
  if (projects.length === 0) {
    return (
      <p className="py-12 text-center text-slate-500">
        No projects match the selected filters.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
