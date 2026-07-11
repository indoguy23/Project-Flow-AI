export interface RecentTask {
    id: number;
    title: string;
    assignee: string;
    priority: "High" | "Medium" | "Low";
    status: "Completed" | "In Progress" | "Pending";
    dueDate: string;
}

export const recentTasks: RecentTask[] = [
    {
        id: 1,
        title: "Build Authentication UI",
        assignee: "Aryan",
        priority: "High",
        status: "Completed",
        dueDate: "Today",
    },
    {
        id: 2,
        title: "Create Dashboard Layout",
        assignee: "Rahul",
        priority: "Medium",
        status: "In Progress",
        dueDate: "Tomorrow",
    },
    {
        id: 3,
        title: "Integrate API",
        assignee: "Amit",
        priority: "High",
        status: "Pending",
        dueDate: "15 Jul",
    },
    {
        id: 4,
        title: "Review Pull Request",
        assignee: "Sneha",
        priority: "Low",
        status: "Completed",
        dueDate: "Yesterday",
    },
];