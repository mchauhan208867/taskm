import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      className="border border-gray-300 p-2 w-full mb-4 rounded"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
