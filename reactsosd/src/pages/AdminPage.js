import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AdminTicketList } from '../components/AdminTicketList';
import { AdminInvoiceList } from '../components/AdminInvoiceList';
import { Col, Container, Row, Table } from 'react-bootstrap';
import ship from '../img/kapal.jpg';

export const AdminPage = () => {
  const [admin, setAdmin] = useState('');
  const [select, setSelect] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const adminData = await JSON.parse(localStorage.getItem('admin'));
      if (!adminData) {
        nav('/admin/login');
      }
      setAdmin(adminData);
    }
    fetchUser();
  }, []);

  return (
    <>
      {/* <Navbar2>

      </Navbar2> */}
      {/* <Navbar2/> */}

      <div
        style={{
          backgroundImage: `url(${ship})`,
          height: '1000px',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <Row>
            <h1 className='mt-3'>Ticket</h1>
          </Row>

          <Row className='mt-3'>
            <Col className='col-md-2'>
              <Button
                style={{ marginRight: 10 }}
                variant='secondary'
                onClick={() => setSelect('ticket')}
              >
                Ticket
              </Button>
              <Button variant='secondary' onClick={() => setSelect('invoice')}>
                Invoice
              </Button>
              <Button
                href='/admin/login'
                style={{ marginTop: 10 }}
                onClick={() => {
                  localStorage.removeItem('admin');
                }}
              >
                LOGOUT
              </Button>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col xs={3}>
              <div class='input-group mb-3'></div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col className='col-md-8'>
              <Table>
                {select === 'ticket' ? (
                  <AdminTicketList />
                ) : select === 'invoice' ? (
                  <AdminInvoiceList />
                ) : (
                  <div>WELCOME TO ADMIN PAGE</div>
                )}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
