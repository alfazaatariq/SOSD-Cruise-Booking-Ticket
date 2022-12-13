const Order = require('../models/Order');
const midtransClient = require('midtrans-client');

// Create Core API instance
let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  // UNTUK SERVER & CLIENT KEY, BISA DILIAT DI SETTINGS AKUN MIDTRANS PRIBADI. HAL INI DILAKUKAN UNTUK MELIHAT HISTORY PEMBAYARAN
  serverKey: 'SB-Mid-server-_OG2A-cUlUW-2USRfEI6I2CN',
  clientKey: 'SB-Mid-client-CwRTNC3Rv-adJVWm',
});

const getAllOrder = (req, res, next) => {
  Order.find()
    .then((data) => {
      let tampilData = data.map((item) => {
        return {
          id: item.id,
          tiket_id: item.tiket_id,
          nama: item.nama,
          response_midtrans: JSON.parse(item.response_midtrans),
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      });
      res.status(200).json({
        status: true,
        message: 'Success menampilkan data!',
        data: tampilData,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        message: 'Gagal menampilkan data!' + error.message,
        data: [],
      });
    });
};

const Charge = (req, res, next) => {
  coreApi
    .charge(req.body)
    .then((chargeResponse) => {
      console.log('chargeResponse:', JSON.stringify(chargeResponse));

      let order = new Order({
        _id: chargeResponse.order_id,
        tiket_id: req.body.tiket_id,
        nama: req.body.nama,
        response_midtrans: JSON.stringify(chargeResponse),
      });

      order
        .save()
        .then((data) => {
          res.json({
            status: true,
            message: 'Berhasil Order',
            data: data,
          });
        })
        .catch((err) => {
          res.json({
            status: false,
            message: 'Gagal Order' + err.message,
            data: [],
          });
        });
    })
    .catch((e) => {
      res.json({
        status: false,
        message: 'Gagal Order' + e.message,
        data: [],
      });
    });
};

const Notifikasi = (req, res, next) => {
  coreApi.transaction.notification(req.body).then((statusResponse) => {
    let orderId = statusResponse.order_id;
    let responseMidTrans = JSON.stringify(statusResponse);

    Order.findByIdAndUpdate(orderId, { response_midtrans: responseMidTrans })
      .then(() => {
        res.json({
          status: true,
          message: 'Berhasil Notifikasi!',
          data: [],
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: false,
          message: 'Gagal Notifikasi!' + error.message,
          data: [],
        });
      });
  });
};

const getStatus = (req, res, next) => {
  // get status of transaction that already recorded on midtrans (already `charge`-ed)
  coreApi.transaction.status(req.params.order_id).then((statusResponse) => {
    let responseMidTrans = JSON.stringify(statusResponse);
    Order.findByIdAndUpdate(req.params.order_id, {
      response_midtrans: responseMidTrans,
    })
      .then(() => {
        res.json({
          status: true,
          message: 'Berhasil Cek Status!',
          data: statusResponse,
        });
      })
      .catch((error) => {
        res.json({
          status: false,
          message: 'Gagal Cek Status!' + error.message,
          data: [],
        });
      });
  });
};

module.exports = {
  Charge,
  Notifikasi,
  getAllOrder,
  getStatus,
};
