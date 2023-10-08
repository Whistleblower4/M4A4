//Express Requirement
const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

router // defining routes and attaching api methods for api
  .route('/')
  .get(loanController.getAllLoan)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoan)
  .patch(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
