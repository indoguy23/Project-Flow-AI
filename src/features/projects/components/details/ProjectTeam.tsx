const members = [
  {
    name: "Aryan",
    role: "Frontend Developer",
  },
  {
    name: "Rahul",
    role: "Backend Developer",
  },
  {
    name: "Sneha",
    role: "UI Designer",
  },
];

const ProjectTeam = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Team Members</h2>

      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.name} className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white">
              {member.name.charAt(0)}
            </div>

            <div>
              <h4 className="font-medium">{member.name}</h4>

              <p className="text-sm text-slate-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTeam;
