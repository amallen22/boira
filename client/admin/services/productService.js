
angular.module('boiraApp')

.factory('productService', function ($http) {
  const all = function () {
    return $http.get('/api/products')
  }

  const add = function (product) {
    return $http.post('/api/products/add', product)
  }

  return { all, add }
})
