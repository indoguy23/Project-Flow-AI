import { Bell, Search } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Search */}

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search projects..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 outline-none focus:border-cyan-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="relative rounded-xl bg-slate-100 p-3 hover:bg-slate-200">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-semibold text-white">
            A
          </div>

          <div>

            <h4 className="font-semibold text-slate-900">
              Aryan
            </h4>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default TopNavbar;