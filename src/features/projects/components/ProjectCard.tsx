import {
  CalendarDays,
  MoreVertical,
  Users,
} from "lucide-react";

import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
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

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

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

        <button className="rounded-lg p-2 transition hover:bg-slate-100">

          <MoreVertical size={18} />

        </button>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">
            Progress
          </span>

          <span className="font-medium">
            {project.progress}%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            style={{ width: `${project.progress}%` }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Users size={16} />

            {project.team}

          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={16} />

            Due {project.dueDate}

          </div>

        </div>

        <div className="space-y-2 text-right">

          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[project.status]}`}
          >
            {project.status}
          </span>

          <br />

          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${priorityColor[project.priority]}`}
          >
            {project.priority}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;