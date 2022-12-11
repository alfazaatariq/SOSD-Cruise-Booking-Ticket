import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { getTicketsByForm, getTujuan, getAsal } from '../../utils/functions';
import { useSearchParams } from 'react-router-dom';
import { DataContext } from '../../App';
import { MdDirectionsBoatFilled } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import { MdOutlineDateRange } from 'react-icons/md';
import './ST.css';
import { ShowContext } from '../../pages/HomePage';

const SearchTicket = () => {
  const { setTicket } = useContext(DataContext);
  const { setShow } = useContext(ShowContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [asal, setAsal] = useState([]);
  const [tujuan, setTujuan] = useState([]);
  const [selectedAsal, setSelectedAsal] = useState('');
  const [selectedTujuan, setSelectedTujuan] = useState('');
  const [tanggal, setTanggal] = useState('');

  useEffect(() => {
    async function fetchData() {
      setAsal(await getAsal());
      if (!selectedAsal && !selectedTujuan && !tanggal) {
        const dataJSON = await getTicketsByForm(
          searchParams.get('asal'),
          searchParams.get('tujuan'),
          searchParams.get('tanggal')
        );
        setTicket(dataJSON);
      }
    }
    fetchData();
  }, []);

  async function onClickHandler() {
    const dataJSON = await getTicketsByForm(asal, selectedTujuan, tanggal);
    setTicket(dataJSON);
    setShow(true);
  }

  return (
    <div className='cardDiv grid'>
      <form
        className='forms'
        action='#'
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler();
        }}
      >
        <div className='fromInput'>
          <label htmlFor='city'>Pilih Pelabuhan Awal:</label>
          <div className='input flex'>
            <select
              onChange={async (e) => {
                setTujuan(await getTujuan(e.target.value));
                let dropDown = document.getElementById('tujuan');
                dropDown.selectedIndex = 0;
                setSelectedTujuan('');
                setSelectedAsal(e.target.value);
                setSearchParams({ asal: e.target.value });
              }}
              required
            >
              <option value=''>Select here...</option>

              {asal.map((item) => {
                return (
                  <option key={item.key} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <MdDirectionsBoatFilled className='icon' />
          </div>
        </div>

        <div className='destinationInput'>
          <label htmlFor='city'>Pilih Pelabuhan Tujuan:</label>
          <div className='input flex'>
            <select
              id='tujuan'
              onChange={(e) => {
                setSelectedTujuan(e.target.value);
                setSearchParams({
                  asal: searchParams.get('asal'),
                  tujuan: e.target.value,
                });
              }}
              required
            >
              <option value=''>Select here...</option>
              {tujuan.map((item) => {
                return (
                  <option key={item.key} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <MdLocationPin className='icon' />
          </div>
        </div>

        <div className='deteInput'>
          <label htmlFor='city'>Pilih Tanggal Berangkat:</label>
          <div className='input flex'>
            <input
              type='date'
              onChange={(e) => {
                setTanggal(e.target.value);
                setSearchParams({
                  asal: searchParams.get('asal'),
                  tujuan: searchParams.get('tujuan'),
                  tanggal: e.target.value,
                });
              }}
              required
            />
            <MdOutlineDateRange className='icon' />
          </div>
        </div>

        <button className='btnSearch' type='submit'>
          Cari Tiket
        </button>
      </form>
    </div>
  );
};

export default SearchTicket;
