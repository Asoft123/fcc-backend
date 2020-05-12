
const _ = require('lodash');
const express = require('express');
const router = express.Router();

 router.get('/', (req, res) => {
  const user = {name:"Festus", phone:"07038067136"}
  res.status(200).send({user});
});
 router.post('/', (req, res) => {
  const user = {name:"M", phone:"07038067136"}
  res.status(200).send({user});
});
 router.put('/', (req, res) => {
  const user = {name:"Update route", phone:"07038067136"}
  res.status(200).send({user});
});

 router.delete('/', (req, res) => {
  const user = {name:"Delete", phone:"07038067136"}
  res.status(200).send({user});
});



module.exports = router;