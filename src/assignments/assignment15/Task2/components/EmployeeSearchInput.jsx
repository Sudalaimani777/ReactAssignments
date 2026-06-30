import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

const EmployeeSearchInput = () => {
  const { handleSearchEmployees, searchEmployees } = useContext(EmployeeContext);

  return (
    <label className="block w-full">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
        Search employees
      </span>
      <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-lg ring-1 ring-white/10 backdrop-blur-md transition focus-within:border-amber-200/60 focus-within:ring-amber-200/40">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 flex-none text-slate-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
          <circle cx="11" cy="11" r="6" />
        </svg>
        <input
          type="text"
          placeholder="Search by first name"
          onChange={handleSearchEmployees}
          value={searchEmployees}
          className="w-full bg-transparent text-sm text-white placeholder:text-slate-300/80 focus:outline-none sm:text-base"
        />
      </div>
    </label>
  );
};

export default EmployeeSearchInput;
