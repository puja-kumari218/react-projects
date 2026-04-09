import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex gap-6 items-center shadow-md">
      <span className="font-bold text-xl mr-auto">MyApp</span>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "bg-white text-blue-600 px-4 py-2 rounded font-semibold"
            : "hover:bg-blue-500 px-4 py-2 rounded"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-blue-600 px-4 py-2 rounded font-semibold"
            : "hover:bg-blue-500 px-4 py-2 rounded"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-blue-600 px-4 py-2 rounded font-semibold"
            : "hover:bg-blue-500 px-4 py-2 rounded"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/github"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-blue-600 px-4 py-2 rounded font-semibold"
            : "hover:bg-blue-500 px-4 py-2 rounded"
        }
      >
        Github
      </NavLink>
    </nav>
  );
}

export default Header;
