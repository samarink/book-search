import booksService from '../services/booksService';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RESET_BOOKS = 'RESET_BOOKS';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const resetBooks = () => ({
  type: RESET_BOOKS,
});

export const fetchBooksBySearchTerm = (searchTerm) => async (dispatch) => {
  try {
    const response = await booksService.searchByName(searchTerm);
    return dispatch(receiveBooks(response.data.docs));
  } catch (err) {
    return console.log(err);
  }
};
