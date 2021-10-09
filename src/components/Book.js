import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBookFromApi(id));
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
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Book;
