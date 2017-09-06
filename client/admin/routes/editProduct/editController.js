angular.module('boiraApp')

.controller('editController', function ($scope, $routeParams, $rootScope, productService, $location) {
  $scope.section = 'EDIT {{ title }}'

  var {id} = $routeParams
  productService.showProduct(id)
    .then(res => {
      console.log(res)
      $scope.title = res.data.title
      // $scope.image = res.data.image
      $scope.subtitle = res.data.subtitle
      $scope.description = res.data.description
      $scope.category = res.data.category
      $scope.categoryGroup = res.data.categoryGroup
      $scope.price = res.data.price
    })

    // update product form
  $scope.updateProduct = function () {
    const title = $scope.title
    // const image = $scope.image
    const subtitle = $scope.subtitle
    const description = $scope.description
    const category = $scope.category
    const categoryGroup = $scope.categoryGroup
    const price = $scope.price

    const oProduct = {
      title,
      // image,
      subtitle,
      description,
      category,
      categoryGroup,
      price
    }

    productService.updateProduct(id, oProduct)
      // .then(res => console.log('RES de edit controller: ', res))
      .then(() => {
        // $window.location.reload()
        $location.path('/store')
      })
      .catch(console.log('no va'))
  }
})
