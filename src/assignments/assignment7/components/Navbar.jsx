import { NavLink } from "react-router-dom"

const navItems = [
  { label: "Array", to: "/assignment7/array" },
  { label: "Object", to: "/assignment7/object" },
  { label: "Array of Objects", to: "/assignment7/arrayofobject" },
]

const Navbar = () => {
  return (
    <header className="rounded-[1.75rem] bg-slate-950 px-5 py-6 text-white shadow-[0_25px_80px_-45px_rgba(15,23,42,0.8)] sm:px-7">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-300">
            Assignment 7
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            Update values with useState
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Explore how React updates plain arrays, single objects, and arrays of objects with clear before-and-after feedback.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:border-emerald-300/40 hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
