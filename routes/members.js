const connection = require('../db/db')

const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

 router.get('/', (req, res) => {
  const user = {name:"Members Routes", phone:"07038067136"}
  res.status(200).send({user});
});


router.post('/', (req, res) => {

      res.send({message:"You have hitted the post route"})
})


module.exports = router;