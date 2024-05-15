// src/components/common/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    switch (searchTerm.toLowerCase()) {
      case 'hospital':
        navigate('/hospital');
        break;
      case 'contact':
        navigate('/hospital/contact');
        break;
      case 'services':
        navigate('/hospital/ourservices');
        break;
      case 'charity':
        navigate('/charity');
        break;
      // Add more cases as needed
      default:
        alert('Section not found');
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
      <input
        type="search"
        placeholder="Type 'hospital', 'contact', 'services'..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
      />
      <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        Go
      </button>
    </form>
  );
}

export default SearchBar;
