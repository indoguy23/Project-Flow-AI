import {
    FolderKanban,
    CheckSquare,
    Users,
    TrendingUp,
} from "lucide-react";

export const dashboardStats = [
    {
        title: "Projects",
        value: "24",
        subtitle: "+4 this month",
        icon: FolderKanban,
    },
    {
        title: "Tasks",
        value: "186",
        subtitle: "32 completed today",
        icon: CheckSquare,
    },
    {
        title: "Team Members",
        value: "18",
        subtitle: "3 online now",
        icon: Users,
    },
    {
        title: "Productivity",
        value: "94%",
        subtitle: "+8% this week",
        icon: TrendingUp,
    },
];