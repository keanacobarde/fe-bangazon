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

const addProductToCart = (ordId, prodId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/orders/addProduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        orderId: ordId,
        productId: prodId,
      },
    ),
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

const deleteProductFromCart = (ordId, prodId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/orders/${ordId}/products/${prodId}`, {
    method: 'DELETE',
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

export {
  getAllProducts,
  getProductById,
  searchProducts,
  deleteProductFromCart,
  addProductToCart,
};
