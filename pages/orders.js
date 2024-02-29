import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../utils/data/OrderData';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getAllTheOrders = () => {
    getAllOrders().then(setOrders);
  };

  useEffect(() => {
    getAllTheOrders();
  }, []);

  console.warn(orders);

  return (
    <div>orders</div>
  );
}

export default Orders;
