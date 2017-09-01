
angular.module('boiraApp')

.factory('productService', function ($http) {
  const all = function () {
    return $http.get('/api/products')
    console.log('service get products')
  }

  const add = function (product) {
    console.log('service add product')
    return $http.post('/api/products/add', product)
  }

  const showProduct = function (id) {
    console.log('productService id: ', id)
    return $http.get(`/api/product/${id}`)
  }

  // const showProductDetail = function (id) {
  //   console.log('esta es la id', id)
  //   return $http.get('/api/product/' + id)
  // }
  // const update = function (id) {
  //   return $http.get('/api/products/' + id)
  // }

  return { all, add, showProduct }
})
