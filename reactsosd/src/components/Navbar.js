import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../App';

export const Navbar = () => {
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

  return (
    <>
      <div className='navbar'>
        <ul>
          <li>Ini navbar</li>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <li>Home</li>
          </Link>
          <li>Profile</li>
          <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
            <li>About</li>
          </Link>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Signed as : {user.email}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='/history'>History</Dropdown.Item>
              <Dropdown.Item
                href='/login'
                onClick={() => localStorage.removeItem('user')}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </>
  );
};
