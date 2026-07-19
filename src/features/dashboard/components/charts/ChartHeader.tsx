interface ChartHeaderProps {
  period: string;
  onPeriodChange: (value: string) => void;
}

const ChartHeader = ({ period, onPeriodChange }: ChartHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Project Analytics
        </h2>

        <p className="mt-1 text-sm text-muted">
          Track project performance over time.
        </p>
      </div>

      <select
        value={period}
        onChange={(e) => onPeriodChange(e.target.value)}
        className="rounded-xl border border-default bg-card px-4 py-2 text-sm text-foreground outline-none transition-all duration-300 focus:border-cyan-500"
      >
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="year">This Year</option>
      </select>
    </div>
  );
};

export default ChartHeader;
