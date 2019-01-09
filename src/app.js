const express = require('express')
const app = express()
// const request = require('request')
// app.set('view engine', 'ejs')
app.get('/main', function (req, res) {
  res.render('search')
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
