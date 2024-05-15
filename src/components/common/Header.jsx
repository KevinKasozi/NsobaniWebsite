// src/components/common/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ logo, activeTab, setActiveTab }) => {
  const location = useLocation();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="ml-4 text-xl font-bold text-gray-800">Nsobani Memorial Hospital</h1>
        </div>

      </div>
    </header>
  );
};

export default Header;
