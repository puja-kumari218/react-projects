import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="p-9 bg-amber-50 text-amber-700">
      <Link to="/" className="text-amber-700 mr-20">
        MyApp
      </Link>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-amber-700 font-bold" : "text-gray-700"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-amber-700 font-bold" : "text-gray-700"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/github"
        className={({ isActive }) =>
          isActive ? "text-amber-700 font-bold" : "text-gray-700"
        }
      >
        Github
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-amber-700 font-bold" : "text-gray-700"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Header;
