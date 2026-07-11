import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
};

export default ProjectsGrid;