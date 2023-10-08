const mongoose = require('mongoose');

const cusSchema = new mongoose.Schema({
    name: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    gender: {
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

module.exports = mongoose.model('Customer', cusSchema)