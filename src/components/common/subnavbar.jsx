import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SubNavbar() {
  const location = useLocation();
  const isHospitalDomain = location.pathname.startsWith('/hospital');
  const isCharityDomain = location.pathname.startsWith('/charity');

  // Define links for hospital and charity domains
  const hospitalLinks = [
    { path: '/hospital', label: 'Home', exact: true },
    { path: '/hospital/about', label: 'About' },
    { path: '/hospital/contact', label: 'Contact' },
    { path: '/hospital/ourservices', label: 'Our Services' }
    // Add more hospital specific links here
  ];

  const charityLinks = [
    { path: '/charity/about', label: 'About' },
    { path: '/charity/events', label: 'Events' },
    { path: '/charity/donate', label: 'Donate' }
    // Add more charity specific links here
  ];

  // Choose links based on domain
  const links = isHospitalDomain ? hospitalLinks : isCharityDomain ? charityLinks : [];

  // Base styles for all subnav links
  const baseStyle = "inline-block rounded-full py-1 px-3 mr-3";

  // Determine the active tab color
  const activeTabColor = isHospitalDomain ? 'blue' : isCharityDomain ? 'red' : 'gray';

  // Styles for subnav links
  const linkStyle = `text-${activeTabColor}-500 hover:bg-${activeTabColor}-500 hover:text-white`;

  return (
    <div className={`p-2 bg-${activeTabColor}-100`}>
      <ul className="flex">
        {links.map(link => (
          <li key={link.path}>
            <NavLink 
              to={link.path}
              className={({ isActive }) => 
                `${baseStyle} ${isActive ? 'bg-' + activeTabColor + '-500 text-white' : 'text-' + activeTabColor + '-500 hover:bg-' + activeTabColor + '-500 hover:text-white'}`
              }
              exact={link.exact}
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
