angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController ($http) {
  console.log('PeopleController loaded');

  var self = this;
  self.people = [];

  self.clearForm = function() {
    self.name = '';
    self.hometown = '';
    self.favoriteMovie = '';
  };

  self.listPeople = function () {
    console.log('Listing peeps');
    $http.get('/people').then(function(response) {
      console.log('response', response);
      self.people = response.data;
    }, function(error) {
      console.log('error making request', error);
    });
  };

  self.addPerson = function() {
    var data = {
      name: self.name,
      hometown: self.hometown,
      favoriteMovie: self.favoriteMovie
    };

    $http.post('/people', data).then(function(response) {
      console.log('response', response);
      self.clearForm();
      self.listPeople();
    });
  };
}
