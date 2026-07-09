import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatsCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          <p className="mt-2 text-sm text-emerald-500">
            {subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-100 p-4">
          <Icon className="h-6 w-6 text-cyan-600" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;