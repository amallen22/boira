/* global angular */
(function () {
  angular.module('boiraApp')
    .controller('LoginCtrl', LoginCtrl)

  // function LoginCtrl (AuthService, toastr, $location) {
  function LoginCtrl (AuthService, $location) {
    console.log('login controller')
    this.login = (e) => {
      e.preventDefault()
      AuthService.login(this.username, this.password)
        .then(success => {
          if (success) {
            // toastr.success('succesfully logged')
            $location.path('/store')
          } else {
            // toastr.error('try again!')
          }
        })
    }
  }
})()
