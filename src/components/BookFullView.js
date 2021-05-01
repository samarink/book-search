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
  box-shadow: ${theme.shadows.big};
  border-radius: ${theme.borderRadius.normal};
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.devices.desktop} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.big};
`;

const Author = styled.h3`
  color: ${theme.colors.textSecondary};
`;

const ImgContainer = styled.img`
  width: 50%;
  height: auto;

  @media ${theme.devices.desktop} {
    width: 25%;
    align-self: start;
    margin-right: ${theme.margins.big};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Close = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  align-self: flex-end;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Bold = styled.span`
  font-weight: ${theme.fontWeights.bold};
`;

const BookFullView = ({ book, isFullView, closeFullView }) => {
  if (!isFullView) {
    return null;
  }

  const { title, author_name, cover_i, publisher, publish_year, isbn } = book;

  const handleClose = () => closeFullView();

  return (
    <Container onClick={handleClose}>
      <Content onClick={(event) => event.stopPropagation()}>
        <Close onClick={handleClose}>&times;</Close>
        <ContentWrapper>
          <ImgContainer
            src={getBookCoverUrlWithCoverI(cover_i, 'large')}
            alt="book cover picture"
          />
          <TextWrapper>
            <Title>{title}</Title>
            <Author>Written by {formatAuthorName(author_name)}</Author>
            <p>
              <Bold>Published by </Bold> {formatPublisher(publisher)}
            </p>
            <p>
              <Bold>Published at:</Bold> {formatPublishYear(publish_year)}
            </p>
            <p>
              <Bold>ISBN:</Bold> {formatISBN(isbn)}
            </p>
          </TextWrapper>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default BookFullView;
