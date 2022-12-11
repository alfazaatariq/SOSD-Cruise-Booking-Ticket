import React from 'react';
import { CgSmileSad } from 'react-icons/cg';
import './error.css';

export const ErrorPage = () => {
  return (
    <>
    <div className='containerEP'>
    <div>
        <CgSmileSad size={70} />
      </div>
      <p>Page yang kamu cari tidak ditemukan!</p>
    </div>
      
    </>
  );
};
