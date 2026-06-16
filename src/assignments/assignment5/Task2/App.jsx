import  { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-50/80">
              Task 2
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Hello, React!
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-cyan-50/90 sm:text-base">
              This class component logs each lifecycle phase in the console,
              from construction to unmounting.
            </p>
          </div>

          <div className="grid gap-4 px-8 py-8 sm:grid-cols-2">
            {[
              "Constructor runs when the component instance is created.",
              "Render updates the UI whenever React needs fresh output.",
              "componentDidMount runs after the first paint.",
              "componentDidUpdate runs after subsequent updates.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
