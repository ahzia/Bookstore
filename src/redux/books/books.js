const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_LIST_OF_BOOKS_FROM_API = 'bookStore/books/ADD_LIST_OF_BOOKS_FROM_API';
const initialState = [];

// Action Creators:
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addListOfBooksFromApi = (payload) => ({
  type: ADD_LIST_OF_BOOKS_FROM_API,
  payload,
});

const prepareData = (rawData) => {
  const bookList = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const id in rawData) {
    if (Object.prototype.hasOwnProperty.call(rawData, id)) {
      const { category, title } = rawData[id][0];
      const author = category;
      const book = {
        id,
        title,
        author,
      };
      bookList.push(book);
    }
  }
  return bookList;
};

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
};
