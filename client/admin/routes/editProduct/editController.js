angular.module('boiraApp')

.controller('editController', function ($scope, $routeParams, $rootScope, productService) {
  $scope.section = 'PRODUCT EDIT'

  var {id} = $routeParams
  productService.showProduct(id)
    .then(res => {
      console.log(res)
      $scope.title = res.data.title
      $scope.image = res.data.image
      $scope.subtitle = res.data.subtitle
      $scope.description = res.data.description
      $scope.category = res.data.category
      $scope.categoryGroup = res.data.categoryGroup
      $scope.price = res.data.price
    })
})
