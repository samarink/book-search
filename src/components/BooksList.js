import React from 'react';
import BookEntry from './BookEntry';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.ul`
  margin: 0;
  padding: 0;
`;

const BookList = () => {
  const books = useSelector((state) => state.books.all);

  return (
    <Container>
      {books.map((book) => (
        <BookEntry book={book} key={book.key} />
      ))}
    </Container>
  );
};

export default BookList;
