// make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {}

;(function () {
  // TODO: code for the maps goes here

  // NOTE: this "foo" is trapped inside the anonymous function that wraps this entire file
  // it has no relation to any of the other "foo" functions
  function foo () {
    console.log('I am the "foo" function for the maps.')
  }

  function initMaps () {
    console.info('Intializing the maps now.')
    foo()
  }

  // export the initMaps function so it may be called outside of this module
  window.MYAPP.initMaps = initMaps
})()
