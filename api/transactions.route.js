// transactions.route.js

const express = require('express');
const transactionRoutes = express.Router();

// require transactions model in our routes model

let Transaction = require('./transactions.model');

// Define store route
transactionRoutes.route('/add').post(function (req, res) {
    let transactions = new Transaction(req.body);
    transactions.save()
        .then(transactions => {
            res.status(200).json({'transactions' : "transaction was added successfully"});
        })
        .catch(err => {
            res.status(400).send("Unable to save to the database");
        });
});

// Defines get data(index or listing) route
transactionRoutes.route('/').get(function (req, res) {
    Transaction.find(function(err, transactions2){
        if(err) {
            console.log(err);
        }
        else{
            res.json(transactions2);
        }
    });
});

// Defined edit route
transactionRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Transaction.findById(id, function(err, transactions) {
        res.json(transactions);
    });
});

// Defined update route
transactionRoutes.route('/update/:id').post(function (req, res) {
    Transaction.findById(req.params.id, function(err, transactions) {
        if(!transactions)
            res.status(404).send("data not found");
        else{
            transactions.person_name = req.body.person_name;
            transactions.transactions_name = req.body.transactions_name;
            transactions.transactions_gst_number = req.body.transactions_gst_number;

            transactions.save().then(transactions => {
                res.json('Update Complete!');
            })
            .catch(err => {
                res.status(400).send("Unabble to update the database");
            });
        }
    });
});

// Defined delete | remove | destroy route
transactionRoutes.route('/delete:id').get(function( req, res) {
    Transaction.findByIdAndRemove({_id: req.params.id}, function(err, transactions){
        if(err) res.json(err);
        else res.json('Successfully removed!');
    });
});

module.exports = transactionRoutes;