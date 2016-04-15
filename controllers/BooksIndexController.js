angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  var endpoint = "https://super-crud.herokuapp.com/books";
  vm.newBook = {};

  $http({
    method: 'GET',
    url: endpoint
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('error getting books', response);
  });

  vm.createBook = function () {
    $http({
      method: 'POST',
      url: endpoint,
      data: vm.newBook
    }).then(function successCreateCallback(response) {
      console.log(response.data);
      vm.newBook = response.data;
      vm.books.push(vm.newBook);
    }, function errorCreateCallback(response) {
      console.log('error creating book', err);
    } );
  };
}
