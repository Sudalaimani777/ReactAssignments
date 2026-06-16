import { useState } from "react"


const App = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => setCount((prevCount) => prevCount + 1);
  const handleDec = () => setCount((prevCount) => prevCount - 1);
  const handleReset = () => setCount(0);


  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-md rounded-[2rem] border border-sky-100 bg-white p-8 text-center shadow-[0_25px_80px_-40px_rgba(37,99,235,0.55)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
          Task 4
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">Counter</h1>
        <p className="mt-2 text-sm text-slate-500">
          Update the state with increment, decrement, and reset actions.
        </p>

        <div className="mt-8 rounded-3xl bg-slate-950 px-6 py-8 text-white">
          <h4 className="text-6xl font-black tabular-nums">{count}</h4>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleInc}
              className="rounded-2xl bg-emerald-500 px-5 py-3 text-lg font-bold text-white transition hover:bg-emerald-400"
            >
              +
            </button>
            <button
              onClick={handleReset}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
            >
              Reset
            </button>
            <button
              onClick={handleDec}
              className="rounded-2xl bg-rose-500 px-5 py-3 text-lg font-bold text-white transition hover:bg-rose-400"
            >
              -
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App
