import ThemeToggle from "@/components/common/ThemeToggle";
import { Bell, Search } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-default bg-navbar px-8 transition-colors duration-300">
      {/* Search */}

      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />

        <input
          type="text"
          placeholder="Search projects..."
          className="h-11 w-full rounded-xl border border-default bg-card pl-11 pr-4 text-foreground placeholder:text-muted outline-none transition-all duration-300 focus:border-cyan-500"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}

        <ThemeToggle />

        {/* Notification */}

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-default bg-card transition-all duration-300 hover:bg-primary-soft">
          <Bell size={20} className="text-foreground" />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-xl px-2 py-1 transition-all duration-300 hover:bg-primary-soft">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-md">
            A
          </div>

          <div className="text-left">
            <p className="font-semibold text-foreground">Aryan</p>

            <p className="text-xs text-muted">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
