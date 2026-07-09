import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/header/TopNavbar";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Slider */}
            <Sidebar />

            {/* main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;