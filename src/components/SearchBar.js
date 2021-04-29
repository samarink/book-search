import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { fetchBooksBySearchTerm } from '../actions/booksActions';
import Input from './Input';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const onChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchBooksBySearchTerm(debouncedSearchTerm));
  };

  useEffect(() => {
    handleSearch();
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
