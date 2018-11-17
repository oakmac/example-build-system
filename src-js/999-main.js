// make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {}

;(function () {
  // NOTE: referencing "$" inside this module prevents standard from yelling at us
  var $ = window.jQuery
  var MYAPP = window.MYAPP

  function globalInit () {
    console.info('Intializing the application now.')

    // let's initialize all of our other modules
    MYAPP.initHomepage()
    MYAPP.initHeader()
    MYAPP.initMaps()
  }

  // run globalInit when the DOM is ready
  $(globalInit)
})()
