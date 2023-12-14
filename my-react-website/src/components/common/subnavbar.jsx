// SubNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function SubNavbar({ activeTab }) {
  const isHospital = activeTab === 'hospital';

  // Base styles for all subnav links
  const baseStyle = "inline-block rounded-full py-1 px-3 mr-3";

  // Styles for active subnav link
  const activeLinkStyle = isHospital
    ? "bg-blue-500 text-white border border-blue-500"
    : "bg-red-500 text-white border border-red-500";

  // Styles for inactive subnav link
  const inactiveLinkStyle = isHospital
    ? "text-blue-500 hover:bg-blue-500 hover:text-white"
    : "text-red-500 hover:bg-red-500 hover:text-white";

  return (
    <div className={`p-2 ${isHospital ? 'bg-blue-100' : 'bg-red-100'}`}>
      <ul className="flex">
        <li>
          <NavLink 
            to={isHospital ? "/hospital/about" : "/charity/about"} 
            className={`${baseStyle} ${activeLinkStyle}`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={isHospital ? "/hospital/contact" : "/charity/contact"} 
            className={`${baseStyle} ${inactiveLinkStyle}`}
          >
            Contact
          </NavLink>
        </li>
        {/* Additional links as needed */}
      </ul>
    </div>
  );
}

export default SubNavbar;
