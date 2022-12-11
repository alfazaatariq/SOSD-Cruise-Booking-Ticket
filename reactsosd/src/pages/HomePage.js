import React, { createContext, useEffect, useState } from 'react';
import './home.css';
import Navbar from '../components/Navbar/Navbar';
import { TicketList } from '../components/TL/TicketList';
import SearchTicket from '../components/ST/SearchTicket';
import video from '../assets/video.mp4';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ShowContext = createContext();

const HomePage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      <div>
        <Navbar />
        <section className='home'>
          <div className='overlay'></div>
          <video src={video} muted autoPlay loop type='video/mp4'></video>

          <div className='homeContent container'>
            <div className='textDiv'>
              <span data-aos='fade-up' className='smallText'>
                Our Packages
              </span>

              <h1 data-aos='fade-up' className='homeTitle'>
                Search your Holiday
              </h1>
            </div>

            <div data-aos='fade-up'>
              <SearchTicket />
            </div>

            <div className='homeFooterIcons flex'>
              <div className='rightIcons'>
                <AiOutlineFacebook className='icon' />
                <AiOutlineInstagram className='icon' />
                <AiOutlineTwitter className='icon' />
              </div>

              <div className='leftIcons'>
                <BsListTask className='icon' />
                <TbApps className='icon' />
              </div>
            </div>
          </div>
        </section>

        <section className='resultSearch'>
          <div className='result'>
            <TicketList />
          </div>
        </section>
      </div>
    </ShowContext.Provider>
  );
};

export default HomePage;
