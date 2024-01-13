// Header.jsx
import React from 'react';
import Navbar from './navbar';
import SubNavbar from './subnavbar';

const Header = ({ activeTab, setActiveTab, logo }) => {
  return (
    <header className="w-full">
      <div className="flex-grow w-full px-4 sm:px-6 lg:px-80 py-4"> {/* Same padding as main content */}
        {logo && <img src={logo} alt="Logo" className="logo-class" />}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SubNavbar />
      </div>
    </header>
  );
};

export default Header;
