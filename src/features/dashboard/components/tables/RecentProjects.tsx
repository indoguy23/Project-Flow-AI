import { recentProjects } from "@/constants/recentProjects";
import { ArrowRight } from "lucide-react";

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-cyan-100 text-cyan-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const RecentProjects = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Projects
          </h3>

          <p className="text-sm text-slate-500">
            Track the latest project progress
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700">
          View All
          <ArrowRight size={16} />
        </button>

      </div>

      {/* Projects */}

      <div className="space-y-5">

        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-slate-100 p-4 transition hover:border-cyan-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>
                <h4 className="font-semibold text-slate-900">
                  {project.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {project.team} • Due {project.dueDate}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]
                  }`}
              >
                {project.status}
              </span>

            </div>

            {/* Progress */}

            <div className="mt-5">

              <div className="mb-2 flex justify-between text-sm">

                <span className="text-slate-500">
                  Progress
                </span>

                <span className="font-medium text-slate-700">
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

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentProjects;