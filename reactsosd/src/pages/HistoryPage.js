import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { InvoiceList } from '../components/InvoiceList';
import Footer from '../components/Footer/Footer';

export const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <h1 style={{paddingTop:'100px', paddingLeft: '100px', fontSize:'45px'}}>History</h1>
      <InvoiceList />
      <Footer/>
    </>
  );
};
