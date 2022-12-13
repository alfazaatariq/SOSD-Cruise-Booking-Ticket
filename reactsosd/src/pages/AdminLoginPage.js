import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate, Link } from 'react-router-dom';
import { loginAdmin } from '../utils/functions';

export const AdminLoginPage = () => {
  const nav = useNavigate();
  const [admin, setAdmin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = await loginAdmin(email, password);
    if (data.message === 'Login successful!') {
      localStorage.setItem('admin', JSON.stringify(data));
      setAdmin(data);
      nav('/admin');
    } else {
      alert('Your email/password is wrong!');
    }
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Container>
          <h1>Login Admin</h1>
          <Form onSubmit={(e) => onSubmitHandler(e)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
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
              <Link to='/admin/register' style={{ textDecoration: 'none' }}>
                <Form.Text>Register</Form.Text>
              </Link>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};
