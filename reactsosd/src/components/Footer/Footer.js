import React from 'react'
import './footer.css'
import video2 from '../../assets/Sea.mp4'
import {FiSend} from 'react-icons/fi'
import { MdOutlineTravelExplore} from "react-icons/md";
import {AiOutlineTwitter,AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi"
const Footer = () => {
    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={video2} loop autoPlay muted 
                type="video/mp4"></video>
            </div>

            <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input type="text" placeholder='Enter Email Address'/>
                        <button className='btn flex' type='submit'>
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>
            
                <div className='footerCard flex'>
                    <div className='footerIntro flex'>
                        <div className='logoDiv'>
                            <a href='#' className='logo flex'>
                                <MdOutlineTravelExplore 
                                className="icon"/> Travel.
                            </a>
                        </div>

                        <div className='footerParagraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>

                        <div className='footerSocials flex'>
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                        </div>
                    </div> 

                    
                    <div className='footerLinks grid'>
                        {/* GROUP 1 */}
                        <div className='linkGroup'>
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Service
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Insurance
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Agency
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Tourism
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Payment
                            </li>
                        </div>
                        
                        {/* GROUP 2 */}
                        <div className='linkGroup'>
                            <span className='groupTitle'>
                                PARTNERS
                            </span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Booking
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Rentcars
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Hotel
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> UPNVJ
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> FIK
                            </li>
                        </div>
                        
                        {/* GROUP 3 */}
                        <div className='linkGroup'>
                            <span className='groupTitle'>
                                LAST MINUTES
                            </span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Jakarta
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Bandung
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Depok
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Tangerang
                            </li>
                            <li className='footerList flex'>
                                <FiChevronRight className="icon"/> Bekasi
                            </li>
                        </div>
                    </div>

                    <div className='footerDiv flex'>
                        <small>BEST BOOKINGSHIP WEB</small>
                        <small>COPYRIGHT RESERVED - SKUY 2022</small>
                    </div>
                                
                </div>     
            </div>
        </section>

        
    )
}

export default Footer