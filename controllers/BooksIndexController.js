angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  var endpoint = "https://super-crud.herokuapp.com/books";

  $http({
    method: 'GET',
    url: endpoint
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('error getting books', response);
  });
}
