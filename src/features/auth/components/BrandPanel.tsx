import KanbanPreview from "./KanbanPreview";

const BrandPanel = () => {
    return (
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 lg:flex items-center justify-center">

            {/* Background Glow */}

            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative z-10 w-full max-w-2xl px-10">

                {/* Logo */}

                <div className="mb-10 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white">
                        PF
                    </div>

                    <div>

                        <h1 className="text-2xl font-bold text-white">
                            ProjectFlow AI
                        </h1>

                        <p className="text-sm text-slate-300">
                            AI Powered Workspace
                        </p>

                    </div>

                </div>

                {/* Hero */}

                <div className="max-w-lg">

                    <h2 className="text-5xl font-bold leading-tight text-white">
                        Build Faster.
                        <br />
                        Manage Smarter.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-300">
                        Plan projects, organize work, collaborate with your team and let AI
                        help you stay productive.
                    </p>

                </div>

                {/* Product Preview */}

                <KanbanPreview />

                {/* Bottom Stats */}

                <div className="mt-10 grid grid-cols-3 gap-6">

                    <div>

                        <h3 className="text-3xl font-bold text-white">
                            15K+
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Active Users
                        </p>

                    </div>

                    <div>

                        <h3 className="text-3xl font-bold text-white">
                            99%
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Success Rate
                        </p>

                    </div>

                    <div>

                        <h3 className="text-3xl font-bold text-white">
                            AI
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Powered Workspace
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BrandPanel;