import { recentTasks } from "@/constants/recentTasks";
import { CheckCircle2 } from "lucide-react";

const priorityColors = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusColors = {
  Completed: "text-green-600",
  "In Progress": "text-cyan-600",
  Pending: "text-yellow-600",
};

const RecentTasks = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-semibold">
            Recent Tasks
          </h3>

          <p className="text-sm text-slate-500">
            Latest updates from your workspace
          </p>
        </div>

      </div>

      <div className="space-y-1">

        {recentTasks.map((task) => (

          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-4 hover:shadow-md transition"
          >

            <div className="flex items-center gap-2">

              <CheckCircle2 className={statusColors[task.status]} />

              <div>

                <h4 className="font-medium text-slate-900">
                  {task.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {task.assignee}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColors[task.priority]}`}
              >
                {task.priority}
              </span>

              <span className="text-sm text-slate-500">
                {task.dueDate}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentTasks;