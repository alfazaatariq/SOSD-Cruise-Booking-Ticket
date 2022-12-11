const express = require('express');
const router = express.Router();

const InvoiceController = require('../controllers/InvoiceController');

router.get('/', InvoiceController.index);
router.post('/show_by_userid', InvoiceController.showByUserId);
router.post('/show_by_orderid', InvoiceController.showByOrderId);
router.post('/store', InvoiceController.store);
router.post('/update', InvoiceController.update);
router.post('/delete', InvoiceController.destroy);

module.exports = router;
