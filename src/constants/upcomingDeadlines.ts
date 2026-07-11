export interface UpcomingDeadline {
    id: number;
    title: string;
    dueDate: string;
    priority: "High" | "Medium" | "Low";
}

export const upcomingDeadlines: UpcomingDeadline[] = [
    {
        id: 1,
        title: "Finish Dashboard UI",
        dueDate: "Today",
        priority: "High",
    },
    {
        id: 2,
        title: "Backend API Integration",
        dueDate: "Tomorrow",
        priority: "Medium",
    },
    {
        id: 3,
        title: "Deploy Staging Build",
        dueDate: "15 Jul",
        priority: "Low",
    },
];