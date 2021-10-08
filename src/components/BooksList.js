/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
import Book from './Book';
import { useState,useEffect } from 'react';
import store from '../redux/configureStore';

const BooksList = (props) => {
  const [books,setBooks] = useState([]); 

  useEffect(() => {
    store.subscribe(() => {
      setBooks(store.getState().booksReducer);
    });
  });

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
