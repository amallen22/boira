angular.module('boiraApp')

/* products */
.factory('productService', function ($http) {
  const all = function () {
    // console.log('service get products')
    return $http.get('/api/products')
  }

  const add = function (product) {
    // console.log('service add product')
    return $http.post('/api/products/add', product)
  }

  const showProduct = function (id) {
    console.log('productService id: ', id)
    return $http.get(`/api/product/${id}`)
  }

  const updateProduct = function (id, oProduct) {
    console.log('productService id: ', id)
    console.log('productService oProduct: ', oProduct)
    return $http.put(`/api/product/${id}`, oProduct)
  }
  const removeProduct = function (id) {
    // console.log('eventService add event')
    return $http.delete(`/api/product/${id}`, id)
  }

  return { all, add, showProduct, updateProduct, removeProduct }
})
