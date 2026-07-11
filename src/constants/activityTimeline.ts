export interface Activity {
    id: number;
    user: string;
    action: string;
    project: string;
    time: string;
}

export const activityTimeline: Activity[] = [
    {
        id: 1,
        user: "Aryan",
        action: "completed",
        project: "Authentication Module",
        time: "5 min ago",
    },
    {
        id: 2,
        user: "Rahul",
        action: "created",
        project: "Dashboard UI",
        time: "20 min ago",
    },
    {
        id: 3,
        user: "Sneha",
        action: "reviewed",
        project: "Payment Gateway",
        time: "1 hour ago",
    },
    {
        id: 4,
        user: "Amit",
        action: "updated",
        project: "API Integration",
        time: "2 hours ago",
    },
];