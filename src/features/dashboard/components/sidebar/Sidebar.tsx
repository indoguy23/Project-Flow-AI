import { sidebarMenu } from "@/constants/sidebarMenu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    // Separate normal menu and logout menu
    const mainMenus = sidebarMenu.filter(
        (menu) => menu.variant !== "danger"
    );

    const dangerMenus = sidebarMenu.filter(
        (menu) => menu.variant === "danger"
    );

    return (
        <aside className="flex w-72 flex-col border-r border-slate-200 bg-white">
            {/* Logo */}

            <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
                    PF
                </div>

                <div>
                    <h2 className="font-bold text-slate-900">
                        ProjectFlow AI
                    </h2>

                    <p className="text-xs text-slate-500">
                        Workspace
                    </p>
                </div>
            </div>

            {/* Navigation */}

            <nav className="flex flex-1 flex-col px-4 py-6">
                {/* Main Menu */}

                <div className="flex-1 space-y-2">
                    {mainMenus.map((menu) => {
                        const Icon = menu.icon;

                        return (
                            <NavLink
                                key={menu.path}
                                to={menu.path}
                                className={({ isActive }) =>
                                    [
                                        "flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                                            : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600",
                                    ].join(" ")
                                }
                            >
                                <Icon size={20} />
                                <span>{menu.name}</span>
                            </NavLink>
                        );
                    })}
                </div>

                {/* Logout */}

                <div className="border-t border-slate-200 pt-4">
                    {dangerMenus.map((menu) => {
                        const Icon = menu.icon;

                        return (
                            <NavLink
                                key={menu.path}
                                to={menu.path}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-red-500 transition-all duration-200 hover:bg-red-50"
                            >
                                <Icon size={20} />
                                <span>{menu.name}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;