import {
    FolderPlus,
    CheckSquare,
    Users,
    Bot,
} from "lucide-react";

const actions = [
    {
        title: "New Project",
        icon: FolderPlus,
    },
    {
        title: "Add Task",
        icon: CheckSquare,
    },
    {
        title: "Invite Team",
        icon: Users,
    },
    {
        title: "Ask AI",
        icon: Bot,
    },
];

const QuickActions = () => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-semibold">
                Quick Actions
            </h3>

            <div className="grid grid-cols-2 gap-4">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (
                        <button
                            key={action.title}
                            className="rounded-xl border border-slate-200 p-5 transition hover:border-cyan-500 hover:bg-cyan-50"
                        >

                            <Icon className="mx-auto mb-3 h-6 w-6 text-cyan-600" />

                            <p className="text-sm font-medium">
                                {action.title}
                            </p>

                        </button>
                    );

                })}

            </div>

        </div>
    );
};

export default QuickActions;