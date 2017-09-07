/* global angular */
(function () {
  angular.module('boiraApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/register', {
          templateUrl: './routes/register/template.html',
          controller: 'RegisterCtrl',
          controllerAs: 'ctrl'
        })
    })
})()
