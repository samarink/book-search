import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import Input from './Input';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const onChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Input
      value={searchTerm}
      onChange={onChange}
      placeholder="e.g The Lord Of The Rings.."
    />
  );
};

export default SearchBar;
