import { useMemo, useState } from "react";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import { projects as initialProjects } from "@/constants/projects/projects";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectFilters from "../components/ProjectFilters";
import ProjectsGrid from "../components/ProjectsGrid";
import CreateProjectModal from "../components/CreateProjectModal";

import type { Project } from "../types/project";
import type { ProjectFormData } from "../components/ProjectForm";

const ProjectsPage = () => {
  const [projectList, setProjectList] = useState<Project[]>(initialProjects);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (data: ProjectFormData) => {
    const newProject: Project = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      priority: data.priority,
      status: data.status,
      dueDate: data.dueDate,
      team: data.team,
      progress: 0,
    };

    setProjectList((prev) => [newProject, ...prev]);

    setIsModalOpen(false);
  };

  const filteredProjects = useMemo(() => {
    return projectList.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "" || project.status === status;

      const matchesPriority =
        priority === "" || project.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [projectList, search, status, priority]);

  return (
    <DashboardLayout>

      <ProjectsHeader
        onCreateProject={() => setIsModalOpen(true)}
      />

      <ProjectFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        priority={priority}
        onPriorityChange={setPriority}
      />

      <ProjectsGrid
        projects={filteredProjects}
      />

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />

    </DashboardLayout>
  );
};

export default ProjectsPage;