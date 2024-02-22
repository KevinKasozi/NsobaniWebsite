// Navbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ activeTab }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Define your search logic or navigation here based on searchTerm
    // For example, navigate to a search results page or filter content
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="bg-white p-4">
      <div className="flex justify-between items-center">
        {/* Left-aligned items */}
        <ul className="flex mr-6">
          {/* Replace with your actual NavLinks */}
          <li className="mr-3">
            <NavLink to="/hospital" className={`inline-block border border-blue-500 rounded-full py-1 px-3 ${activeTab === 'hospital' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>
              Hospital
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink to="/charity" className={`inline-block border border-red-500 rounded-full py-1 px-3 ${activeTab === 'charity' ? 'bg-red-500 text-white' : 'text-red-500 hover:bg-red-500 hover:text-white'}`}>
              Charity
            </NavLink>
          </li>
        </ul>

        {/* Right-aligned items */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button type="submit" className="ml-2 text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
