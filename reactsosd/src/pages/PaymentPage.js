import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAddInvoice, orderTicket } from '../utils/functions';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './payment.css';
import img3 from '../assets/logo.png';
import img4 from '../assets/CS.png';
import { FaMoneyBillWave } from 'react-icons/fa';

const PaymentPage = () => {
  const [detailTicket, setDetailTicket] = useState('');
  const nav = useNavigate();
  const [bank, setBank] = useState('');

  useEffect(() => {
    function fetchData() {
      const data = JSON.parse(sessionStorage.getItem('detailTicket'));
      setDetailTicket(data);
    }
    fetchData();
  }, []);

  async function addInvoiceHandler(data) {
    await userAddInvoice(data);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    let data = await orderTicket(
      bank,
      detailTicket._id,
      detailTicket.total_harga,
      detailTicket.name
    );
    const userData = {
      ...detailTicket,
      order_id: data._id,
    };
    setDetailTicket(userData);
    sessionStorage.setItem('order', JSON.stringify(userData));
    sessionStorage.removeItem('detailTicket');
    addInvoiceHandler(userData);
    alert('Silahkan melakukan pembayaran anda');
    nav(`/invoicedetail-${data._id}`);
  }

  return (
    <>
      <Navbar />
      <section className='formPage'>
        <div class='container3'>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div class='card-container'>
              <div class='left'>
                <div class='left-container'>
                  <FaMoneyBillWave className='icon' />
                  <h2>Pilih Bank :</h2>
                  <div className='opsi'>
                    <label htmlFor='permata'>
                      <img src={img3} style={{ width: '250px' }}></img>
                    </label>

                    <input
                      className='radioBtn'
                      type='radio'
                      name='permata'
                      id='permata'
                      value='permata'
                      onChange={(e) => setBank(e.target.value)}
                      required
                    />
                  </div>
                  <div className='opsi'>
                    <img className='img4' src={img4}></img>
                    <input className='radioBtn2' type='radio' disabled />
                  </div>
                  <div className='opsi'>
                    <img className='img5' src={img4}></img>
                    <input className='radioBtn3' type='radio' disabled />
                  </div>
                  <div className='opsi'>
                    <img className='img6' src={img4}></img>
                    <input className='radioBtn4' type='radio' disabled />
                  </div>
                </div>
              </div>

              <div class='right'>
                <div class='right-container'>
                  <h2 class='lg-view'>Total jumlah pembayaran :</h2>
                  <h2 class='sm-view'>Total jumlah pembayaran :</h2>
                  <h2 class='lg-view'>Rp{detailTicket.total_harga}</h2>
                  <h2 class='sm-view'>Rp{detailTicket.total_harga}</h2>

                  <input className='btnPP' type='submit' value='Bayar' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentPage;
