import PropTypes from 'prop-types';
import './index.scss';
import Info from './Info';
import Progress from './Progress';
import Chapter from './Chapter';

const Book = ({ book }) => {
  return (
    <div className="bookInfoContainer">
      <Info book={book} />
      <Progress />
      <div className="verticalSeparator"> </div>
      <Chapter />
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Book;
