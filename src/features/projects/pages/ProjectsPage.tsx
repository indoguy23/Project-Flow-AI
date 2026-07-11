import { useMemo, useState } from "react";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import { projects } from "@/constants/projects/projects";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectFilters from "../components/ProjectFilters";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
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
  }, [search, status, priority]);

  return (
    <DashboardLayout>
      <ProjectsHeader />

      <ProjectFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        priority={priority}
        onPriorityChange={setPriority}
      />

      <ProjectsGrid projects={filteredProjects} />
    </DashboardLayout>
  );
};

export default ProjectsPage;