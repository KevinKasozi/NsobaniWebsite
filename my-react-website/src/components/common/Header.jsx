import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ hospital, charity }) => {
  return (
    <header className={`p-4 ${hospital ? 'bg-blue-500' : charity ? 'bg-red-500' : 'bg-gray-200'}`}>
      <Link to="/" className="text-lg font-bold text-white">Home</Link>
      {/* Add more links and styles as needed */}
    </header>
  );
};

export default Header;
