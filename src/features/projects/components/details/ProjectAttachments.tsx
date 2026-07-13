import { Paperclip } from "lucide-react";

const ProjectAttachments = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Attachments</h2>

      <button className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 px-5 py-4 text-slate-600 hover:border-cyan-500 cursor-pointer">
        <Paperclip size={18} />
        Upload File
      </button>
    </div>
  );
};

export default ProjectAttachments;
