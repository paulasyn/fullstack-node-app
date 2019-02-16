const express = require('express');
const usersRoutes =  express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// user model
const Users = require('./users.model');

// @route POST validation/register
// @desc Register user
// @access Public

// Define store route
usersRoutes.route('/add').post(function (req, res) {
    let user = new Users(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user' : "user was added successfully"});
        })
        .catch(err => {
            res.status(400).send("Unable to save to the database");
        });
});

// Defines get data(index or listing) route
usersRoutes.route('/').get(function (req, res) {
    Users.find(function(err, users){
        if(err) {
            console.log(err);
        }
        else{
            res.json(users);
        }
    });
});

// Defined edit route
usersRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Users.findById(id, function(err, user) {
        res.json(user);
    });
});

// Defined update route
usersRoutes.route('/update/:id').post(function (req, res) {
    Users.findById(req.params.id, function(err, user) {
        if(!user)
            res.status(404).send("data not found");
        else{
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(user => {
                res.json('Update Complete!');
            })
            .catch(err => {
                res.status(400).send("Unabble to update the database");
            });
        }
    });
});

// Defined delete | remove | destroy route
usersRoutes.route('/delete:id').get(function( req, res) {
    Users.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed!');
    });
});


// usersRoutes.post("/register", (req, res) => {
//     // form validation

//     const { errors, isValid } = validateRegisterInput(req.body);

//     // Check validation 
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     Users.findOne({ email: req.body.email }).then( users => {
//         if(users) {
//             return res.status(400).json({ email: "Email already exists"});
//         }
//     });
    
    
//     const newUser = new Users({
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
//                 .then(users => res.json(users))
//                 .catch(err => console.log(err));
//         });
//     });

//     // Define store route
//     usersRoutes.route('/add').post(function (req, res) {
//         let users = new Users(req.body);
//         users.save()
//             .then(business => {
//                 res.status(200).json({'users' : "user was added successfully"});
//             })
//             .catch(err => {
//                 res.status(400).send("Unable to save to the database");
//             });
//     });

//     // define get data
//     usersRoutes.route('/').get(function (req, res) {
//         Users.find(function(err, users){
//             if(err) {
//                 console.log(err);
//             }
//             else{
//                 res.json(users);
//             }
//         });
//     });

//     // Defined edit route
//     usersRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Users.findById(id, function(err, users) {
//         res.json(users);
//     });
// });
// })

module.exports = usersRoutes;