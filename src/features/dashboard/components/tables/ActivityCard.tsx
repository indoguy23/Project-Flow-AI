import { Clock3 } from "lucide-react";
import { activityTimeline } from "@/constants/activityTimeline";

const ActivityCard = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Activity Timeline
        </h3>

        <p className="text-sm text-slate-500">
          Latest activities from your workspace
        </p>
      </div>

      <div className="space-y-5">
        {activityTimeline.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
              <Clock3 className="h-5 w-5 text-cyan-600" />
            </div>

            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-semibold">
                  {activity.project}
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;