import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  // Logic to fetch and display search results based on `query`
  // For now, we'll just display the query
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {/* Implement actual search result fetching and display here */}
    </div>
  );
};

export default SearchResults;
