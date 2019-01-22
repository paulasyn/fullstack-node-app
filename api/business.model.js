// business.model.js

const mongoose = require('mongoose');
const Schema - mongoose.Schema;

// Define collection and schema for fullstack-business

let Business = new Schema({
    person_name: {
        type: String
    },

    business_name: {
        type: String
    },

    business_gst_number: {
        type: Number
    }
},{
    collection: 'fullstack-business'
});

module.exports = mongoos.model('Business', Business)