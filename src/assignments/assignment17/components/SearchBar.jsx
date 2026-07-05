import useTaskStore from "../store/todoStore"

const SearchBar = () => {
  const { searchTerm, searchTask } = useTaskStore();

  const handleSearchTask = (e) => {
    const { value } = e.target;
    searchTask(value);
  }

  return (
    <div className="relative w-full">
      {/* Decorative Search Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Styled Input Field */}
      <input
        type="text"
        placeholder="Search for tasks..."
        value={searchTerm}
        name="searchTerm"
        onChange={handleSearchTask}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/30 py-2.5 pl-10 pr-10 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-800 dark:bg-slate-950/20 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus:border-indigo-500 dark:focus:bg-slate-900 dark:focus:ring-indigo-950/50"
      />

      {/* Contextual Clear Indicator Badge */}
      {searchTerm && (
        <button
          type="button"
          onClick={() => searchTask("")}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchBar