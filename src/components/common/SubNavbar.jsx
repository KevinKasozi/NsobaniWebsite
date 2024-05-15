// src/components/common/SubNavbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from './searchbar';

function SubNavbar() {
  const location = useLocation();
  const isHospitalDomain = location.pathname.startsWith('/hospital');
  const isCharityDomain = location.pathname.startsWith('/charity');

  const links = isHospitalDomain ? [
    { path: '/hospital', label: 'Home', exact: true },
    { path: '/hospital/about', label: 'About' },
    { path: '/hospital/contact', label: 'Contact' },
    { path: '/hospital/ourservices', label: 'Our Services' }
  ] : isCharityDomain ? [
    { path: '/charity', label: 'Home', exact: true },
    { path: '/charity/about', label: 'About' },
    { path: '/charity/events', label: 'Events' },
    { path: '/charity/donate', label: 'Donate' }
  ] : [];

  const activeTabColor = isHospitalDomain ? 'blue' : isCharityDomain ? 'red' : 'gray';
  const baseStyle = "inline-block rounded-lg py-2 px-4 transition-colors duration-300";
  const textClass = isHospitalDomain ? 'text-blue-600' : isCharityDomain ? 'text-red-600' : 'text-gray-600';
  const hoverBgClass = isHospitalDomain ? 'hover:bg-blue-600' : isCharityDomain ? 'hover:bg-red-600' : 'hover:bg-gray-600';
  const hoverTextClass = 'hover:text-white';

  return (
    <div className={`p-4 ${isHospitalDomain ? 'bg-blue-100' : isCharityDomain ? 'bg-red-100' : 'bg-gray-100'} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `${baseStyle} ${isActive ? `bg-${activeTabColor}-600 text-white` : `${textClass} ${hoverBgClass} ${hoverTextClass}`} transition-colors duration-300`}
                end={link.exact}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
    </div>
  );
}

export default SubNavbar;
