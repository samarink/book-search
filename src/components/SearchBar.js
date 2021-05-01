import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import Input from './Input';
import Button from './Button';

const SearchBar = ({ handleSearch, isLoading, resetBooksList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (searchTerm === '') {
      resetBooksList();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoading && debouncedSearchTerm !== '') {
      handleSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      handleSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="e.g The Lord Of The Rings.."
        autofocus
      />
      <Button disabled={searchTerm === ''}>Search</Button>
    </form>
  );
};

export default SearchBar;
