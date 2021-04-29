import React from 'react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { fetchBooksBySearchTerm } from './actions/booksActions';
import { useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar';
import BookList from './components/BooksList';
import Loading from './components/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  const handleSearch = (searchTerm) => {
    trackPromise(dispatch(fetchBooksBySearchTerm(searchTerm)));
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {promiseInProgress ? <Loading /> : <BookList />}
    </>
  );
};

export default App;
