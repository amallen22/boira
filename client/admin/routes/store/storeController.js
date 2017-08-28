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
  // load data
  // $q.when({ data: [
  //       { category: 'tshirts', text: 1 },
  //       { category: 'bags', text: 2 },
  //       { category: 'tshirts', text: 3 },
  //       { category: 'music', text: 4 },
  //       { category: 'tshirts', text: 5 },
  //       { category: 'bags', text: 6 },
  //       { category: 'bags', text: 7 },
  //       { category: 'music', text: 8 }
  // ]})

  // promise
    // .then(function (res) {
    //   $scope.entries = res.data
    // })
})
