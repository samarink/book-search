import { combineReducers } from 'redux';
import books from './booksReducer';

const RootReducer = combineReducers({
  books,
});

export default RootReducer;
