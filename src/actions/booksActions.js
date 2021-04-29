import booksService from '../services/booksService';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const fetchBooksBySearchTerm = (searchTerm) => (dispatch) => {
  booksService
    .searchByName(searchTerm)
    .then((response) => dispatch(receiveBooks(response.data.docs)))
    .catch((err) => console.log(err));
};
