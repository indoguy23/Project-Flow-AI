import { Eye, Pencil, Trash2 } from "lucide-react";

interface ProjectActionsProps {
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

const ProjectActions = ({
    onView,
    onEdit,
    onDelete,
}: ProjectActionsProps) => {
    return (
        <div className="absolute right-0 top-12 z-50 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl">

            <button
                onClick={onView}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100"
            >
                <Eye size={16} />
                View
            </button>

            <button
                onClick={onEdit}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100"
            >
                <Pencil size={16} />
                Edit
            </button>

            <button
                onClick={onDelete}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
                <Trash2 size={16} />
                Delete
            </button>

        </div>
    );
};

export default ProjectActions;