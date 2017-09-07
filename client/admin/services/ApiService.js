/* global angular */
(function () {
  angular.module('boiraApp')
    .factory('ApiService', ApiService)

  function ApiService ($http) {
    function getPrivateData () {
      return $http.get('/private/data')
                .then(res => res.data)
    }

    function getPublicData () {
      return $http.get('/public/data')
                .then(res => res.data)
    }

    return { getPrivateData, getPublicData }
  }
})()
