import { ArrowLeft, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectDetailsHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <button
          onClick={() => navigate("/projects")}
          className="mb-4 flex items-center gap-2 text-sm text-cyan-600 hover:underline cursor-pointer"
        >
          <ArrowLeft size={18} /> Back To Project
        </button>

        <h1 className="text-4xl font-bold text-slate-900">ProjectFlow AI</h1>

        <p className="mt-2 text-slate-500">
          AI Powered Project Management System
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700">
        <Pencil size={18} />
        Edit Project
      </button>
    </div>
  );
};

export default ProjectDetailsHeader;
