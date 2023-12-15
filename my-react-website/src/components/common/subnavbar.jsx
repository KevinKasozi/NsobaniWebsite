import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SubNavbar() {
  const location = useLocation();
  const isHospitalDomain = location.pathname.startsWith('/hospital');
  const isHospitalAbout = location.pathname === '/hospital/about';
  const isHospitalContact = location.pathname === '/hospital/contact';
  const isHospitalServices = location.pathname === '/hospital/ourservices';

  // Base styles for all subnav links
  const baseStyle = "inline-block rounded-full py-1 px-3 mr-3";

  // Determine the active tab color based on whether it's the hospital domain
  const activeTabColor = isHospitalDomain ? 'blue' : 'red';

  // Styles for subnav links (Blue color scheme)
  const linkStyle = `text-${activeTabColor}-500 hover:bg-${activeTabColor}-500 hover:text-white`;

  return (
    <div className={`p-2 bg-${activeTabColor}-100`}>
      <ul className="flex">
        <li>
          <NavLink 
            to="/hospital/about" // Always set to the hospital's about page
            className={`${baseStyle} ${isHospitalAbout ? linkStyle : ''}`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/hospital/contact" // Always set to the hospital's contact page
            className={`${baseStyle} ${isHospitalContact ? linkStyle : ''}`}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/hospital/ourservices" // Always set to the hospital's contact page
            className={`${baseStyle} ${isHospitalServices ? linkStyle : ''}`}
          >
            Our Services
          </NavLink>
        </li>
        {/* Additional links as needed */}
      </ul>
    </div>
  );
}

export default SubNavbar;
