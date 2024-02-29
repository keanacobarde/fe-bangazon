import React, { useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';

function Cart() {
  const { user } = useAuth();

  const getTheUser = () => {
    checkUser(user.uid).then(console.warn);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <div>cart</div>
  );
}

export default Cart;
