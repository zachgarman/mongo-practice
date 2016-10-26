const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const peopleRouter = require('./routes/people');
const mongoose = require('mongoose');
const connection = require('./connection');

var app = express();

connection.connect();

// middleware running
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve static files
app.use(express.static('public'));

// routers running
app.use('/people', peopleRouter);

// run server on index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000, function() {
  console.log('Listening on Port: 3000');
});
