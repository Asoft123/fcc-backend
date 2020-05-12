const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

 router.get('/', (req, res) => {
  const user = {name:"Festus", phone:"07038067136"}
  res.status(200).send({user});
});



module.exports = router;