angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var endpoint = "https://super-crud.herokuapp.com/books";


  $http({
    method: 'GET',
    url: endpoint + '/' + $routeParams.id
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('error showing book', response);
  });

  vm.deleteBook = function() {

    $http({
      method: 'DELETE',
      url: endpoint + '/' + $routeParams.id
    }).then(function successCallback(response) {
      console.log('book deleted',response.data);
      $location.path('/');
    }, function errorCallback(response) {
      console.log('error showing book', response);
    });
  };
}
