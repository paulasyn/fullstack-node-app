// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');
const usersRoute = require('./users.route');
const transactionsRoute = require('./transactions.route');
const groupsRoute = require('./groups.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to the database' +err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// creating business endpoint
app.use('/business', businessRoute);
// creating users endpoint
app.use('/users', usersRoute)
// creating transactions endpoint
app.use('/transactions', transactionsRoute)
// creating groups endpoint
app.use('/groups', groupsRoute)

app.listen(PORT, function(){
    console.log('Server is running on Port:', PORT);
});