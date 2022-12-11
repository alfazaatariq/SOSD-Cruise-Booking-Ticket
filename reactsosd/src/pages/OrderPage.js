import React from 'react';
import { useEffect } from 'react';
import { getOrderStatus } from '../utils/functions';
import { useState } from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { Navbar } from '../components/Navbar';

export const OrderPage = () => {
  const [order, setOrder] = useState('');

  useEffect(() => {
    async function getStatus() {
      const { order_id } = JSON.parse(sessionStorage.getItem('order'));
      const data = await getOrderStatus(order_id);
      setOrder(data);
    }
    getStatus();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Order Page</h1>
      <div>
        <h2>
          Status Transaksi : {order.transaction_status}{' '}
          <RiCheckboxBlankCircleFill
            color={
              order.transaction_status === 'pending'
                ? 'grey'
                : order.transaction_status === 'settlement'
                ? 'green'
                : 'red'
            }
          />{' '}
        </h2>
        <h2>Order ID : {order.order_id}</h2>
        <h2>Transaksi : {order.transaction_time}</h2>
        <h2>Total : {order.gross_amount}</h2>
        <h2>Tipe Pembayaran : {order.payment_type}</h2>
        <h2>Nomor VA Bank : {order.permata_va_number}</h2>
      </div>
    </>
  );
};
