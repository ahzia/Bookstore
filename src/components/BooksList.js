import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Book from './Book';
import store from '../redux/configureStore';
import { getListOfBooks } from '../redux/books/middlewares';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfBooks());
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      setBooks(store.getState().booksReducer);
    });
  });

  return (
    <div className="booksContainer">
      {books.map((book) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
