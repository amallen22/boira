angular.module('boiraApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/store', {
    templateUrl: 'routes/store/template.html',
    controller: 'storeController'
  })
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/store/:id', {
    templateUrl: 'routes/store/template.html',
    controller: 'storeController'
  })
})
