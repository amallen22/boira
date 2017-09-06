/* global angular */
angular.module('boiraApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/event/:id', {
    templateUrl: 'routes/editEvent/template.html',
    controller: 'editEventController'
  })
})
