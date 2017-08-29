angular.module('boiraApp')

.controller('storeController', function ($scope, $rootScope, localData, $q) {
  $scope.section = 'STORE'

  // Local API item store
  localData.storeData()
  .then(function (response) {
    // console.log(response.data.products[0].category.slug)
    $scope.products = response.data.products
  })

  // define buttons
  $scope.categories = ['tshirts', 'bags', 'music']

  // get value form buttons
  $scope.setSelectedTitle = function (value) {
    if ($scope.selectedCategory === value) {
      $scope.selectedCategory = undefined
    } else {
      $scope.selectedCategory = value
    }
  }

  // Filter
  $scope.byCategory = function (entry) {
    return entry.category.slug === $scope.selectedCategory || $scope.selectedCategory === undefined
  }
})
