// angular.module('boiraApp')

// .factory('localData', function ($http) {
//   var storeData = function () {
//   	const url = '/api'
//     return $http.get(url)
//   }

//   return {storeData: storeData}
// })

angular.module('boiraApp')

.factory('localData', function ($http) {
  var storeData = function () {
  	const url = '/api/products'
    return $http.get(url)
  }
  return { storeData }
})
