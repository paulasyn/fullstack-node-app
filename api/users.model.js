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

    dateAdded: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model("users", Users);