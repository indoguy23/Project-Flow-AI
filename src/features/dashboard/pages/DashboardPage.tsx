import AIInsights from "../components/ai/AIInsights";
import AnalyticsChart from "../components/charts/AnalyticsChart";
import DashboardHeader from "../components/header/DashboardHeader";
import StatsCard from "../components/stats/StatsCard";
import RecentProjects from "../components/tables/RecentProjects";
import DashboardLayout from "../layouts/DashboardLayout";

import { dashboardStats } from "@/constants/dashboardStats";

const DashboardPage = () => {
    return (
        <DashboardLayout>

            <DashboardHeader />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((item) => (
                    <StatsCard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        subtitle={item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </div>

            {/* Chart + AI */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <AnalyticsChart />
                </div>

                <AIInsights />
            </div>

            {/* Recent Projects */}
            <div className="mt-8">
                <RecentProjects />
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;