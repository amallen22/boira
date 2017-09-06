angular.module('boiraApp')

.controller('eventController', function ($scope, $rootScope, eventService, $routeParams, $window, $location) {
  $scope.section = 'EVENTS'

  // Toogle button
  $scope.btnToogle = 'Add event'

  $scope.toogle = function () {
    if ($scope.options) {
      $scope.btnToogle = 'Show events'
    } else {
      $scope.btnToogle = 'Add event'
    }
  }

    // BBDD events
  eventService.showEvents()
  .then(function (response) {
    console.log(response.data)
    $scope.events = response.data.events
  })

  // addEvent form
  $scope.addEvent = function () {
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

    eventService.addEvent(oEvent)
    // .then(res => console.log(oEvent))
    .then($window.location.reload())
  }

  // remove
  $scope.removeEvent = function (id) {
    eventService.removeEvent(id)
      // .then(res => console.log('Remove by id: ', res)
      .then($window.location.reload())
  }
})
