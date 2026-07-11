import { teamMembers } from "@/constants/teamMembers";

const statusColor = {
    Online: "bg-green-500",
    Away: "bg-yellow-400",
    Offline: "bg-slate-400",
};

const TeamMembers = () => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        Team Members
                    </h3>

                    <p className="text-sm text-slate-500">
                        Currently active workspace members
                    </p>
                </div>

                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {teamMembers.length} Members
                </span>

            </div>

            <div className="space-y-4">

                {teamMembers.map((member) => (

                    <div
                        key={member.id}
                        className="flex items-center justify-between rounded-xl border border-slate-100 p-3 transition hover:bg-slate-50"
                    >

                        <div className="flex items-center gap-3">

                            <div className="relative">

                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white">
                                    {member.avatar}
                                </div>

                                <span
                                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${statusColor[member.status]}`}
                                />

                            </div>

                            <div>

                                <h4 className="font-medium text-slate-900">
                                    {member.name}
                                </h4>

                                <p className="text-sm text-slate-500">
                                    {member.role}
                                </p>

                            </div>

                        </div>

                        <span className="text-xs font-medium text-slate-500">
                            {member.status}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default TeamMembers;