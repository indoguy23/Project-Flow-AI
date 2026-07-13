const ProjectComments = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">Comments</h2>

      <textarea
        rows={4}
        placeholder="Write a comment..."
        className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-cyan-500"
      />

      <button className="mt-4 rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white hover:bg-cyan-700">
        Post Comment
      </button>
    </div>
  );
};

export default ProjectComments;
