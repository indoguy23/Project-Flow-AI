import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import ProjectDetailsHeader from "../components/details/ProjectDetailsHeader";
import ProjectOverview from "../components/details/ProjectOverview";
import ProjectDescription from "../components/details/ProjectDescription";
import ProjectTeam from "../components/details/ProjectTeam";
import ProjectActivity from "../components/details/ProjectActivity";
import ProjectComments from "../components/details/ProjectComments";
import ProjectAttachments from "../components/details/ProjectAttachments";

const ProjectDetailsPage = () => {
  return (
    <DashboardLayout>
      <ProjectDetailsHeader />

      <ProjectOverview />

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <ProjectDescription />

          <ProjectActivity />

          <ProjectAttachments />
        </div>

        <div className="space-y-6">
          <ProjectTeam />

          <ProjectComments />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetailsPage;
