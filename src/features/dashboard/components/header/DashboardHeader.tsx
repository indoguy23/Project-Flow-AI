import { ArrowUpRight } from "lucide-react"

const DashboardHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome Back, Aryan</h1>
        <p className="mt-2 text-sm text-slate-500">
          Here's an overview of your projects and team performance.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
        New Project
        <ArrowUpRight size={18} />
      </button>
    </div>
  )
}

export default DashboardHeader