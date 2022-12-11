const express = require('express');
const router = express.Router();

const TicketController = require('../controllers/TicketController');
const upload = require('../middleware/upload');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, TicketController.index);
router.get('/getall', TicketController.index);
router.post('/show', TicketController.show);
router.post('/store', TicketController.store);
router.post('/update', TicketController.update);
router.post('/delete', TicketController.destroy);
router.post('/searchtickets', TicketController.searchTickets);
router.post('/searchtujuan', TicketController.searchTujuan);
router.get('/searchasal', TicketController.searchAsal);

module.exports = router;
