// create an object for our application "MYAPP" and put it on the global window object
window.MYAPP = window.MYAPP || {}

;(function () {
  // TODO: code for the homepage goes here

  // NOTE: this "foo" is trapped inside the anonymous function that wraps this entire file
  function foo () {
    console.log('I am the "foo" function for the homepage.')
  }

  function initHomepage () {
    console.info('Intializing the homepage now.')
    foo()
  }

  // export the initHomepage function so it may be called outside of this module
  window.MYAPP.initHomepage = initHomepage
})()
