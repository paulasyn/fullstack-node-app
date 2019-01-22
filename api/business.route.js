// business.route.js

const express = require('express');
const businessRoutes = express.Router();

//require business models in our routes module
let Business = require('./business.model');

// Defines store route
businessRoutes.route('/add').post(function(req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business is added successfully'});
    })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// Defines get data(index or listing) route
businessRoutes.route('/').get(function(req, res) {
    Business.find(function(err, businesses){
        if(err) {
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    Business.findById(id, function(err, business) {
        res.json(business);
    });
});

// Define update route
businessRoutes.route('/update:id').post(function(req, res) {
    Business.findById(req.params.id, function(errb, business) {
        if (!business){
            res.status(404).send("data not found");
        }
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;
            business.save().then(business => {
                res.json('Update Complete!');
            })
        .catch(err => {
            res.status(400).send("Unable to update the database!");
        });
        }
    });
});

// Defined delete route
businessRoutes.route('/delete/id').get(function(req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) {
            res.json(err);
        }
        else {
            res.json('Successfully Removed');
        }           
    });
});

module.exports = businessRoutes;

