import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHospitalPath = location.pathname.startsWith('/hospital');
  const isCharityPath = location.pathname.startsWith('/charity');

  const getLinkClass = (isActive, pathType) => {
    let baseStyles = "text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ";
    if (isActive) {
      if (pathType === 'hospital') {
        return baseStyles + "bg-blue-700";
      } else if (pathType === 'charity') {
        return baseStyles + "bg-red-700";
      }
    } else {
      return baseStyles + "hover:bg-opacity-80";
    }
  };

  const navStyles = isHospitalPath ? 'bg-blue-600' : isCharityPath ? 'bg-red-600' : 'bg-gray-600';

  return (
    <nav className={`${navStyles} p-4 shadow-lg`}>
      <div className="flex justify-between items-center container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/hospital"
              className={({ isActive }) => getLinkClass(isActive, 'hospital')}
            >
              Hospital
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/charity"
              className={({ isActive }) => getLinkClass(isActive, 'charity')}
            >
              Charity
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
