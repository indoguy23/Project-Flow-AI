import {
  CalendarDays,
  MoreVertical,
  Users,
} from "lucide-react";
import { useState } from "react";
import ProjectActions from "./ProjectActions";

import type { Project } from "../types/project";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  onEdit: (Project: Project) => void;
  onDelete: (id: number) => void;
}

const statusColor = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-cyan-100 text-cyan-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const priorityColor = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const ProjectCard = ({ project, onEdit, onDelete }: ProjectCardProps) => {

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="group relative overflow-visible rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold text-slate-900">
            {project.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {project.description}
          </p>

        </div>

        {/* Action Menu */}

        <div className="relative flex-shrink-0">

          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <MoreVertical size={18} />
          </button>

          {showMenu && (
            <ProjectActions
              onView={() => {
                navigate(`/projects/${project.id}`);
                setShowMenu(false);
              }}
              onEdit={() => {
                onEdit(project)
                setShowMenu(false);
              }}
              onDelete={() => {
                onDelete(project.id);
                setShowMenu(false)
              }}
            />
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;