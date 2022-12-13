import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {
  addNewTicket,
  deleteTicketById,
  getAllTicket,
  updateTicketById,
} from '../utils/functions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const AdminTicketList = () => {
  const [tickets, setTickets] = useState('');
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState('');
  const [id, setId] = useState('');
  const [asal, setAsal] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktuBerangkat, setwaktuBerangkat] = useState('');
  const [waktuTiba, setwaktuTiba] = useState('');
  const [harga, setHarga] = useState('');

  useEffect(() => {
    fetchTicket();
  }, []);

  async function fetchTicket() {
    const dataTickets = await getAllTicket();
    setTickets(dataTickets);
  }

  const handleClose = () => {
    setDetail('');
    setShow(false);
  };
  const handleShow = (item) => {
    if (item.type === 'click') {
      setDetail('');
    } else {
      setDetail(item);
    }
    setId(item._id);
    setAsal(item.asal);
    setTujuan(item.tujuan);
    setTanggal(item.tanggal);
    setwaktuBerangkat(item.waktu_berangkat);
    setwaktuTiba(item.waktu_tiba);
    setHarga(item.harga);
    setShow(true);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (detail === '') {
      const data = await addNewTicket(
        asal,
        tujuan,
        tanggal,
        waktuBerangkat,
        waktuTiba,
        harga
      );
      if (data.message === 'Ticket added successfully!') {
        alert('Ticket added successfully!');
        handleClose();
        fetchTicket();
      }
    } else {
      const data = await updateTicketById(
        id,
        asal,
        tujuan,
        tanggal,
        waktuBerangkat,
        waktuTiba,
        harga
      );
      if (data.message === 'Ticket updated successfully!') {
        alert('Ticket updated successfully!');
        handleClose();
        fetchTicket();
      }
    }
  }

  async function onDeleteHandler(id) {
    const data = await deleteTicketById(id);
    if (data.message === 'Ticket deleted successfully!') {
      alert('Ticket deleted successfully!');
      handleClose();
      fetchTicket();
    }
  }

  if (tickets) {
    return (
      <>
        <Button variant='secondary' onClick={handleShow}>
          Add new ticket
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{detail === '' ? 'Add' : 'Edit'} Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => onSubmitHandler(e)} autoComplete='off'>
              {detail === '' ? (
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Asal</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={detail.asal}
                    onChange={(e) => setAsal(e.target.value)}
                    required
                  />
                </Form.Group>
              ) : (
                <>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                      type='text'
                      defaultValue={detail._id}
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Asal</Form.Label>
                    <Form.Control
                      type='text'
                      defaultValue={detail.asal}
                      onChange={(e) => setAsal(e.target.value)}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Tujuan</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={detail.tujuan}
                  onChange={(e) => setTujuan(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control
                  type='date'
                  defaultValue={detail.tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Waktu_berangkat</Form.Label>
                <Form.Control
                  type='time'
                  defaultValue={detail.waktu_berangkat}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setwaktuBerangkat(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>waktu_tiba</Form.Label>
                <Form.Control
                  type='time'
                  defaultValue={detail.waktu_tiba}
                  onChange={(e) => setwaktuTiba(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>harga</Form.Label>
                <Form.Control
                  type='number'
                  defaultValue={detail.harga}
                  onChange={(e) => setHarga(e.target.value)}
                  min='1'
                  required
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Asal</th>
              <th>tujuan</th>
              <th>tanggal</th>
              <th>waktu_berangkat</th>
              <th>waktu_tiba</th>
              <th>harga</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.asal}</td>
                  <td>{item.tujuan}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.waktu_berangkat}</td>
                  <td>{item.waktu_tiba}</td>
                  <td>{item.harga}</td>
                  <td>
                    <ButtonGroup aria-label='Basic example'>
                      <Button
                        variant='primary'
                        onClick={() => handleShow(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='danger'
                        onClick={() => onDeleteHandler(item._id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
  return <h1>LOADING</h1>;
};
