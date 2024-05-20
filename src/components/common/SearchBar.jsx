import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center w-full max-w-md ml-auto">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
      />
      <button type="submit" className="ml-2 text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
