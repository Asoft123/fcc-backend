// require('express-async-errors');
// const error = require('./middleware/error')
// const winston = require('winston')
// const Joi = require('@hapi/joi')
// Joi.objectId = require('joi-objectid')(Joi);
// const config = require('config');
const users = require('./routes/users');
const members = require('./routes/members');
const connection = require('./db/db');
// const subscription = require('./routes/subscription');
// const reset_password = require('./routes/reset_password');
// const house = require('./routes/house');
// const category = require('./routes/house_cat');
// const contact = require('./routes/contact');
// const usercat = require('./routes/user_cats');
// const auth = require('./routes/auth');
const express = require('express');;
// const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// if (!config.get('jwtPrivateKey')){
//     console.error("FATAL ERROR: JWT privatkey not defined")
//     process.exit(1);

// }

// Connect to DB
connection.connect( (err) => {
 if(!err)
 console.log("Connected to DB")
 else 
 console.log("DB connection failed \n Error: " + JSON.stringify(err, undefined, 2))
});

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});

app.use('/api/users', users);
app.use('/api/members', members);

// app.use('/api/houses', house)
// app.use('/api/auth', auth)
// app.use('/api/categories', category)
// app.use('/api/usercats', usercat)
// app.use('/api/contact', contact)
// app.use('/api/sub', subscription)
// app.use('/api/reset_password', reset_password)
// app.use(error);
module.exports = app;
