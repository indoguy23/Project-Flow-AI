import {
    Bot,
    CalendarDays,
    CheckSquare,
    FolderKanban,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
    type LucideIcon,
} from "lucide-react";

export interface SidebarMenuItem {
    id: string;
    name: string;
    path: string;
    icon: LucideIcon;
    variant?: "default" | "danger";
}

export const sidebarMenu: SidebarMenuItem[] = [
    {
        id: "dashboard",
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "projects",
        name: "Projects",
        path: "/projects",
        icon: FolderKanban,
    },
    {
        id: "tasks",
        name: "Tasks",
        path: "/tasks",
        icon: CheckSquare,
    },
    {
        id: "calendar",
        name: "Calendar",
        path: "/calendar",
        icon: CalendarDays,
    },
    {
        id: "teams",
        name: "Teams",
        path: "/teams",
        icon: Users,
    },
    {
        id: "ai",
        name: "AI Assistant",
        path: "/ai",
        icon: Bot,
    },
    {
        id: "settings",
        name: "Settings",
        path: "/settings",
        icon: Settings,
    },
    {
        id: "logout",
        name: "Logout",
        path: "/logout",
        icon: LogOut,
        variant: "danger",
    },
];