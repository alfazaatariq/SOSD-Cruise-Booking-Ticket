const express = require('express');
const router = express.Router();

const AuthCustomerController = require('../controllers/AuthCustomerController');

router.post('/customer-register', AuthCustomerController.register);
router.post('/customer-login', AuthCustomerController.login);
router.post('/customer-refresh-token', AuthCustomerController.refreshToken);

module.exports = router;
