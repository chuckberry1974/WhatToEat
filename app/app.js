
const express = require('express')
const app = express()

var data = require('./listOfFood.json')
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/list', function (req, res) {
  res.send(data)
})

app.post('/Post', function (req, res) {
  console.log(req.body)
  data.push(req.body)
  res.send(data)
})

module.exports = app
