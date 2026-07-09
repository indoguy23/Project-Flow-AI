import { Sparkles } from "lucide-react";

const AIInsights = () => {
    return (
        <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

                <Sparkles className="text-cyan-600" />

                <h3 className="text-lg font-semibold">
                    AI Insights
                </h3>

            </div>

            <ul className="space-y-4 text-sm text-slate-700">

                <li>
                    ✅ Sprint completion predicted by Friday.
                </li>

                <li>
                    📈 Productivity increased by 18%.
                </li>

                <li>
                    ⚠️ Two projects need attention.
                </li>

                <li>
                    🤖 AI recommends assigning 3 more developers.
                </li>

            </ul>

        </div>
    );
};

export default AIInsights;