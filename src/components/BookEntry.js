import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { getBookCoverUrlWithCoverI, formatAuthorName } from '../utils';

const Container = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: ${theme.margins.normal};
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

const BookEntry = ({ book: { title, author_name, cover_i } }) => {
  return (
    <Container>
      <ImgContainer
        src={getBookCoverUrlWithCoverI(cover_i)}
        alt="book cover picture"
      />
      <div>
        <Title>{title}</Title>
        <Author>By {formatAuthorName(author_name)}</Author>
      </div>
    </Container>
  );
};

export default BookEntry;
