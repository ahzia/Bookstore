/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
import { useDispatch } from 'react-redux';
import {addBook} from './redux/books/books';

const Book = (props) => {
  const removeBookFromStore = (e) => {
    
  }
  return(
    <div>
      {props.book.name}
      {props.book.author}
      <button id={props.book.id} onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};
export default Book;
