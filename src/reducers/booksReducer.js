import { RECEIVE_BOOKS, RESET_BOOKS } from '../actions/booksActions';

const BooksReducer = (state = { all: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, all: action.books };
    case RESET_BOOKS:
      return { ...state, all: [] };
    default:
      return state;
  }
};

export default BooksReducer;
