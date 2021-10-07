const Book = (props) => {
  return(
    <div>
      {props.bookName}
      <button>Remove</button>
    </div>
  );
};
export default Book;
