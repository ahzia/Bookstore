/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
const Book = (props) => (
  <div>
    {props.bookName}
    {props.bookAuthor}
    <button type="submit">Remove</button>
  </div>
);
export default Book;
