import React from 'react';
import { BOOK_COVER_API_URL } from '../constants';
import { getBookCoverUrlWithCoverI } from '../utils';

const BookEntry = ({ book: { title, author_name, cover_i } }) => {
  return (
    <li>
      <p>
        {title} by {author_name}
      </p>
      <img src={getBookCoverUrlWithCoverI(cover_i)} alt="book cover picture" />
    </li>
  );
};

export default BookEntry;
