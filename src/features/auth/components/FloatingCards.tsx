import {
  Bell,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const FloatingCards = () => {
  return (
    <>
      {/* Notification */}

      <div className="absolute right-6 top-6 z-20 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-yellow-500/20 p-2">
            <Bell className="h-4 w-4 text-yellow-300" />
          </div>

          <div>

            <p className="text-[11px] text-slate-400">
              Notifications
            </p>

            <p className="text-sm font-semibold text-white">
              12 New
            </p>

          </div>

        </div>

      </div>

      {/* Team */}

      <div className="absolute left-4 top-1/3 z-20 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Users className="h-4 w-4 text-cyan-300" />
          </div>

          <div>

            <p className="text-[11px] text-slate-400">
              Team
            </p>

            <p className="text-sm font-semibold text-white">
              18 Members
            </p>

          </div>

        </div>

      </div>

      {/* Productivity */}

      <div className="absolute bottom-6 left-8 z-20 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-emerald-500/20 p-2">
            <TrendingUp className="h-4 w-4 text-emerald-300" />
          </div>

          <div>

            <p className="text-[11px] text-slate-400">
              Productivity
            </p>

            <p className="text-sm font-semibold text-white">
              +28%
            </p>

          </div>

        </div>

      </div>

      {/* AI */}

      <div className="absolute bottom-24 right-8 z-20 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>

          <div>

            <p className="text-[11px] text-cyan-200">
              AI Insight
            </p>

            <p className="text-sm font-semibold text-white">
              Optimized
            </p>

          </div>

        </div>

      </div>

    </>
  );
};

export default FloatingCards;