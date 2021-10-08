import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addBook} from '../redux/books/books';
import { v4 as uuidv4 } from "uuid"

const AddBook = () => {
  const initialState = {title:'',author:''}
  const [book, setBook] = useState(initialState);
  const [error,setError] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setError('');
    setBook(initialState);
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    if(name === 'title') {
      setBook({...book,title: value});
    } else {
      setBook({...book,author: value});
    } 
  }

  const submitBookToStore = (e) => {
    e.preventDefault();
    if(book.title === '') {
      setError('Title is Required');
    } else if(book.author === '') {
      setError('Author is Required');
    } else {
      const newBook = {
          id: uuidv4(),
          title:book.title,
          author:book.author,
      }
      dispatch(addBook(newBook));
      resetForm();
    }
  }

  return (
    <form onSubmit={submitBookToStore}>
      Book Name:
      <input type='text' value={book.title} name='title' onChange={onChange} />
      Author:
      <input type='text' value={book.author} name='author' onChange={onChange} />
      <p>{error}</p>
      <button type="submit">Add Book</button>
    </form>
  );
};
export default AddBook;
