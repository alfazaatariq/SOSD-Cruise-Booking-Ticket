import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicketById } from '../utils/functions';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './formpage.css';
import {IoTicketOutline} from 'react-icons/io5'
import {AiOutlineArrowRight} from 'react-icons/ai'


const FormPage = () => {
  const [detailTicket, setDetailTicket] = useState('');
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [no, setNo] = useState('');
  const [address, setAddress] = useState('');
  const [jumlah, setJumlah] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const dataJSON = await getTicketById(id);
      setDetailTicket(dataJSON);
    }
    fetchData();
  }, []);

  function onSubmitHandler(e) {
    e.preventDefault();

    const userData = {
      ...detailTicket,
      nama: name,
      no: no,
      alamat: address,
      jumlah_tiket: parseInt(jumlah),
      total_harga: parseInt(jumlah) * detailTicket.harga,
      user_id: JSON.parse(localStorage.getItem('user')).user_id,
    };
    setDetailTicket(userData);
    sessionStorage.setItem('detailTicket', JSON.stringify(userData));
    nav(`/search-ticket/ticket/payment-${id}`);
  }

  if (detailTicket) {
    return (
      <>
      <Navbar/>
        <section className='formPage'>
          <div class="container3">

            <div class="card-container">
              <div class="left">
                <div class="left-container">
                  <IoTicketOutline className='icon'/>
                  <h2>Detail Tiket</h2>
                  <p>ID : {detailTicket._id}</p>
                  <p className='dest'>{detailTicket.tanggal}</p>
                  <p className='dest'>{detailTicket.asal} <AiOutlineArrowRight/> {detailTicket.tujuan}
                  </p>
                  <p className='dest'>{detailTicket.waktu_berangkat} <AiOutlineArrowRight/> {detailTicket.waktu_tiba}</p>
                  <p className='rp'>Rp {detailTicket.harga}</p>
                </div>
              </div>

              <div class="rightFP">
                <div class="right-containerFP">
                  <form onSubmit={(e) => onSubmitHandler(e)}>
                    <h2 class="lg-view">Form Passenger</h2>
                    <h2 class="sm-view">Form Passenger</h2>
                    <input 
                    type='number'
                    id='jumlah'
                    min='1'
                    placeholder='Masukkan Jumlah Tiket'
                    onChange={(e) => setJumlah(e.target.value)}
                    />
                    <input 
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Masukkan Nama'
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required/>
                    <input 
                    type='text'
                    name='no'
                    id='no'
                    placeholder='Masukkan Nomor Telp'
                    onChange={(e) => setNo(e.target.value)}
                    required/>
                    <input 
                    type='text'
                    name='address'
                    id='address'
                    placeholder='Masukkan Alamat'
                    onChange={(e) => setAddress(e.target.value)}
                    required/>
                    <button className='btnFP'
                    type='submit'>Konfirmasi</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>
        <Footer/>
      </>
    );
  }
};

export default FormPage;
