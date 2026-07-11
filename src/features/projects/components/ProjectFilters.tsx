import { Search } from "lucide-react";

interface ProjectFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  priority: string;
  onPriorityChange: (value: string) => void;
}

const ProjectFilters = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
}: ProjectFiltersProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row">

      <div className="relative flex-1">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-cyan-500"
        />

      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-xl border border-slate-200 px-4 py-3"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="rounded-xl border border-slate-200 px-4 py-3"
      >
        <option value="">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

    </div>
  );
};

export default ProjectFilters;