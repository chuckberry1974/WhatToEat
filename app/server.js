// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
// const dbUrl = 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD +
// '@ds059694.mongolab.com:59694/longneck'
// mongoose.connect(dbUrl)
// var name = {'category': 'junk food'}
// var foodlist = mongoose.model('foodlists',
//   { 'name': String,
//     'category': String,
//     'sizes': Array,
//     'calories': Array
// })
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/index.html'))

app.get('/', function (req, res) {
  res.setHeader('Content-type', 'text/html')
  res.render('index')
})

app.get('/endpoint', function (request, respond) {
  var foodChoice = request.query
  console.log(foodChoice + 'server log')
  if (foodChoice === 'Cheeseburger') respond.json({foodChoice: 'calories'})
  else respond.end('nothing to see here')
})

app.listen(process.env.PORT || 3000)
