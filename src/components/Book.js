/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
import { useDispatch } from 'react-redux';
import {removeBook} from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    const {id} = e.target;
    dispatch(removeBook(id));
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
