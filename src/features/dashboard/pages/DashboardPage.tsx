import AIInsights from "../components/ai/AIInsights";
import AnalyticsChart from "../components/charts/AnalyticsChart";
import DashboardHeader from "../components/header/DashboardHeader";
import StatsCard from "../components/stats/StatsCard";
import ActivityCard from "../components/tables/ActivityCard";
import RecentProjects from "../components/tables/RecentProjects";
import RecentTasks from "../components/tables/RecentTasks";
import TeamMembers from "../components/team/TeamMembers";
import QuickActions from "../components/widgets/QuickActions";
import UpcomingDeadlines from "../components/widgets/UpcomingDeadlines";
import DashboardLayout from "../layouts/DashboardLayout";

import { dashboardStats } from "@/constants/dashboardStats";

const DashboardPage = () => {
    return (
        <DashboardLayout>
            {/* Header */}
            <DashboardHeader />

            {/* Stats */}
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

            {/* Analytics + AI */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <AnalyticsChart />
                </div>

                <AIInsights />
            </div>

            {/* Projects + Team */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RecentProjects />
                </div>

                <TeamMembers />
            </div>

            {/* Tasks + Widgets */}
            <div className="mt-8 grid gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2">
                    <RecentTasks />
                </div>

                <div className="space-y-6">
                    <ActivityCard />

                    <UpcomingDeadlines />

                    <QuickActions />
                </div>

            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;