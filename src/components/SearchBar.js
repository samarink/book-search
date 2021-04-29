import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooksBySearchTerm } from '../actions/booksActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    dispatch(fetchBooksBySearchTerm(searchTerm));
  };

  return (
    <>
      <input value={searchTerm} onChange={onChange} />
    </>
  );
};

export default SearchBar;
