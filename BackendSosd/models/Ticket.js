const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');

// Model data
const ticketSchema = new Schema(
  {
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
    harga: {
      type: Number,
    },
  },
  { timestamps: true }
);

ticketSchema.plugin(mongoosePaginate);

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
