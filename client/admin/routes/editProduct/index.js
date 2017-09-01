/* global angular */
angular.module('boiraApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/store/:id', {
    templateUrl: 'routes/editProduct/template.html',
    controller: 'editController'
  })
})
