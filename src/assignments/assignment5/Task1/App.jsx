import { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 px-6 py-16 text-slate-900">
        <section className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-orange-100 bg-white/90 p-10 text-center shadow-[0_24px_80px_-40px_rgba(194,65,12,0.55)] backdrop-blur">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
            Task 1
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            This is the Class Component
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            A simple class-based React component presented in a polished hero
            card using Tailwind utility classes.
          </p>
        </section>
      </main>
    );
  }
}

export default App;
