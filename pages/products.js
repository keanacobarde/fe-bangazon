import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Products/ProductCard';
import { getAllProducts } from '../utils/data/ProductData';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
    console.warn(products);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <div className="product-page">
      {products.map((product) => <ProductCard key={product.id} prodObj={product} />)}
    </div>
  );
}

export default ProductsPage;
