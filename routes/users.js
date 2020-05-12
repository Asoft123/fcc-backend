const connection = require('../db/db');

const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

const SELECT_ALL_USER = 'SELECT * FROM users'

 router.get('/', (req, res) => {
  connection.query(SELECT_ALL_USER, (err, docs) => {
        if(err){
        return res.send(err)
        }
        else if(docs.length <= 0) {
              res.status(200).json({message:"No User(s) in Database yet"})
        }
        else{
            res.status(200).json({
                  message:"Fetched all users successfully",
                  data:docs
            })
        }
  })
});


 router.post('/', (req, res) => {

       const {firstName, lastName, gender, email, phone, unit, branch, position} = req.body;
       const INSERT_INTO_USERS = `INSERT INTO users (firstName, lastName, gender, email, phone, unit_id, branch_id) VAlUES ('${firstName}', '${lastName}', '${gender}','${email}', '${phone}', '${unit}','${branch}','${position}' )`;
  connection.query(INSERT_INTO_USERS, (err, doc) => {
        if(err){
        return res.status(400).json({error:err, message:"Something Failed, Please try again later"})
        }
        else {
              res.status(201).json({message:"User Added successfully", user:doc})
        }
  });
});



module.exports = router;