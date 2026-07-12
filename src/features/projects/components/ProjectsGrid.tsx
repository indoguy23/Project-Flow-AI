import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
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
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
