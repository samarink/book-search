import { RECEIVE_BOOKS } from '../actions/booksActions';

const BooksReducer = (state = { all: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...state, all: action.books };
    default:
      return state;
  }
};

export default BooksReducer;
