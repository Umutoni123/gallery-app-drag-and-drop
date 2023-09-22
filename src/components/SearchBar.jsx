import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search images by tag"
        value={searchQuery}
        onChange={handleInputChange}
        className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default SearchBar;
