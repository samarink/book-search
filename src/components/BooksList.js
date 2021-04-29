import React from 'react';
import BookEntry from './BookEntry';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books.all);

  return (
    <ul>
      {books.map((book) => (
        <BookEntry book={book} key={book.key} />
      ))}
    </ul>
  );
};

export default BookList;
