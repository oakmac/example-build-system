const express = require('express')
const app = express()
// const request = require('request')
app.set('view engine', 'ejs')
app.get('/', function(req, res){
  //this is the landing page
  res.render('landing')
})

app.get('/movies', function(req, res){
  //this is the main movies page on which the users can search their movies
  res.render('movies')
})
app.get('/results', function (req, res) {
  //this is the page to show the result of what the user have searched.
  res.render('results')
})

app.get('/cart', function (req, res) {
  res.render('cart')
})

app.get('/user', function (req, res) {
  //will use REStful api here
  res.render('user')
})



// app.get('/results', function (req, res) {
//   var query = req.query.search
//     var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb'
//   // res.send("hello, it works!"); //make sure the api is working first;
//   request(url, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       let data = JSON.parse(body)
//             res.render('results', { data: data })
//         }
//   })
// })

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('shop your movie app has started!')
})
