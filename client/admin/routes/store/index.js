angular.module('boiraApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/store', {
    templateUrl: 'routes/store/template.html',
    controller: 'storeController'
  })
})
