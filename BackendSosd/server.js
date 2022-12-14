const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const TicketRoute = require('./routes/ticket');
const AuthRoute = require('./routes/auth');
const AuthCustomerRoute = require('./routes/authCustomer');
const InvoiceRoute = require('./routes/invoice');
const OrderRoute = require('./routes/order');

// LOCAL (mongodbcompass)
// mongoose.connect('mongodb://localhost:27017/testdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// CLOUD
mongoose.connect('mongodb+srv://sosd:sosd@sosd.knplpfr.mongodb.net/sosd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Database Connection Established');
});

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/order', OrderRoute);
app.use('/api/ticket', TicketRoute);
app.use('/api', AuthRoute);
app.use('/api/customer', AuthCustomerRoute);
app.use('/api/invoice', InvoiceRoute);
