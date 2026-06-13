import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">MyApp</div>
      <div className="flex gap-6">
        <NavLink
          to="/assignment2/task1"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold border-b-2 border-blue-400" : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/assignment2/task1/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold border-b-2 border-blue-400" : "hover:text-blue-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/assignment2/task1/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold border-b-2 border-blue-400" : "hover:text-blue-300"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;