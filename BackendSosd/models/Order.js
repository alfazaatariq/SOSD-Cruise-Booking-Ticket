const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');

// Model data
const orderSchema = new Schema(
  {
    _id: {
      type: String,
    },
    tiket_id: {
      type: String,
    },
    nama: {
      type: String,
    },
    response_midtrans: {
      type: String,
    },
  },
  { timestamps: true }
);

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
