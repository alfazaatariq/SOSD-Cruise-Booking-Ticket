import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {
  getAllInvoice,
  deleteInvoiceById,
  updateInvoiceById,
  adminAddInvoice,
} from '../utils/functions';

export const AdminInvoiceList = () => {
  const [invoices, setInvoices] = useState('');
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState('');
  const [id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [asal, setAsal] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktuBerangkat, setwaktuBerangkat] = useState('');
  const [waktuTiba, setwaktuTiba] = useState('');
  const [harga, setHarga] = useState('');
  const [nama, setNama] = useState('');
  const [no, setNo] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jumlahTiket, setJumlahTiket] = useState('');
  const [totalHarga, setTotalHarga] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    fetchInvoices();
  }, []);

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
    setUserId(item.user_id);
    setAsal(item.asal);
    setTujuan(item.tujuan);
    setTanggal(item.tanggal);
    setwaktuBerangkat(item.waktu_berangkat);
    setwaktuTiba(item.waktu_tiba);
    setHarga(item.harga);
    setNama(item.nama);
    setNo(item.no);
    setAlamat(item.alamat);
    setJumlahTiket(item.jumlah_tiket);
    setTotalHarga(item.total_harga);
    setOrderId(item.order_id);
    setShow(true);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (detail === '') {
      const data = await adminAddInvoice(
        userId,
        asal,
        tujuan,
        tanggal,
        waktuBerangkat,
        waktuTiba,
        harga,
        nama,
        no,
        alamat,
        jumlahTiket,
        totalHarga,
        orderId
      );
      console.log(data);
      if (data.message === 'Invoice added successfully!') {
        alert('Invoice added successfully!');
        handleClose();
        fetchInvoices();
      }
    } else {
      const data = await updateInvoiceById(
        id,
        userId,
        asal,
        tujuan,
        tanggal,
        waktuBerangkat,
        waktuTiba,
        harga,
        nama,
        no,
        alamat,
        jumlahTiket,
        totalHarga,
        orderId
      );
      if (data.message === 'Invoice updated successfully!') {
        alert('Invoice updated successfully!');
        handleClose();
        fetchInvoices();
      }
    }
  }

  async function onDeleteHandler(id) {
    const data = await deleteInvoiceById(id);
    if (data.message === 'Invoice deleted successfully!') {
      alert('Invoice deleted successfully!');
      handleClose();
      fetchInvoices();
    }
  }

  async function fetchInvoices() {
    const dataInvoices = await getAllInvoice();
    setInvoices(dataInvoices);
  }

  if (invoices) {
    return (
      <>
        <Button variant='secondary' onClick={handleShow}>
          Add new invoice
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{detail === '' ? 'Add' : 'Edit'} Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => onSubmitHandler(e)} autoComplete='off'>
              {detail === '' ? (
                <>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                      type='text'
                      defaultValue={detail.user_id}
                      onChange={(e) => setUserId(e.target.value)}
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
              ) : (
                <>
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
                  onChange={(e) => setwaktuBerangkat(e.target.value)}
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
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>nama</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={detail.nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>no</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={detail.no}
                  onChange={(e) => setNo(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>alamat</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={detail.alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>jumlah tiket</Form.Label>
                <Form.Control
                  type='number'
                  defaultValue={detail.jumlah_tiket}
                  onChange={(e) => setJumlahTiket(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>total harga</Form.Label>
                <Form.Control
                  type='number'
                  defaultValue={detail.total_harga}
                  onChange={(e) => setTotalHarga(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>order id</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={detail.order_id}
                  onChange={(e) => setOrderId(e.target.value)}
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
            {/* <Button variant='primary' onClick={handleClose}>
                Save Changes
              </Button> */}
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>userID</th>
              <th>Asal</th>
              <th>tujuan</th>
              <th>tanggal</th>
              <th>waktu_berangkat</th>
              <th>waktu_tiba</th>
              <th>harga</th>
              <th>nama</th>
              <th>no</th>
              <th>alamat</th>
              <th>jumlah_tiket</th>
              <th>total_harga</th>
              <th>order_id</th>
              <th>action</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.user_id}</td>
                  <td>{item.asal}</td>
                  <td>{item.tujuan}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.waktu_berangkat}</td>
                  <td>{item.waktu_tiba}</td>
                  <td>{item.harga}</td>
                  <td>{item.nama}</td>
                  <td>{item.no}</td>
                  <td>{item.alamat}</td>
                  <td>{item.jumlah_tiket}</td>
                  <td>{item.total_harga}</td>
                  <td>{item.order_id}</td>
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
  return <>LOADING</>;
};
