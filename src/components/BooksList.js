import { useState, useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import Book from './Book';
import store from '../redux/configureStore';
import { getListOfBooks } from '../redux/books/books';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch data from API
    dispatch(getListOfBooks());
  },[]);
  useEffect(() => {
    // fetch data from API
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
