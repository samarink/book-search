import React from 'react';

const BookEntry = ({ book: { title, author_name, publish_year } }) => (
  <li>
    <p>{title}</p>
    <p>{author_name}</p>
    <p>{publish_year}</p>
  </li>
);

export default BookEntry;
