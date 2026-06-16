import { useState } from "react"


const App = () => {
  const userInfo = {
    userName: "Sudalaimani",
    age: 23,
    language: "Tamil",
  };
  const [userData] = useState(userInfo);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-100 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-rose-100 bg-white/90 p-8 shadow-[0_24px_80px_-40px_rgba(225,29,72,0.4)] backdrop-blur sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-700">
          Task 5
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Objects in State
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          This example stores a user object in React state and displays each
          property in a compact profile card.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-rose-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">
              Name
            </p>
            <p className="mt-3 text-xl font-bold text-slate-900">
              {userData.userName}
            </p>
          </div>
          <div className="rounded-3xl bg-amber-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Age
            </p>
            <p className="mt-3 text-xl font-bold text-slate-900">
              {userData.age}
            </p>
          </div>
          <div className="rounded-3xl bg-sky-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Language
            </p>
            <p className="mt-3 text-xl font-bold text-slate-900">
              {userData.language}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App
