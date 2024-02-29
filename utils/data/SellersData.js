const clientCredentials = 'https://localhost:7253';

const getAllSellers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data).filter((users) => users.isSeller));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default {
  getAllSellers,
};
