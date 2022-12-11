const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrderController');

router.get('/getorders', OrderController.getAllOrder);
router.post('/charge', OrderController.Charge);
router.post('/notifikasi', OrderController.Notifikasi);
router.get('/status/:order_id', OrderController.getStatus);

module.exports = router;
