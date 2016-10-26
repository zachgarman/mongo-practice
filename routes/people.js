const express = require('express');
const Person = require('../models/person');

var router = express.Router();

router.get('/', function(req, res) {
  // people is the list of documents that match the query
  // all the people in the database
  Person.find({}).then(function(people){
    console.log('Documents from mongo', people);
    res.send(people);
  });
});

router.post('/', function(req, res) {
  var name = req.body.name;
  var hometown = req.body.hometown;
  var favoriteMovie = req.body.favoriteMovie;
  // this is where we create a new person object.
  // without it being an instance of Person, we cannot
  // call save on it.
  var personToSave = new Person ({
    name: name,
    hometown: hometown,
    favoriteMovie: favoriteMovie
  });
  personToSave.save().then(function(doc) {
    console.log('saved a new person');
    res.send(201);
  });
});


module.exports = router;
