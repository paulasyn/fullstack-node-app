const express = require('express');
const groupsRoutes =  express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// group model
let Groups = require('./groups.model');

// @route POST validation/register
// @desc Register group
// @access Public

// Define store route
groupsRoutes.route('/add').post(function (req, res) {
    let group = new Groups(req.body);
    group.save()
        .then(group => {
            res.status(200).json({'group' : "group was added successfully"});
        })
        .catch(err => {
            res.status(400).send("Unable to save to the database");
        });
});

// Defines get data(index or listing) route
groupsRoutes.route('/').get(function (req, res) {
    Groups.find(function(err, groups){
        if(err) {
            console.log(err);
        }
        else{
            res.json(groups);
        }
    });
});

// Defined edit route
groupsRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Groups.findById(id, function(err, group) {
        res.json(group);
    });
});

// Defined update route
groupsRoutes.route('/update/:id').post(function (req, res) {
    Groups.findById(req.params.id, function(err, group) {
        if(!group)
            res.status(404).send("data not found");
        else{
            group.name = req.body.name;
            group.email = req.body.email;
            group.password = req.body.password;

            group.save().then(group => {
                res.json('Update Complete!');
            })
            .catch(err => {
                res.status(400).send("Unabble to update the database");
            });
        }
    });
});

// Defined delete | remove | destroy route
groupsRoutes.route('/delete:id').get(function( req, res) {
    Groups.findByIdAndRemove({_id: req.params.id}, function(err, group){
        if(err) res.json(err);
        else res.json('Successfully removed!');
    });
});


// groupsRoutes.post("/register", (req, res) => {
//     // form validation

//     const { errors, isValid } = validateRegisterInput(req.body);

//     // Check validation 
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     Groups.findOne({ email: req.body.email }).then( groups => {
//         if(groups) {
//             return res.status(400).json({ email: "Email already exists"});
//         }
//     });
    
    
//     const newUser = new Groups({
//         name: req.body.name,
//         email:req.body.email,
//         password: req.body.password,
//         dateAdded: req.body.dateAdded
//     });

// // Hash password
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser
//                 .save()
//                 .then(groups => res.json(groups))
//                 .catch(err => console.log(err));
//         });
//     });

//     // Define store route
//     groupsRoutes.route('/add').post(function (req, res) {
//         let groups = new Groups(req.body);
//         groups.save()
//             .then(business => {
//                 res.status(200).json({'groups' : "group was added successfully"});
//             })
//             .catch(err => {
//                 res.status(400).send("Unable to save to the database");
//             });
//     });

//     // define get data
//     groupsRoutes.route('/').get(function (req, res) {
//         Groups.find(function(err, groups){
//             if(err) {
//                 console.log(err);
//             }
//             else{
//                 res.json(groups);
//             }
//         });
//     });

//     // Defined edit route
//     groupsRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Groups.findById(id, function(err, groups) {
//         res.json(groups);
//     });
// });
// })

module.exports = groupsRoutes;