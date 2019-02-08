const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
let Users = new Schema ({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        deafult: Date.now
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model("users", Users);