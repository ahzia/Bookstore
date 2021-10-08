const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [];

//Action Creators:
export const addBook = payload => ({
  type: ADD_BOOK,
  payload
});

export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload
});

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [ ...state, action.payload];
    case REMOVE_BOOK:
      const id = action.payload;
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};
  
export default reducer;
