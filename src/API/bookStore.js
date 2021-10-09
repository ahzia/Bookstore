const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'IP40h07PzeOC8Xvl8zYT';
const endPoint = `${baseURL}/apps/${appId}/books`

const get = async () => {
  let result =[]
  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    });
  return result;
};

const add = async (book) => {
  const newBook = {
    item_id: book.id,
    title:book.title,
    category:book.author
  };

  await fetch(endPoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBook)
  }).then((response) => {
    if (response.status === 201){
      return true;
    }
    return false;
  });
};

const remove = async (id) => {
  await fetch(`${endPoint}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id })
  }).then((response) => response.text()).then((data) => {
    if (data === 'The book was deleted successfully!'){
      return true;
    }
    return false;
  });
}

export {get, add, remove}