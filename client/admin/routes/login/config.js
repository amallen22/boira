/* global angular */
(function () {
  angular.module('boiraApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: './routes/login/template.html',
          controller: 'LoginCtrl',
          controllerAs: 'ctrl'
        })
    })
})()
