const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model data
const invoiceSchema = new Schema(
  {
    order_id: {
      type: String,
    },
    user_id: {
      type: String,
    },
    asal: {
      type: String,
    },
    tujuan: {
      type: String,
    },
    tanggal: {
      type: String,
    },
    waktu_berangkat: {
      type: String,
    },
    waktu_tiba: {
      type: String,
    },

    nama: {
      type: String,
    },
    no: {
      type: String,
    },
    alamat: {
      type: String,
    },
    harga: {
      type: Number,
    },
    jumlah_tiket: {
      type: Number,
    },
    total_harga: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
