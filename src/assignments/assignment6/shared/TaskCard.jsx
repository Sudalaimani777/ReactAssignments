const TaskCard = ({ taskNumber, title, description, children, actions }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-8">
        <div className="mb-6">
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Task {taskNumber}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">{title}</h1>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">{children}</div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
      </section>
    </main>
  );
};

export const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ValueTile = ({ label, value, tone = "cyan" }) => {
  const toneClasses = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    rose: "border-rose-400/30 bg-rose-400/10 text-rose-100",
    violet: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  };

  return (
    <div className={`rounded-2xl border p-4 ${toneClasses[tone] ?? toneClasses.cyan}`}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
};

export const DetailList = ({ items }) => {
  return (
    <div className="grid gap-3">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <span className="text-sm font-medium text-slate-300">{label}</span>
          <span className="text-base font-semibold text-white">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
