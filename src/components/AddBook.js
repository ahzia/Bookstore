import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi } from '../redux/books/middlewares';

const AddBook = () => {
  const initialState = { title: '', author: '' };
  const [book, setBook] = useState(initialState);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setError('');
    setBook(initialState);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setBook({ ...book, title: value });
    } else {
      setBook({ ...book, author: value });
    }
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (book.title === '') {
      setError('Title is Required');
    } else if (book.author === '') {
      setError('Author is Required');
    } else {
      const newBook = {
        id: uuidv4(),
        title: book.title,
        author: book.author,
      };
      dispatch(addBookToApi(newBook));
      resetForm();
    }
  };

  return (
    <div className="addBookContainer">
      <h2 className="header">Add new book </h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" className="bookTitle" placeholder="Book Title" value={book.title} name="title" onChange={onChange} />
        <input type="text" className="bookAuthor" placeholder="Book Author" value={book.author} name="author" onChange={onChange} />
        <button type="submit" className="submitBtn">Add Book</button>
      </form>
      <p>{error}</p>
    </div>
  );
};
export default AddBook;
