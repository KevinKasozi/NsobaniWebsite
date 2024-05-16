import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = ({ logo, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path.includes('hospital') ? 'hospital' : 'charity');
  };

  return (
    <header className="bg-white p-4 shadow-lg flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-semibold">Nsobani Memorial Hospital</h1>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => handleNavigation('/hospital')}
          className={`py-2 px-4 rounded-lg ${activeTab === 'hospital' ? 'bg-blue-700 text-white' : 'bg-red-500 text-white'} transition-colors duration-300`}
        >
          Our hospital site
        </button>
        <button
          onClick={() => handleNavigation('/charity')}
          className={`py-2 px-4 rounded-lg ${activeTab === 'charity' ? 'bg-red-700 text-white' : 'bg-blue-500 text-white'} transition-colors duration-300`}
        >
          Our charity site
        </button>
      </div>
    </header>
  );
};

export default Header;
