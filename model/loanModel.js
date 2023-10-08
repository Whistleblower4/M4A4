const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanType: {
        type: String
    },
    amount: {
        type: Number
    },
    interestRate: {
        type: Number
    },
    loanTerm:{
        type: Number
    },
    startDate: {
        type: String
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

module.exports = mongoose.model('Loan', loanSchema)