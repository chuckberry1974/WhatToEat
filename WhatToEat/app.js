const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080
const dbUrl = 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD +
'@ds059694.mongolab.com:59694/longneck'
mongoose.connect(dbUrl)
var name = {'category': 'junk food'}
var foodlist = mongoose.model('foodlists',
  { 'name': String,
    'category': String,
    'sizes': Array,
    'calories': Array
})
app.get('/', (req, res) => {
  foodlist.find(name, (err, foodData) => {
    if (err) return console.error(err)
    res.send(foodData)
    console.log('in read module, read data is ' + foodData)
  })
})
app.listen(PORT)
