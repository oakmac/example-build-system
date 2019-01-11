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
  var data=[{
  "movieid": 1,
  "movie": "Jupiter's Wife",
  "movie genre": "Documentary"
}, {
  "movieid": 2,
  "movie": "Far",
  "movie genre": "Drama"
}, {
  "movieid": 3,
  "movie": "Homeboy",
  "movie genre": "Drama|Romance"
}, {
  "movieid": 4,
  "movie": "America's Heart and Soul",
  "movie genre": "Documentary"
}, {
  "movieid": 5,
  "movie": "Frozen River",
  "movie genre": "Drama"
}, {
  "movieid": 6,
  "movie": "Stand by Me Doraemon",
  "movie genre": "Animation|Children|Drama|Fantasy"
}, {
  "movieid": 7,
  "movie": "Dream (Bi-mong)",
  "movie genre": "Drama|Fantasy|Mystery|Romance"
}, {
  "movieid": 8,
  "movie": "Liar's Dice",
  "movie genre": "Adventure|Children|Drama"
}, {
  "movieid": 9,
  "movie": "Inside Deep Throat",
  "movie genre": "Documentary"
}, {
  "movieid": 10,
  "movie": "Prisoner of Paradise",
  "movie genre": "Documentary"
}]
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
  var user = [{
  "id": 1,
  "user_name": "Manda",
  "email": "mshrubb0@wordpress.org",
  "name": "Manda Shrubb",
  "address": "859 Marcy Place"
}, {
  "id": 2,
  "user_name": "Carmelia",
  "email": "cgunny1@ow.ly",
  "name": "Carmelia Gunny",
  "address": "1 Crescent Oaks Trail"
}, {
  "id": 3,
  "user_name": "Rancell",
  "email": "rligoe2@wp.com",
  "name": "Rancell Ligoe",
  "address": "715 Commercial Place"
}, {
  "id": 4,
  "user_name": "Nickie",
  "email": "nbarnaby3@ebay.co.uk",
  "name": "Nickie Barnaby",
  "address": "0379 Golden Leaf Park"
}, {
  "id": 5,
  "user_name": "Adriana",
  "email": "abroad4@engadget.com",
  "name": "Adriana Broad",
  "address": "7375 Green Trail"
}, {
  "id": 6,
  "user_name": "Collete",
  "email": "cpendreigh5@foxnews.com",
  "name": "Collete Pendreigh",
  "address": "99 Main Plaza"
}]
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
