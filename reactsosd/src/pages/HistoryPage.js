import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { InvoiceList } from '../components/InvoiceList';
import Footer from '../components/Footer/Footer';
import { getInvoiceByUserId } from '../utils/functions';
import LoadingIcons from 'react-loading-icons';

export const InvoiceContext = createContext();

export const HistoryPage = () => {
  const [invoices, setInvoices] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchInvoices() {
      setLoading(true);
      const { user_id } = JSON.parse(localStorage.getItem('user'));
      const data = await getInvoiceByUserId(user_id);
      console.log(data);
      setInvoices(data);
      setLoading(false);
    }
    fetchInvoices();
  }, []);

  if (loading === true) {
    return (
      <>
        <div
          style={{
            marginTop: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingIcons.SpinningCircles stroke='#000000' speed={1} />
        </div>
      </>
    );
  } else if (invoices.length > 0) {
    return (
      <>
        <Navbar />
        <h1
          style={{
            paddingTop: '100px',
            paddingLeft: '100px',
            fontSize: '45px',
          }}
        >
          History
        </h1>
        <InvoiceContext.Provider value={{ invoices, setInvoices }}>
          <InvoiceList />
        </InvoiceContext.Provider>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <h1
        style={{
          paddingTop: '100px',
          paddingLeft: '100px',
          fontSize: '45px',
        }}
      >
        History
      </h1>
      <h1
        style={{
          paddingTop: '100px',
          paddingLeft: '100px',
          fontSize: '45px',
        }}
      >
        No History !
      </h1>
      <Footer />
    </>
  );
};
