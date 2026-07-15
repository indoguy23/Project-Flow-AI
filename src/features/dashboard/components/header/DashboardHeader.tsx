import { ArrowUpRight } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back, Aryan 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's an overview of your projects and team performance.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
          New Project
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
