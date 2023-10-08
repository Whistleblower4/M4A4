//Express Requirement
const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router // defining routes and attaching api methods for api
  .route('/')
  .get(customerController.getAllCustomer)
  .post(customerController.createCustomer);

router
  .route('/:id')
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
