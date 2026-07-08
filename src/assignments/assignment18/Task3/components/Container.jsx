import { useToggle } from '../context/ToggleContext';

export default function Container() {
  const { theme, toggleTheme } = useToggle();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
      <div className="p-8 max-w-sm rounded-xl border border-slate-200 bg-slate-50 shadow-md text-center dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-2xl font-bold mb-2">Tailwind + Context</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          The wrapper responds to root ref mutations, while this card tracks state context!
        </p>
        
        <button
          onClick={toggleTheme}
          className="mx-auto flex items-center gap-2 px-5 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </div>
  );
}
