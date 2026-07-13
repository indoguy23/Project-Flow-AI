import { useState } from "react";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import ConfirmDialog from "@/components/ui/ConfirmDialog/ConfirmDialog";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectFilters from "../components/ProjectFilters";
import ProjectsGrid from "../components/ProjectsGrid";
import CreateProjectModal from "../components/CreateProjectModal";

import useProjects from "../hooks/useProjects";

const ProjectsPage = () => {

  const {
    filteredProjects,

    search,
    status,
    priority,

    setSearch,
    setStatus,
    setPriority,

    createProject,
    deleteProject,
  } = useProjects();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState<number | null>(null);

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
        onEdit={(project) => console.log(project)}
        onDelete={setDeleteId}
      />

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={(data) => {
          createProject(data);
          setIsModalOpen(false);
        }}
      />

      <ConfirmDialog
        isOpen={deleteId !== null}
        title="Delete Project"
        message="Are you sure you want to delete this project?"
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId !== null) {
            deleteProject(deleteId);
            setDeleteId(null);
          }
        }}
      />

    </DashboardLayout>
  );
};

export default ProjectsPage;