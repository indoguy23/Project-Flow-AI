export interface RecentProject {
    id: number;
    name: string;
    team: string;
    dueDate: string;
    status: "Completed" | "In Progress" | "Pending";
    progress: number;
}

export const recentProjects: RecentProject[] = [
    {
        id: 1,
        name: "ProjectFlow AI",
        team: "Frontend Team",
        dueDate: "12 Jul",
        status: "In Progress",
        progress: 82,
    },
    {
        id: 2,
        name: "Payment Gateway",
        team: "Backend Team",
        dueDate: "18 Jul",
        status: "Completed",
        progress: 100,
    },
    {
        id: 3,
        name: "E-Commerce Platform",
        team: "Full Stack",
        dueDate: "24 Jul",
        status: "Pending",
        progress: 36,
    },
];