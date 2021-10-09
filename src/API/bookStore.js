const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'IP40h07PzeOC8Xvl8zYT';
const endPoint = `${baseURL}/${appId}/books`

const get = async () => {
  await fetch(endPoint).then(response => response.json()).then(books => {
    return books;
  });
};

const add = async (book) => {
  await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title:book.title,
      category:'default',
    })
  })
};

const Remove = async (id) => {
  await fetch(`${endPoint}/${id}`, {
    method: 'DELETE',
  })
}