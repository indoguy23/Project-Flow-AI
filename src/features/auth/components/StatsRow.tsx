const KanbanPreview = () => {
    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                    Sprint Board
                </h3>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    Live
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4">

                {/* Todo */}

                <div className="rounded-2xl bg-white/5 p-4">

                    <h4 className="mb-4 text-sm font-semibold text-slate-300">
                        Todo
                    </h4>

                    <div className="space-y-3">

                        <div className="rounded-xl bg-white p-3">
                            <p className="text-sm font-medium text-slate-800">
                                Login UI
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-red-100 px-2 py-1 text-xs text-red-600">
                                High
                            </span>
                        </div>

                        <div className="rounded-xl bg-white p-3">
                            <p className="text-sm font-medium text-slate-800">
                                Database
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-600">
                                Medium
                            </span>
                        </div>

                    </div>

                </div>

                {/* In Progress */}

                <div className="rounded-2xl bg-white/5 p-4">

                    <h4 className="mb-4 text-sm font-semibold text-sky-300">
                        In Progress
                    </h4>

                    <div className="space-y-3">

                        <div className="rounded-xl border border-blue-400/20 bg-blue-500/20 p-3">

                            <p className="text-sm font-medium text-white">
                                Authentication
                            </p>

                            <div className="mt-3 h-2 rounded-full bg-white/20">

                                <div className="h-full w-3/4 rounded-full bg-cyan-400" />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Done */}

                <div className="rounded-2xl bg-white/5 p-4">

                    <h4 className="mb-4 text-sm font-semibold text-emerald-300">
                        Done
                    </h4>

                    <div className="space-y-3">

                        <div className="rounded-xl bg-emerald-500/20 p-3">

                            <p className="text-sm font-medium text-white">
                                Landing Page
                            </p>

                        </div>

                        <div className="rounded-xl bg-emerald-500/20 p-3">

                            <p className="text-sm font-medium text-white">
                                UI Research
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default KanbanPreview;