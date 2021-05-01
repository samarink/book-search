import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { getBookCoverUrlWithCoverI, formatAuthorName } from '../utils';
import BookFullView from './BookFullView';

const Container = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.margins.normal};
  cursor: pointer;
`;

const ImgContainer = styled.img`
  width: 125px;
  height: auto;
  margin-right: ${theme.margins.big};
`;

const Title = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.big};
`;

const Author = styled.h3`
  color: ${theme.colors.textSecondary};
`;

const BookEntry = ({ book }) => {
  const [isFullView, setIsFullView] = useState(false);
  const { title, author_name, cover_i } = book;

  const openFullView = () => setIsFullView(true);
  const closeFullView = () => setIsFullView(false);
  const handleClick = () => openFullView();

  return (
    <>
      <BookFullView
        book={book}
        isFullView={isFullView}
        openFullView={openFullView}
        closeFullView={closeFullView}
      />
      <Container onClick={handleClick}>
        <ImgContainer
          src={getBookCoverUrlWithCoverI(cover_i)}
          alt="book cover picture"
        />
        <div>
          <Title>{title}</Title>
          <Author>By {formatAuthorName(author_name)}</Author>
        </div>
      </Container>
    </>
  );
};

export default BookEntry;
