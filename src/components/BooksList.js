import Book from './Book';

const BooksList = (props) => (
  <div>
    {props.books.map((book) => (
      <div key={book.id}>
        <Book book={book} />
      </div>
    ))}
  </div>
);

export default BooksList;
