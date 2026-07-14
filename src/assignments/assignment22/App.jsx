import { Counter } from './components/Counter';
import { LoginForm } from './components/LoginForm';
import { ProductDisplay } from './components/ProductDisplay';
import { StudentStorage } from './components/StudentStorage';
import { StudentDirectory } from './components/StudentDirectory';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <header className="text-center border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"> Custom Hooks Portfolio</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">A demonstration showcasing isolated, modular state logic abstractions using modern React guidelines.</p>
        </header>

        {/* Task 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Task 1: Isolated Counter Hooks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Counter />
          </div>
        </section>

        {/* Task 2 & 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Task 2: Dynamic Input Toggle</h2>
            <LoginForm />
          </section>
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Task 4: Persisted LocalStorage Engine</h2>
            <StudentStorage />
          </section>
        </div>

        {/* Task 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Task 3: Async Fetch API Orchestrator</h2>
          <ProductDisplay />
        </section>

        {/* Task 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Task 5: Reactive Array Lookup Engine</h2>
          <StudentDirectory />
        </section>
        
      </div>
    </div>
  );
}

export default App;