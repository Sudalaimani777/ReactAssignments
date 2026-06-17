import TaskCard, { PrimaryButton } from "../shared/TaskCard";

const ShowHideContent = ({ showContent, handleHideAndShowContent }) => {
  return (
    <TaskCard
      taskNumber="6"
      title="Show And Hide Content"
      description="Toggle the visibility of a short content block."
      actions={<PrimaryButton onClick={handleHideAndShowContent}>Toggle Content</PrimaryButton>}
    >
      {showContent ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">Visible Content</p>
          <p className="mt-2 text-xl font-semibold">Hi, the content is now visible.</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
          <p className="text-xs font-medium uppercase tracking-[0.2em]">Content Hidden</p>
          <p className="mt-2 text-base">Click the button to show the content again.</p>
        </div>
      )}
    </TaskCard>
  );
};

export default ShowHideContent;
