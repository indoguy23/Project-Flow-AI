interface TooltipPayloadItem {
  dataKey?: string | number;
  name?: string | number;
  value?: string | number;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}

const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-default bg-card p-4 shadow-xl">
      <p className="mb-3 font-semibold text-foreground">{label}</p>

      {payload.map((item, index) => (
        <div
          key={`${item.dataKey}-${index}`}
          className="flex items-center justify-between gap-6 py-1 text-sm"
        >
          <span className="text-muted">{item.name}</span>

          <span className="font-medium text-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartTooltip;
