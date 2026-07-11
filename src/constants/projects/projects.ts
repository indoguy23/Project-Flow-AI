import type { Project } from "@/features/projects/types/project";

export const projects: Project[] = [
    {
        id: 1,
        name: "ProjectFlow AI",
        description: "AI Powered Project Management System",
        team: "Frontend Team",
        progress: 82,
        priority: "High",
        status: "In Progress",
        dueDate: "20 Jul",
    },
    {
        id: 2,
        name: "Payment Gateway",
        description: "Stripe Integration",
        team: "Backend Team",
        progress: 100,
        priority: "Medium",
        status: "Completed",
        dueDate: "14 Jul",
    },
    {
        id: 3,
        name: "HR Management",
        description: "Employee Portal",
        team: "Full Stack",
        progress: 35,
        priority: "Low",
        status: "Pending",
        dueDate: "30 Jul",
    },
];