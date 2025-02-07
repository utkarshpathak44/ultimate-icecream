import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center gap-3 py-4 bg-white shadow-md px-6">
      <div className="text-xl font-bold font-display">Ultimate Ice Cream</div>

      <div className="flex gap-5">
        <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
          Contact
        </NavLink>
      </div>

      <div className="ml-auto">
        <input type="text" placeholder="Search" className="border px-3 py-1 rounded" />
      </div>
    </nav>
  );
};

export default NavBar;
