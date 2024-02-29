import React, { useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getUserCart } from '../utils/data/OrderData';

function Cart() {
  const { user } = useAuth();

  const getTheUserCart = () => {
    getUserCart(user.uid).then(console.warn);
  };

  useEffect(() => {
    getTheUserCart();
  }, []);

  return (
    <div>cart</div>
  );
}

export default Cart;
