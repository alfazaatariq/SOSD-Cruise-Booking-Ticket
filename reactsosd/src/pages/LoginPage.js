import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { DataContext } from '../App';
import { loginUser } from '../utils/functions';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import photo from '../assets/sunrise.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const LoginPage = () => {
  const nav = useNavigate();
  const { user, setUser } = useContext(DataContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = await loginUser(email, password);
    if (data.message === 'Login successful!') {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      nav('/');
    } else {
      alert('Your email/password is wrong!');
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='all'>
        <div className='imgDiv'>
          <img src={photo}></img>
        </div>
        <section
          data-aos='fade-up'
          onSubmit={(e) => onSubmitHandler(e)}
          class='container2'
        >
          <header>Login</header>
          <form action='#' class='form'>
            <div class='input-box'>
              <label>Email Address</label>
              <input
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class='input-box'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Link to='/register' style={{ textDecoration: 'none' }}>
                <Form.Text>Havent got an account? register here</Form.Text>
              </Link>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </section>
      </div>
    </>
  );
};
