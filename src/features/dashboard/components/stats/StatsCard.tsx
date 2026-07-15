import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

const StatsCard = ({ title, value, subtitle, icon: Icon }: StatsCardProps) => {
  return (
    <div className="rounded-2xl border border-default bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-foreground">{value}</h3>

          <p className="mt-2 text-sm text-emerald-500">{subtitle}</p>
        </div>

        <div className="rounded-2xl bg-primary-soft p-4 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
