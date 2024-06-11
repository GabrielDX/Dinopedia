import React, { useState } from 'react';

const SearchBar = ({ onSearch, children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      {children}
      <input
        type="text"
        placeholder="Buscar dinossauro..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
