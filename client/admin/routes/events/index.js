angular.module('boiraApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/events', {
    templateUrl: 'routes/events/template.html',
    controller: 'eventController',
    secure: true
  })
})
