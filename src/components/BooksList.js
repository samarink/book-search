import React from 'react';
import BookEntry from './BookEntry';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import theme from '../theme';

const Container = styled.ul`
  margin: 0;
  padding: 0;

  @media ${theme.devices.desktop} {
    margin: 0 auto;
    width: 60%;
  }
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
