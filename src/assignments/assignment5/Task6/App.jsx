import { useState } from "react";


const App = () => {
  const animes = ["Naruto", "Bleach", "OnePiece"];

  const [anime] = useState(animes);

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-white">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-[0_24px_90px_-50px_rgba(56,189,248,0.45)] sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-cyan-400">
          Task 6
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Arrays in State
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          A simple array is stored in state and rendered as a styled collection
          of cards.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {anime.map((title, index) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-950"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Anime {index + 1}
              </p>
              <p className="mt-3 text-2xl font-bold text-white">{title}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App
