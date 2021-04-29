import axios from 'axios';
import { BOOK_SEARCH_API_URL } from '../constants';

const searchByName = (searchTerm) =>
  axios.get(`${BOOK_SEARCH_API_URL}${searchTerm}`);

window.searchByName = searchByName;

export default { searchByName };
