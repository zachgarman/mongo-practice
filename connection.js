const mongoose = require('mongoose');

// used to connect to mongo.
  
exports.connect = function() {
  mongoose.connect('mongodb://localhost/rho');

  var db = mongoose.connection;
  db.on('error', function(error) {
    console.log('error connecting', error);
  });
  db.once('open', function() {
    console.log('connected to mongo');
  });

}
