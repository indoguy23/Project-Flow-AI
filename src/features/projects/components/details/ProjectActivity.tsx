const activities = [
  "Aryan created Authentication Module",
  "Rahul updated API Integration",
  "Sneha uploaded UI Design",
  "Amit fixed payment bug",
];

const ProjectActivity = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />

            <p className="text-slate-600">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectActivity;
