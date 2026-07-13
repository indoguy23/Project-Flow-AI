const ProjectOverview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Status</p>

        <h3 className="mt-2 text-lg font-semibold text-cyan-600">
          In Progress
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Priority</p>

        <h3 className="mt-2 text-lg font-semibold text-red-500">High</h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Due Date</p>

        <h3 className="mt-2 text-lg font-semibold">20 Jul</h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Progress</p>

        <h3 className="mt-2 text-lg font-semibold">82%</h3>
      </div>
    </div>
  );
};

export default ProjectOverview;
