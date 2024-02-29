import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getUserCart } from '../utils/data/OrderData';
import ProductCard from '../components/Products/ProductCard';

function Cart() {
  const { user } = useAuth();

  const [userCart, setUserCart] = useState([]);

  const getTheUserCart = () => {
    getUserCart(user.uid).then(setUserCart);
  };

  useEffect(() => {
    getTheUserCart();
  }, []);

  return (
    <div className="product-page">
      {userCart[0]?.products?.map((product) => <ProductCard key={product.id} prodObj={product} context="cart" />)}
    </div>
  );
}

export default Cart;
