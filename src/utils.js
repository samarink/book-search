import { BOOK_COVER_API_URL } from './constants';

export const getBookCoverUrlWithCoverI = (cover_i) => {
  return cover_i && cover_i !== -1
    ? `${BOOK_COVER_API_URL}${cover_i}-M.jpg`
    : // use placeholder cover in case no actual cover was provided
      'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/book.png';
};

export const formatAuthorName = (authors) => {
  if (!authors) return 'Unknown';

  return authors.join(', ');
}
