import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import { getInvoiceByUserId, getOrderStatus } from '../utils/functions';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './invoicelist.css';

export const InvoiceList = () => {
  const [invoices, setInvoices] = useState('');

  useEffect(() => {
    async function fetchInvoices() {
      const { user_id } = JSON.parse(localStorage.getItem('user'));
      const data = await getInvoiceByUserId(user_id);
      console.log(data);
      setInvoices(data);
    }
    fetchInvoices();
  }, []);

  if (invoices) {
    return (
      <div className='containerIL'>
        <div className='listIL'>
        {invoices.map((item) => {
          return (
            <Link className='btnIL'
              to={`/invoicedetail-${item.order_id}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ul className='listIL2' key={item.key}>
                <h1 className='titleIL'>Invoice</h1>
                <li className='lsTitle2IL'>
                    {item.asal} <AiOutlineArrowRight /> {item.tujuan}
                </li>
                <li className='tglIL'>{item.tanggal}</li>
                <li className='jamIL'>
                  {item.waktu_berangkat} <AiOutlineArrowRight />  {item.waktu_tiba}
                </li>
                <li className='namaIL'>Nama : {item.nama}</li>
                <li className='jumlahIL'>Jumlah Tiket : {item.jumlah_tiket}</li>
                <li className='hargaIL'>Total: Rp{item.total_harga}</li>
              </ul>
            </Link>
          );
        })}
        </div>    
      </div>
    );
  }
  return <div>No History!</div>;
};
