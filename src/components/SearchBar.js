import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { fetchBooksBySearchTerm } from '../actions/booksActions';

const Input = styled.input`
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding: ${theme.paddings.small} ${theme.paddings.medium};
  margin-top: ${theme.margins.normal};
  margin-bottom: ${theme.margins.big};
  border: 2px solid ${theme.colors.lightgray};
  border-radius: 8px;
  box-shadow: 5px 5px 18px #888888;
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.bold}

  transition: border 0.2s ease;
  &:focus,
  &:hover {
    border: 2px solid ${theme.colors.lightblue};
  }
`;

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
    <>
      <Input
        value={searchTerm}
        onChange={onChange}
        placeholder="e.g The Lord Of The Rings.."
      />
    </>
  );
};

export default SearchBar;
