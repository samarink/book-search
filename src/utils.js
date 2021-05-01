import { BOOK_COVER_API_URL } from './constants';

export const getBookCoverUrlWithCoverI = (cover_i, size = 'medium') => {
  const sizes = {
    small: '-S',
    medium: '-M',
    large: '-L',
  };

  return cover_i && cover_i !== -1
    ? `${BOOK_COVER_API_URL}${cover_i}${sizes[size]}.jpg`
    : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/book.png';
  // use placeholder cover in case no actual cover was provided
};

export const formatAuthorName = (authors) => formatter(authors);
export const formatPublishYear = (publish_year) =>
  formatter(publish_year.sort((a, b) => a - b));
export const formatISBN = (isbn) => formatter(isbn);
export const formatPublisher = (publisher) => formatter(publisher);

const formatter = (values) => {
  if (!values) return 'Unknown';

  return values.join(', ');
};
