angular.module('boiraApp')

.controller('editController', function ($scope, $routeParams, $rootScope, eventService) {
  $scope.section = 'EVENT EDIT'

  var {id} = $routeParams
  eventService.showEvent(id)
    .then(res => {
      console.log(res)
      $scope.day = res.data.day
      $scope.month = res.data.month
      $scope.year = res.data.year
      $scope.place = res.data.place
      $scope.location = res.data.location
      $scope.ticketLink = res.data.ticketLink
    })

    // update product form
  $scope.updateEvent = function () {
    const day = $scope.day
    const month = $scope.month
    const year = $scope.year
    const place = $scope.place
    const location = $scope.location
    const ticketLink = $scope.ticketLink

    const oEvent = {
      day,
      month,
      year,
      place,
      location,
      ticketLink
    }

    eventService.updateEvent(id, oEvent)
      .then(res => console.log('RES de edit controller: ', res))
  }
})
