import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center gap-3 py-4 bg-stone-800 shadow-md px-6 w-full">
      <div className="text-xl font-bold font-display text-stone-300 flex w-60">
        Ultimate Ice Cream
      </div>

      <div className="flex gap-5 mt-1 w-full ">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-stone-100 font-bold" : "text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-stone-100 font-bold" : "text-gray-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-stone-100 font-bold" : "text-gray-400"
          }
        >
          Contact
        </NavLink>
        <NavLink to="/search" className={({ isActive }) =>
            isActive ? "text-stone-100 font-bold" : "text-gray-400"
          }>
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
