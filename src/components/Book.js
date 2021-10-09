import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;
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

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object()),
};
export default Book;
