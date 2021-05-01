import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {
  getBookCoverUrlWithCoverI,
  formatAuthorName,
  formatPublishYear,
  formatISBN,
  formatPublisher,
} from '../utils';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const Title = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.big};
`;

const Author = styled.h3`
  color: ${theme.colors.textSecondary};
`;

const Close = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const BookFullView = ({ book, isFullView, closeFullView }) => {
  if (!isFullView) {
    return null;
  }

  const { title, author_name, cover_i, publisher, publish_year, isbn } = book;

  const handleClose = () => closeFullView();

  return (
    <Container onClick={handleClose}>
      <Content>
        <Close>&times;</Close>
        <img
          src={getBookCoverUrlWithCoverI(cover_i, 'large')}
          alt="book cover picture"
        />
        <Title>{title}</Title>
        <Author>Written by {formatAuthorName(author_name)}</Author>
        <p>Published by {formatPublisher(publisher)}</p>
        <p>Published at: {formatPublishYear(publish_year)}</p>
        <p>ISBN: {formatISBN(isbn)}</p>
      </Content>
    </Container>
  );
};

export default BookFullView;
