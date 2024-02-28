const clientCredentials = 'https://localhost:7253';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getProductById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const searchProducts = (searchValue) => new Promise((resolve, reject) => {
  getAllProducts().then((res) => {
    const searchResults = res.filter((prod) => prod.title.toLowerCase().includes(searchValue));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getAllProducts,
  getProductById,
  searchProducts,
};
