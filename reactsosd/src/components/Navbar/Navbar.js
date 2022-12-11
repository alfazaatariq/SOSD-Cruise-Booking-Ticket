import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './navbar.css'
import {FaShip} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { DataContext } from '../../App';

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  // Function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  // Function to close navBar
  const removeNavbar = () => {
    setActive('navBar')
  }

  const [user, setUser] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const userData = await JSON.parse(localStorage.getItem('user'));
      if (!userData) {
        nav('/login');
      }
      setUser(userData);
    }
    fetchUser();
  }, []);

  const mystyle = {
    background: "var(--gradientColor)",
    borderRadius: "3rem",
    padding: "0.1rem 1rem",
    color: "white",
    marginLeft: "100%",
    border: "1px solid rgba(0,0,0,0.35)",
    fontSize: "13px",
    border:"none"
  }


  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><FaShip className="icon"/>BookingShip</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to='/' className="navLink">Home</Link>
            </li>
            <li className="navItem">
              <Link to='/about' className="navLink">About Us</Link>
            </li>
            <li className="navItem">
              <Link to='/history' className="navLink">History</Link>
            </li>

            <Dropdown className='dropdown'>
            <Dropdown.Toggle 
              style={{color:'white'}}
              variant='success' 
              id='dropdown-basic'>
              Signed as : {user.email}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                  style={mystyle}           
                  href='/login'
                  onClick={() => localStorage.removeItem('user')}>
                    Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </ul>

          <div onClick={removeNavbar} 
          className='closeNavbar'>
            <AiFillCloseCircle className="icon"/>
          </div>
          
        </div>

        <div onClick={showNav}
        className='toggleNavbar'>
            <TbGridDots className="icon"/>
         </div>
      </header>
    </section>
  );
};
 
export default Navbar
