import store from '../configureStore';
import { get, add, remove } from '../../API/bookStore';
import { addBook, removeBook, addListOfBooksFromApi } from './books';

// redux thunks middlewares for adding/getting/removing books from the API.
const addBookToApi = (payload) => {
  add(payload).then((status) => {
    if (status) {
      store.dispatch(addBook(payload));
    }
  });
};

const removeBookFromApi = (payload) => {
  remove(payload).then((status) => {
    if (status) {
      store.dispatch(removeBook(payload));
    }
  });
};

const getListOfBooks = () => {
  get()
    .then((data) => store.dispatch(addListOfBooksFromApi(data)));
};

export {
  addBookToApi,
  getListOfBooks,
  removeBookFromApi,
};
