const { response } = require('express');
const Ticket = require('../models/Ticket');

// Menampilkan list ticket
const index = (req, res, next) => {
  if (req.query.page && req.query.limit) {
    Ticket.paginate({}, { page: req.query.page, limit: req.query.limit })
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
    Ticket.find()
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

// Menampilkan list ticket berdasarkan id
const show = (req, res, next) => {
  let ticketID = req.body.ticketID;
  Ticket.findById(ticketID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

// Menambahkan ticket baru
const store = (req, res, next) => {
  let ticket = new Ticket({
    asal: req.body.asal,
    tujuan: req.body.tujuan,
    tanggal: req.body.tanggal,
    waktu_berangkat: req.body.waktu_berangkat,
    waktu_tiba: req.body.waktu_tiba,
    harga: req.body.harga,
  });

  ticket
    .save()
    .then((response) => {
      res.json({
        message: 'Ticket added successfully!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

// Update ticket berdasarkan id
const update = (req, res, next) => {
  let ticketID = req.body.ticketID;

  let updatedData = {
    asal: req.body.asal,
    tujuan: req.body.tujuan,
    tanggal: req.body.tanggal,
    waktu_berangkat: req.body.waktu_berangkat,
    waktu_tiba: req.body.waktu_tiba,
    harga: req.body.harga,
  };

  Ticket.findByIdAndUpdate(ticketID, { $set: updatedData })
    .then(() => {
      res.json({
        message: 'Ticket updated successfully!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

// Menghapus ticket
const destroy = (req, res, next) => {
  let ticketID = req.body.ticketID;
  Ticket.findByIdAndRemove(ticketID)
    .then(() => {
      res.json({
        message: 'Ticket deleted successfully!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occured!',
      });
    });
};

const searchTickets = (req, res, next) => {
  let asal = req.body.asal;
  let tujuan = req.body.tujuan;
  let tanggal = req.body.tanggal;

  Ticket.find(
    { asal: asal, tujuan: tujuan, tanggal: tanggal },
    function (err, data) {
      if (err) {
        res.json({
          err,
        });
      } else {
        if (data.length == 0) {
          res.json({
            message: 'No tickets found!',
          });
        } else {
          res.json({
            data,
          });
        }
      }
    }
  );
};

const searchTujuan = (req, res, next) => {
  let asal = req.body.asal;

  Ticket.find(
    {
      asal: asal,
    },
    function (err, data) {
      if (err) {
        res.json({
          err,
        });
      } else {
        res.json({
          data,
        });
      }
    }
  );
};

const searchAsal = (req, res, next) => {
  Ticket.find()
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
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  searchTickets,
  searchTujuan,
  searchAsal,
};
