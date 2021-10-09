import {get, add, remove} from '../../API/bookStore';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_LIST_OF_BOOKS_FROM_API = 'bookStore/books/ADD_LIST_OF_BOOKS_FROM_API';
const initialState = [];

// Action Creators:
const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const addListOfBooksFromApi = (payload) => ({
    type: ADD_LIST_OF_BOOKS_FROM_API,
    payload,
});

// redux thunks middlewares for adding/getting/removing books from the API.
const addBookToApi = (payload) => (dispatch) => {
  add(payload).then(status => {
    if(status){
      dispatch(addBook(payload));
    }
  });
};
  
const removeBookFromApi = (payload) => (dispatch) => {
  remove(payload).then(status => {
    if(status){
      dispatch(removeBook(payload));                  
    }
  });
}
  
const getListOfBooks = () => (dispatch) => {
  get()
    .then((data) => dispatch(addListOfBooksFromApi(data)));
};

const prepareData = (rawData) => {
  const bookList = [];
  for (const id in rawData) {
    if (Object.prototype.hasOwnProperty.call(rawData, id)) {
      const { category, title } = rawData[id][0];
      const author = category;
      const book = {
        id,
        title,
        author
      };
      bookList.push(book);
    }
  }
  return bookList;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case ADD_LIST_OF_BOOKS_FROM_API: {
      const bookList = prepareData(action.payload);
      return bookList;
    }
    default:
      return state;
  }
};

export {
  reducer as default,
  addBookToApi,
  getListOfBooks,
  removeBookFromApi,
};
