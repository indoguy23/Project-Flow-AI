export interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
    status: 'Online' | 'Away' | 'Offline';
};

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Aryan",
        role: "Frontend Developer",
        avatar: "A",
        status: "Online",
    },
    {
        id: 2,
        name: "Rahul",
        role: "Backend Developer",
        avatar: "R",
        status: "Away",
    },
    {
        id: 3,
        name: "Sneha",
        role: "UI Designer",
        avatar: "S",
        status: "Online",
    },
    {
        id: 4,
        name: "Amit",
        role: "QA Engineer",
        avatar: "Q",
        status: "Offline",
    },
];