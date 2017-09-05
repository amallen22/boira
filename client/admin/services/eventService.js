angular.module('boiraApp')

/* events */
.factory('eventService', function ($http) {
  const showEvents = function () {
    // console.log('service get events')
    return $http.get('/api/events')
  }

  const addEvent = function (oEvent) {
    // console.log('eventService add event')
    return $http.post('/api/events/add', oEvent)
  }

  const showEvent = function (id) {
    // console.log('EventService id: ', id)
    return $http.get(`/api/event/${id}`)
  }

  const updateEvent = function (id, oEvent) {
    return $http.put(`/api/event/${id}`, oEvent)
  }

  return { showEvents, addEvent, showEvent, updateEvent}
})
