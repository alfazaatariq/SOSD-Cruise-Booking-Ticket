import React, { useEffect } from 'react';
import img from '../assets/sunrise.jpg';
import img1 from '../assets/hands.jpg';
import './about.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './about.css';
export const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <div data-aos='fade-up' className='one'>
        <div class='sectionAP'>
          <div class='containerAP'>
            <div class='content-section'>
              <div class='title'>
                <h1>About Us</h1>
              </div>
              <div class='content'>
                <h3>
                  Website ini merupakan website pemesanan tiket kapal laut yang
                  dibangun mulai dari BackEnd hingga FrontEnd baik sisi User
                  maupun Admin dengan menggunakan berbagai bahasa pemograman
                  maupun framework seperti ReactJS, NodeJS, MongoDB,
                  BoostrapReact, Midtrans, dll
                </h3>
                <h3>
                  Projek ini dibangun dengan maksud memenuhi penilaian Ujian
                  Akhir Semester 5 pada Mata kuliah Service Oriented Software
                  Development yang diampu oleh bapak Ahmad Irfani, S.Kom., M.Si.
                  Dengan anggota kelompok sebagai berikut:
                </h3>
              </div>
            </div>
            <div class='image-section'>
              <img src={img1}></img>
            </div>
          </div>
        </div>
      </div>

      <div data-aos='fade-up' className='two'>
        <div class='card'>
          <div class='card-image'>
            <img src={img} alt='Profile Image'></img>
          </div>
          <p class='name'>Muhammad Fauzan Mufti Dhana</p>
          <p>2010511063</p>
          <p>
            Saya berperan langsung dalam mengembangkan website ini dibagian
            Back-End Admin maupun User
          </p>
          <div class='socials'>
            <button class='github'>
              <FaInstagram className='iconAP' />
            </button>
            <button class='twitter'>
              <FaTwitter className='iconAP' />
            </button>
          </div>
        </div>

        <div class='card'>
          <div class='card-image'>
            <img src={img} alt='Profile Image'></img>
          </div>
          <p class='name'>Muhamad Al Faza Atariq</p>
          <p>2010511078</p>
          <p>
            Saya berperan langsung dalam mengembangkan website ini dibagian
            Back-End Admin maupun User
          </p>
          <div class='socials'>
            <button class='github'>
              <FaInstagram className='iconAP' />
            </button>
            <button class='twitter'>
              <FaTwitter className='iconAP' />
            </button>
          </div>
        </div>

        <div class='card'>
          <div class='card-image'>
            <img src={img} alt='Profile Image'></img>
          </div>
          <p class='name'>Fernanda Andyka Putra</p>
          <p>2010511089</p>
          <p>
            Saya berperan langsung dalam mengembangkan website ini dibagian
            Front-End User
          </p>
          <div class='socials'>
            <button class='github'>
              <FaInstagram className='iconAP' />
            </button>
            <button class='twitter'>
              <FaTwitter className='iconAP' />
            </button>
          </div>
        </div>

        <div class='card'>
          <div class='card-image'>
            <img src={img} alt='Profile Image'></img>
          </div>
          <p class='name'>Muhammad Shidqi Wirawan</p>
          <p>2010511</p>
          <div class='socials'>
            <button class='github'>
              <FaInstagram className='iconAP' />
            </button>
            <button class='twitter'>
              <FaTwitter className='iconAP' />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
