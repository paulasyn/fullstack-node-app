const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
let UserSessions = new Schema ({
    userID: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'userSessions'
});

module.exports = mongoose.model("userSessions", UserSessions);