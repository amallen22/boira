  console.log('Hi from scripts')
/* global $ */
  $(document).ready(function () {
    console.log('Hi from scripts')

    const hScreen = $(window).height()
    console.log(hScreen)
    $('.bg-home').css('height', hScreen)
  })

/* API Instagram */

  // qbitstudio
  // var token = '2495694.1677ed0.47c827804f0a4d709d78cc2c1c15e9f8',

  const token = '2235110665.1677ed0.404f4e454c8c4daeb16a0e3990d7964c',
    num_photos = 8

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function (data) {
      console.log(data)
      for (x in data.data) {
        $('#gallery .container ul').append('<li><img src="' + data.data[x].images.standard_resolution.url + '"></li>')
      }
    },
    error: function (data) {
      console.log(data)
    }
  })

  /* wellcome */
