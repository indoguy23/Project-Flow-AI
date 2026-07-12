import { Plus } from "lucide-react";

interface ProjectsHeaderProps {
    onCreateProject: () => void;
}

const ProjectsHeader = ({
    onCreateProject,
}: ProjectsHeaderProps) => {
    return (
        <div className="mb-8 flex items-center justify-between">

            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Projects
                </h1>

                <p className="mt-2 text-slate-500">
                    Organize and manage your projects.
                </p>

            </div>

            <button
                onClick={onCreateProject}
                className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
                <Plus size={18} />

                New Project

            </button>

        </div>
    );
};

export default ProjectsHeader;