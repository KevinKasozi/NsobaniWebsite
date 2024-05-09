// SubNavbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
  const baseStyle = "inline-block rounded-full py-1 px-3 mr-3";
  const linkStyle = `text-${activeTabColor}-500 hover:bg-${activeTabColor}-500 hover:text-white`;

  return (
    <div className={`p-2 bg-${activeTabColor}-100`}>
      <ul className="flex">
        {links.map(link => (
          <li key={link.path}>
            <NavLink 
              to={link.path}
              className={({ isActive }) => `${baseStyle} ${isActive ? 'bg-' + activeTabColor + '-500 text-white' : linkStyle}`}
              end={link.exact}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubNavbar;
