import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => (
  <div>
    <BooksList />
    <div className="horizontalSeparator" />
    <AddBook />
  </div>
);
export default Books;
