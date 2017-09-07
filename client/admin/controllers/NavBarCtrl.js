/* global angular */
(function () {
  angular.module('boiraApp')
    .controller('NavBarCtrl', NavBarCtrl)

  function NavBarCtrl (AuthService, $location, $scope) {
    $scope.logout = function () {
      AuthService.logout()
      $location.path('/login')
    }
  }
})()
