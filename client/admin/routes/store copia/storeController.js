angular.module('boiraApp')

.controller('storeController', function ($scope, $rootScope, localData, $q) {
  $scope.section = 'STORE'

  // get value form buttons
  $scope.setSelectedTitle = function (value) {
    if ($scope.selectedCategory === value) {
      $scope.selectedCategory = undefined
    } else {
      $scope.selectedCategory = value
    }
  }

  // Local API item store
  localData.storeData()
  .then(function (response) {
    // console.log(response.data.products[0].category.slug)
    $scope.products = response.data.products
  })

  $q.when({ data: [
        { category: 'tshirts', text: 1 },
        { category: 'bags', text: 2 },
        { category: 'tshirts', text: 3 },
        { category: 'music', text: 4 },
        { category: 'tshirts', text: 5 },
        { category: 'bags', text: 6 },
        { category: 'bags', text: 7 },
        { category: 'music', text: 8 }
  ]})
    .then(function (res) {
      $scope.entries = res.data
    })

  $scope.categories = ['tshirts', 'bags', 'music']

  $scope.byCategory = function (entry) {
    return entry.category === $scope.selectedCategory || $scope.selectedCategory === undefined
  }
})
