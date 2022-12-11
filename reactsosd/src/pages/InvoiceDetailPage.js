import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {
  getInvoiceByOrderId,
  getInvoiceByUserId,
  getOrderStatus,
} from '../utils/functions';
import { useParams } from 'react-router-dom';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { PDFFile } from '../components/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './invoice.css'
import Footer from '../components/Footer/Footer';

export const InvoiceDetailPage = () => {
  const [invoice, setInvoice] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchInvoices() {
      const data = await getInvoiceByOrderId(id);
      setInvoice(data);
      const transaction_status = await getOrderStatus(id);
      setStatus(transaction_status);
    }
    fetchInvoices();
  }, []);

  if (invoice) {
    return (
      <>
        <Navbar />
        <div className='containerIDP'>
        <div className='textIDP'>
          <h1 className='h1IDP'>INVOICE DETAIL</h1>
          <h1 className='h1IDP2'>VA Number : {status.permata_va_number}</h1>
        </div>
        

        <table className='tableIDP'>
          <tr className='trIDP' id="header">
              <th className='thIDP'>Order_id</th>
              <th className='thIDP'>User_id</th>
              <th className='thIDP'>Asal</th>
              <th className='thIDP'>Tujuan</th>
              <th className='thIDP'>Tanggal</th>
              <th className='thIDP'>Berangkat</th>
              <th className='thIDP'>Tiba</th>
              <th className='thIDP'>Nama</th>
              <th className='thIDP'>No.HP</th>
              <th className='thIDP'>Alamat</th>
              <th className='thIDP'>Harga</th>
              <th className='thIDP'>Jumlah Tiket</th>
              <th className='thIDP'>Total Harga</th>
              <th className='thIDP'>Action</th>
              <th className='thIDP'>Status</th>
          </tr>
          <tr className='trIDP'>
              <td className='tdIDP'>{invoice[0].order_id}</td>
              <td className='tdIDP'>{invoice[0].user_id}</td>
              <td className='tdIDP'>{invoice[0].asal}</td>
              <td className='tdIDP'>{invoice[0].tujuan}</td>
              <td className='tdIDP'>{invoice[0].tanggal}</td>
              <td className='tdIDP'>{invoice[0].waktu_berangkat}</td>
              <td className='tdIDP'>{invoice[0].waktu_tiba}</td>
              <td className='tdIDP'>{invoice[0].nama}</td>
              <td className='tdIDP'>{invoice[0].no}</td>
              <td className='tdIDP'>{invoice[0].alamat} </td>
              <td className='tdIDP'>Rp{invoice[0].harga} </td>
              <td className='tdIDP'>{invoice[0].jumlah_tiket}</td>
              <td className='tdIDP'>{invoice[0].total_harga} </td>
              <td className='tdIDP'>
                <PDFDownloadLink
          document={<PDFFile invoice={invoice} />}
          fileName={`Tiket-${invoice[0].order_id}`}
        >
          {({ loading }) =>
            loading ? <button>Loading...</button> : <button className='btnIDP'>Download</button>
          }
        </PDFDownloadLink></td>
              <td className='tdIDP'> <h3>
          {status.transaction_status}{' '}
          <RiCheckboxBlankCircleFill
            color={
              status.transaction_status === 'pending'
                ? 'grey'
                : status.transaction_status === 'settlement'
                ? 'green'
                : 'red'
            }
          />
        </h3> </td>
          </tr>
        </table>
        </div>
        <Footer/>
        
      </>
    );
  }
  return <h1>LOADING</h1>;
};
