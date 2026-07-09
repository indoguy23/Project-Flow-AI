import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import { chartData } from "@/constants/chartData";

const AnalyticsChart = () => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

                <h3 className="text-lg font-semibold text-slate-900">
                    Weekly Productivity
                </h3>

                <p className="text-sm text-slate-500">
                    Tasks completed this week
                </p>

            </div>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={chartData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="completed"
                            stroke="#06b6d4"
                            strokeWidth={3}
                        />

                        <Line
                            type="monotone"
                            dataKey="pending"
                            stroke="#3b82f6"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default AnalyticsChart;