import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";

const EmployeeGrid = () => {
  const { filterEmployees } = useContext(EmployeeContext);

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(254,215,170,0.35),transparent_30%),linear-gradient(180deg,#fff7ed_0%,#fff_35%,#f8fafc_100%)]">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Employee Directory
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filterEmployees.length} employee{filterEmployees.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {filterEmployees.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/80 px-6 py-12 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-700">No employees found</p>
            <p className="mt-2 text-sm text-slate-500">
              Try searching with a different first name.
            </p>
          </div>
        )}
      </main>
    </section>
  );
};

export default EmployeeGrid;
