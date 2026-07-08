import { useRef } from 'react';
import { useShowText } from '../context/ShowTextContext';

export default function Input() {
  const { setDisplayedText } = useShowText();
  // 1. Create a ref to anchor to the input field
  const inputRef = useRef(null);

  const handleDisplay = () => {
    // 2. Read the current DOM value directly from the ref on click
    if (inputRef.current) {
      setDisplayedText(inputRef.current.value);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-6">
      <input
        ref={inputRef} // 3. Attach the ref to the element
        type="text"
        placeholder="Type something here..."
        className="w-full sm:w-64 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all"
      />
      <button
        onClick={handleDisplay}
        className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap"
      >
        Display Text
      </button>
    </div>
  );
}
