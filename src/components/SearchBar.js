import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <input value={searchTerm} onChange={onChange} />
    </>
  );
};

export default SearchBar;
