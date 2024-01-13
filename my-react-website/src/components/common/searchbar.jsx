// SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Define your navigation logic based on the searchTerm
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
        alert('Section not found'); // Or display a message on your page
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center">
      <input
        type="search"
        placeholder="Type 'hospital', 'contact', 'services'..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button type="submit" className="ml-2 text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded">
        Go
      </button>
    </form>
  );
}

export default SearchBar;
