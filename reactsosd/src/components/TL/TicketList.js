import React, { useContext } from 'react';
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './TL.css';
import { ShowContext } from '../../pages/HomePage';

export const TicketList = () => {
  const { ticket } = useContext(DataContext);
  const { show } = useContext(ShowContext);

  if (show === false) {
    return <div>Search for tickets now!</div>;
  } else {
    if (ticket) {
      return (
        <div className='listContainer'>
          <div className='listTiket'>
            {ticket.map((item) => {
              return (
                <ul className='listSearch2' key={item.key}>
                  <h1 className='kuota'>Tiket</h1>
                  <li className='lsTitle2'>
                    {item.asal} <AiOutlineArrowRight /> {item.tujuan}
                  </li>
                  <li className='tgl2'>Jadwal : {item.tanggal}</li>
                  <li className='jam'>
                    Waktu Keberangkatan : {item.waktu_berangkat}
                  </li>
                  <li className='jam'>Waktu Tiba : {item.waktu_tiba}</li>
                  <li className='harga'>Rp{item.harga},-</li>
                  <Link to={`/search-ticket/ticket-${item._id}`}>
                    <button className='btnOrder'>Pesan Tiket</button>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      );
    }
    return <div>No tickets found!</div>;
  }
};
