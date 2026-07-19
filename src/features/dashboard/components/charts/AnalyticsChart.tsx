import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartHeader from "./ChartHeader";
import ChartTooltip from "./ChartTooltip";
import ChartStats from "./ChartStats";

import { analyticsData } from "@/features/dashboard/components/constants/chartData";

const AnalyticsChart = () => {
  const [period, setPeriod] = useState("month");

  // For now we're using the same dummy data.
  // Later, this will change based on Week / Month / Year.
  const data = analyticsData;

  // Get latest analytics values
  const latestData = data[data.length - 1];

  return (
    <div className="rounded-2xl border border-default bg-card p-6 shadow-sm transition-colors duration-300">
      {/* Header */}
      <ChartHeader period={period} onPeriodChange={setPeriod} />

      {/* Chart */}
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              opacity={0.2}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
            />

            <Tooltip content={<ChartTooltip />} />

            <Line
              type="monotone"
              dataKey="completed"
              name="Completed"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="inProgress"
              name="In Progress"
              stroke="var(--primary)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="pending"
              name="Pending"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Analytics Summary */}
      {latestData && (
        <ChartStats
          completed={latestData.completed}
          inProgress={latestData.inProgress}
          pending={latestData.pending}
        />
      )}
    </div>
  );
};

export default AnalyticsChart;
