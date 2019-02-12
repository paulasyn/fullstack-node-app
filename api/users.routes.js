const express = require('express');
const usersRoutes =  express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// user model
const Users = require('users.model');

// @route POST validation/register
// @desc Register user
// @access Public

usersRoutes.post("/register", (req, res) => {
    // form validation

    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation 
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Users.findOne({ email: req.body.email }).then( user => {
        if(user) {
            return res.status(400).json({ email: "Email already exists"});
        }
    });
    
    
    const newUser = new Users({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    });

// Hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        });
    });
});