import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { registerAdmin } from '../utils/functions';
import { useNavigate } from 'react-router-dom';

export const AdminRegisterPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = await registerAdmin(name, email, phone, password);
    if (data.message === 'Admin added successfully!') {
      nav('/admin/login');
    }
  }

  return (
    <>
      <Container style={{ width: '25%', marginTop: '5rem' }}>
        <h1>Register Admin</h1>
        <Form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your Phone Number'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to='/admin/login' style={{ textDecoration: 'none' }}>
              <Form.Text>Login</Form.Text>
            </Link>
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
