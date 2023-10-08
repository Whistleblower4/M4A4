//Express Requirement
const express = require('express');
const loanLedgerController = require('../controllers/loanLedgerController');

const router = express.Router();

router // defining routes and attaching api methods for api
  .route('/')
  .get(loanLedgerController.getAllLoanLedger)
  .post(loanLedgerController.createLoanLedger);

router
  .route('/:id')
  .get(loanLedgerController.getLoanLedger)
  .patch(loanLedgerController.updateLoanLedger)
  .delete(loanLedgerController.deleteLoanLedger);

module.exports = router;
