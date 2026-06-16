import { useState } from "react"
import { schools } from "./data/data.js"
import SchoolCard from "./SchoolCard.jsx"

const App = () => {
  const [school] = useState(schools);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_45%,#f8fafc_100%)] px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-orange-100 bg-white/90 p-8 shadow-[0_30px_100px_-50px_rgba(234,88,12,0.35)] backdrop-blur sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-700">
            Task 7
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Arrays of Objects in `useState`
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            This task renders a list of school records from state, showing how
            arrays of objects can drive reusable React components.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-700">
              {school.length} schools
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 font-semibold">
              Reusable card rendering
            </span>
            <span className="rounded-full bg-emerald-100 px-4 py-2 font-semibold text-emerald-700">
              State-driven UI
            </span>
          </div>
        </div>

        <div className="mt-10">
          <SchoolCard schools={school} />
        </div>
      </section>
    </main>
  );
};

export default App
