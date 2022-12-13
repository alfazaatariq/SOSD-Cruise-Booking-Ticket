import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../utils/functions';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/sunrise.jpg';
import './register.css';
import 'aos/dist/aos.css';

export const RegisterPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = await registerUser(name, email, phone, password);
    if (data.message === 'Customer added successfully!') {
      nav('/login');
    }
  }

  return (
    <>
      <div className='all'>
        <div className='imgDiv'>
          <img src={photo}></img>
        </div>

        <section onSubmit={(e) => onSubmitHandler(e)} class='container2'>
          <header>Register</header>
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
              <label>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div class='input-box'>
              <label>Phone Number</label>
              <input
                type='text'
                placeholder='Enter your phone number'
                onChange={(e) => setPhone(e.target.value)}
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

              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Form.Text>Already got an account? login here</Form.Text>
              </Link>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </section>
      </div>
    </>
  );
};
