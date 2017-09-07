/* global angular */
(function () {
  angular.module('boiraApp')
    .controller('RegisterCtrl', RegisterCtrl)

  // function RegisterCtrl (AuthService, toastr) {
  function RegisterCtrl (AuthService, $location) {
    this.register = (e) => {
      e.preventDefault()
      AuthService.register(this.username, this.password)
        .then(data => {
          // if (data.success) toastr.success(data.msg)
          if (data.success) {
            $location.path('/store')
            console.log('registred => store')
          }
          // else toastr.error(data.msg)
          else {
            // toastr.error(data.msg)
          }
        })
    }
  }
})()
