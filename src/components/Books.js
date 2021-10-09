import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => (
  <div >
    <BooksList />
    <div className="horizontalSeparator"></div>
    <AddBook />
  </div>
);
export default Books;
