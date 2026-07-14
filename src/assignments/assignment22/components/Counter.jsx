import { useCounter } from "../hooks/useCounter"

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Counter Component A (Starts at 10)</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{count}</p>
            <div className="flex gap-2">
                <button onClick={increment} className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">+</button>
                <button onClick={decrement} className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm">-</button>
                <button onClick={reset} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Reset</button>
            </div>
        </div>
    );
}

export default Counter