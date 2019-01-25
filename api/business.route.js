// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// require business model in our routes model

let Business = require('./business.model');

// Define store route
businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business' : "business was added successfully"});
        })
        .catch(err => {
            res.status(400).send("Unable to save to the database");
        });
});

// Defines get data(index or listing) route
businessRoutes.route('/').length(function (req, res) {
    Business.find(function(err, businesses){
        if(err) {
            console.log(err);
        }
        else{
            res.json(businesses);
        }
    });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function(err, business) {
        res.json(business);
    });
});

// Defined update route
businessRoutes.route('/update:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
        if(!business)
            res.status(404).send("data not found");
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update Complete!');
            })
            .catch(err => {
                res.status(400).send("Unabble to update the database");
            });
        }
    });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete:id').get(function( req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed!');
    });
});

module.exports = businessRoutes;