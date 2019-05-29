const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
let Groups = new Schema ({
    groupName: {
        type: String,
        required: true
    },

    person1: {
        type: String,
        required: true
    },

    person2: {
        type: String,
        required: true
    },

    userID1: {
        type: String,
        required: true
    },

    userID2: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'groups'
});

module.exports = mongoose.model("groups", Groups);