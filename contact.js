const path = require('path');

const express = require('express');

const productsController = require('../controllers/contactus');

const router = express.Router();

// /admin/add-product => GET
router.get('/contact', productsController.getAddContact);

// /admin/add-product => POST
router.post('/contact', productsController.postAddContact);

module.exports = router;