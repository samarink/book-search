import React from 'react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { fetchBooksBySearchTerm, resetBooks } from '../actions/booksActions';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import BookList from './BooksList';
import Loading from './Loading';

const SearchAppContainer = () => {
  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  const handleSearch = (searchTerm) => {
    trackPromise(dispatch(fetchBooksBySearchTerm(searchTerm)));
  };

  const resetBooksList = () => {
    dispatch(resetBooks());
  };

  return (
    <>
      <SearchBar
        handleSearch={handleSearch}
        resetBooksList={resetBooksList}
        isLoading={promiseInProgress}
      />
      {promiseInProgress ? <Loading /> : <BookList />}
    </>
  );
};

export default SearchAppContainer;
