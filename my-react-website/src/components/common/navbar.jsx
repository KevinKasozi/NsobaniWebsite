// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ activeTab }) {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex">
        <li className="mr-3">
          <NavLink 
            to="/hospital"
            className={({ isActive }) => 
              isActive
                ? "inline-block border border-blue-500 rounded-full py-1 px-3 bg-blue-500 text-white"
                : "inline-block border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white py-1 px-3 text-blue-500"
            }
          >
            Hospital
          </NavLink>
        </li>
        <li className="mr-3">
          <NavLink 
            to="/charity"
            className={({ isActive }) => 
              isActive
                ? "inline-block border border-red-500 rounded-full py-1 px-3 bg-red-500 text-white"
                : "inline-block border border-red-500 rounded-full hover:bg-red-500 hover:text-white py-1 px-3 text-red-500"
            }
          >
            Charity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
