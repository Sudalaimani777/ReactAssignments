import { EmployeeSearchInput } from "./index";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950/95 text-white shadow-lg backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-200/90">
            Team Directory
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Meet your employee network
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
            Browse people, roles, and departments with a clean search experience on every screen size.
          </p>
        </div>

        <div className="w-full lg:max-w-md xl:max-w-lg">
          <EmployeeSearchInput />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
