import { Plus } from "lucide-react";

const ProjectsHeader = () => {
    return (
        <div className="mb-8 flex items-center justify-between">

            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Projects
                </h1>

                <p className="mt-2 text-slate-500">
                    Manage and organize all your projects in one place.
                </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700">

                <Plus size={18} />

                New Project

            </button>

        </div>
    );
};

export default ProjectsHeader;