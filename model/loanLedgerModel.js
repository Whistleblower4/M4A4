const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema({
    paymentAmount: {
        type: Number
    },
    interest: {
        type: Number
    },
    principal:{
        type: Number
    },
    createdDate: {
        type: String
    },
    modifiedDate: {
        type: String
    },
    isDeleted: {
        type: Boolean
    },

})

module.exports = mongoose.model('LoanLedger', loanLedgerSchema)