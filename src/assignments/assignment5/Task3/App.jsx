
const App = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_35%),linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)] px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-200/70 bg-white/85 p-8 shadow-[0_20px_70px_-35px_rgba(22,163,74,0.55)] backdrop-blur sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-emerald-700">
          Task 3
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          `useState` Syntax
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          This task highlights the basic hook syntax used to create a state
          value and its setter function.
        </p>

        <pre className="mt-8 overflow-x-auto rounded-3xl bg-slate-950 p-6 text-sm leading-7 text-emerald-300 shadow-inner sm:text-base">
          <code>const [count, setCount] = useState(0);</code>
        </pre>
      </section>
    </main>
  );
};

export default App
