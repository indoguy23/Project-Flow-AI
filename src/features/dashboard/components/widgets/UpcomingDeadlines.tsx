import { upcomingDeadlines } from "@/constants/upcomingDeadlines";
import { CalendarClock } from "lucide-react";

const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
};

const UpcomingDeadlines = () => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

                <CalendarClock className="text-cyan-600" />

                <div>

                    <h3 className="text-lg font-semibold">
                        Upcoming Deadlines
                    </h3>

                    <p className="text-sm text-slate-500">
                        Tasks due soon
                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {upcomingDeadlines.map((task) => (

                    <div
                        key={task.id}
                        className="rounded-xl border border-slate-100 p-4"
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <h4 className="font-medium text-slate-900">
                                    {task.title}
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                    {task.dueDate}
                                </p>

                            </div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor[task.priority]}`}
                            >
                                {task.priority}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default UpcomingDeadlines;