angular.module('boiraApp')

.controller('storeController', function ($scope, $rootScope, localData) {
  $scope.section = 'STORE'
  localData.storeData()
  .then(function (response) {
  	$scope.products = response.data.products
  	console.log(response.data.products)
  })
  // $scope.localData = localData
})
.filter('myFilter', function () {
  return function (items, param1, param2) {
    return items.filter(function (item) { /* your custom conditions */ })
  }
})
// .controller('homeController', function ($scope, dataService) {
//   dataService.getRestaurant()
//     .then(function (response) {
//       $scope.restaurants = response.data.results
//       console.log(response.data)
//     })
// })
