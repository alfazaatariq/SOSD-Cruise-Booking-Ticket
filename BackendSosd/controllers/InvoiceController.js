const { response } = require('express');
const Invoice = require('../models/Invoice');

const index = (req, res, next) => {
  if (req.query.page && req.query.limit) {
    Invoice.paginate({}, { page: req.query.page, limit: req.query.limit })
      .then((data) => {
        res.status(200).json({
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          error,
        });
      });
  } else {
    Invoice.find()
      .then((data) => {
        res.status(200).json({
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          error,
        });
      });
  }
};

const showByUserId = (req, res, next) => {
  let user_id = req.body.user_id;
  Invoice.find({ user_id: user_id })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured! ' + error.message,
      });
    });
};

const showByOrderId = (req, res, next) => {
  let order_id = req.body.order_id;
  Invoice.find({ order_id: order_id })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured! ' + error.message,
      });
    });
};

const store = (req, res, next) => {
  let invoice = new Invoice({
    user_id: req.body.user_id,
    asal: req.body.asal,
    tujuan: req.body.tujuan,
    tanggal: req.body.tanggal,
    waktu_berangkat: req.body.waktu_berangkat,
    waktu_tiba: req.body.waktu_tiba,
    harga: req.body.harga,
    nama: req.body.nama,
    no: req.body.no,
    alamat: req.body.alamat,
    jumlah_tiket: req.body.jumlah_tiket,
    total_harga: req.body.total_harga,
    order_id: req.body.order_id,
  });

  invoice
    .save()
    .then((response) => {
      res.json({
        message: 'Invoice added successfully!',
      });
    })
    .catch((err) => {
      res.json({
        message: 'An error occured! ' + err.message,
      });
    });
};

const update = (req, res, next) => {
  let invoiceID = req.body.invoiceID;

  let updatedData = {
    user_id: req.body.user_id,
    asal: req.body.asal,
    tujuan: req.body.tujuan,
    tanggal: req.body.tanggal,
    waktu_berangkat: req.body.waktu_berangkat,
    waktu_tiba: req.body.waktu_tiba,
    harga: req.body.harga,
    nama: req.body.nama,
    no: req.body.no,
    alamat: req.body.alamat,
    jumlah_tiket: req.body.jumlah_tiket,
    total_harga: req.body.total_harga,
    order_id: req.body.order_id,
  };

  Invoice.findByIdAndUpdate(invoiceID, { $set: updatedData })
    .then(() => {
      res.json({
        message: 'Invoice updated successfully!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

const destroy = (req, res, next) => {
  let invoiceID = req.body.invoiceID;
  Invoice.findByIdAndRemove(invoiceID)
    .then(() => {
      res.json({
        message: 'Invoice deleted successfully!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

module.exports = {
  index,
  store,
  update,
  destroy,
  showByUserId,
  showByOrderId,
};
