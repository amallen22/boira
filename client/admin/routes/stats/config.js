/* global angular */
(function () {
  angular.module('boiraApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/stats', {
          templateUrl: './routes/stats/template.html',
          controller: 'StatsCtrl',
          controllerAs: 'ctrl'
        })
    })
})()
