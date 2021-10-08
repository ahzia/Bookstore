import Book from './Book';

const BooksList = (props) => {
  return (
    <div>
      {props.books.map(book => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default BooksList;
