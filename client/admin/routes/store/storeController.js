angular.module('boiraApp')

.controller('storeController', function ($scope, $rootScope, productService, $routeParams) {
  $scope.section = 'STORE'

  // Toogle button
  $scope.btnToogle = 'Add product'

  $scope.toogle = function () {
    if ($scope.options) {
      $scope.btnToogle = 'Show products'
    } else {
      $scope.btnToogle = 'Add product'
    }
  }

    // BBDD products store
  productService.all()
  .then(function (response) {
    // console.log(response.data)
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
    return entry.category === $scope.selectedCategory || $scope.selectedCategory === undefined
  }

  // add product form
  $scope.add = function () {
    const title = $scope.title
    const image = $scope.image
    const subtitle = $scope.subtitle
    const description = $scope.description
    const category = $scope.category
    const categoryGroup = $scope.categoryGroup
    const price = $scope.price

    const product = {
      title,
      image,
      subtitle,
      description,
      category,
      categoryGroup,
      price
    }

    productService.add(product)
    .then(res => console.log(res))
  }
})
