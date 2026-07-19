interface ChartStatsProps {
  completed: number;
  inProgress: number;
  pending: number;
}

const ChartStats = ({ completed, inProgress, pending }: ChartStatsProps) => {
  const total = completed + inProgress + pending;

  const stats = [
    {
      label: "Completed",
      value: completed,
      color: "text-green-500",
    },
    {
      label: "In Progress",
      value: inProgress,
      color: "text-cyan-500",
    },
    {
      label: "Pending",
      value: pending,
      color: "text-yellow-500",
    },
    {
      label: "Total",
      value: total,
      color: "text-primary",
    },
  ];

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-default bg-card p-4 text-center"
        >
          <p className="text-sm text-muted">{item.label}</p>

          <h3 className={`mt-2 text-2xl font-bold ${item.color}`}>
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ChartStats;
