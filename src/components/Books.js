import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => (
  <div>
    <AddBook />
    <BooksList books={[]}/>
  </div>
);
export default Books;
