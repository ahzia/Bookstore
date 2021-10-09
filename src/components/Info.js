import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/middlewares';

const Info = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBookFromApi(id));
  };

  return (
    <div className="info">
      <p className="category">Catagory</p>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <div className="creButtons">
        <button type="button" className="comments">Comments</button>
        <div className="btnSeparator"> </div>
        <button id={id} type="button" className="remove" onClick={removeBookFromStore}>Remove</button>
        <div className="btnSeparator"> </div>
        <button type="button" className="edit">Edit</button>
      </div>
    </div>
  );
};

Info.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Info;
