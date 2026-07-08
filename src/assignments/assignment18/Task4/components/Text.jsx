import { useShowText } from '../context/ShowTextContext';

export default function Text() {
  const { displayedText } = useShowText();

  return (
    <div className="min-h-12 flex items-center justify-center p-4 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50">
      {displayedText ? (
        <p className="text-xl font-medium text-slate-800 dark:text-slate-200 animate-fade-in">
          {displayedText}
        </p>
      ) : (
        <p className="text-sm text-slate-400 italic">
          Submitted text will appear here...
        </p>
      )}
    </div>
  );
}
