const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
let Transactions = new Schema ({
    dateAdded: {
        type: Date,
        default: Date.now
    },

    group: {

        fromID: {
            type: String,
            required: true
        },
    
        toID: {
            type: String,
            required: true
        }

    },

    description: {
        type: String,
        required: true
    },

    transactionAmount: {
        type: Schema.Types.Decimal128,
        default: Date.now
    }
}, {
    collection: 'transactions'
});

module.exports = mongoose.model("transaction", Transactions);