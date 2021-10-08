/* eslint react/prop-types: 0 */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {id, title, author} =props.book;
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>
        Book title:
        { title }
      </p>
      <p>
        Book author:
        { author }
      </p>
      <button id={id} type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};
export default Book;
