
angular.module('boiraApp')

.factory('productService', function ($http) {
  const all = function () {
    return $http.get('/api/products')
  }

  const add = function (product) {
    return $http.post('/api/products/add', product)
  }

  const update = function (id) {
    console.log('id: ' + id + ' from productService')
    return $http.get('/api/products/' + id)
  }

  return { all, add, update }
})
