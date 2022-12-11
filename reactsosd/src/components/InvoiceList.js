import React, { useState, useEffect, useContext } from 'react';
import { getInvoiceByUserId } from '../utils/functions';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './invoicelist.css';
import { InvoiceContext } from '../pages/HistoryPage';

export const InvoiceList = () => {
  const { invoices, setInvoices } = useContext(InvoiceContext);

  if (invoices) {
    return (
      <div className='containerIL'>
        <div className='listIL'>
          {invoices.map((item) => {
            return (
              <Link
                className='btnIL'
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
                    {item.waktu_berangkat} <AiOutlineArrowRight />{' '}
                    {item.waktu_tiba}
                  </li>
                  <li className='namaIL'>Nama : {item.nama}</li>
                  <li className='jumlahIL'>
                    Jumlah Tiket : {item.jumlah_tiket}
                  </li>
                  <li className='hargaIL'>Total: Rp{item.total_harga}</li>
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
