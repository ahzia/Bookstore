const Book = (props) => {
  return(
    <div>
      {props.bookName}
      {props.bookAuthor}
      <button>Remove</button>
    </div>
  );
};
export default Book;
