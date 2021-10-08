import {useState} from 'redux';
import { useDispatch } from 'react-redux';
import {addBook, removeBook} from './redux/books/books';

const AddBook = () => {
  const initialState = {title:'',author:''}
  const {book, setBook} = useState(initialState);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {name, value} = e.target;
    if(name === 'title') {
      setBook({...book,title: value});
    } else {
      setBook({...book,author: value});
    } 
  }

  return (
    <form>
      Book Name:
      <input type='text' value={book.title} name='title' onChange={onChange} />
      Author:
      <input type='text' value={book.author} name='author' onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddBook;
