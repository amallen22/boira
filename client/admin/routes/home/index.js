angular.module('boiraApp')
  .config(function ($routeProvider) {
    $routeProvider
  .when('/', {
    templateUrl: 'routes/home/template.html',
    controller: 'homeController'
  })
  })
