import { CheckCircle2, FolderKanban } from "lucide-react";

const KanbanPreview = () => {
    return (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">

            {/* Header */}

            <div className="mb-4 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-cyan-500/20 p-2">
                        <FolderKanban className="h-4 w-4 text-cyan-300" />
                    </div>

                    <div>

                        <h3 className="font-semibold text-white">
                            Sprint Board
                        </h3>

                        <p className="text-xs text-slate-400">
                            Sprint 12
                        </p>

                    </div>

                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                    Live
                </span>

            </div>

            {/* Columns */}

            <div className="grid grid-cols-3 gap-3">

                {/* Todo */}

                <div className="rounded-xl bg-white/5 p-3">

                    <h4 className="mb-3 text-sm font-semibold text-slate-300">
                        Todo
                    </h4>

                    <div className="space-y-2">

                        <div className="rounded-lg bg-white p-2.5">

                            <p className="text-sm font-semibold text-slate-800">
                                Login UI
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                Authentication
                            </p>

                        </div>

                        <div className="rounded-lg bg-white p-2.5">

                            <p className="text-sm font-semibold text-slate-800">
                                Dashboard
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                Analytics
                            </p>

                        </div>

                    </div>

                </div>

                {/* Doing */}

                <div className="rounded-xl bg-cyan-500/10 p-3">

                    <h4 className="mb-3 text-sm font-semibold text-cyan-300">
                        Doing
                    </h4>

                    <div className="rounded-lg bg-slate-900/40 p-2.5">

                        <p className="text-sm font-semibold text-white">
                            API Integration
                        </p>

                        <div className="mt-3 h-2 rounded-full bg-white/10">

                            <div className="h-full w-3/4 rounded-full bg-cyan-400" />

                        </div>

                    </div>

                </div>

                {/* Done */}

                <div className="rounded-xl bg-emerald-500/10 p-3">

                    <h4 className="mb-3 text-sm font-semibold text-emerald-300">
                        Done
                    </h4>

                    <div className="space-y-2">

                        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 p-2.5">

                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />

                            <span className="text-sm text-white">
                                Landing Page
                            </span>

                        </div>

                        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 p-2.5">

                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />

                            <span className="text-sm text-white">
                                UI Research
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default KanbanPreview;
