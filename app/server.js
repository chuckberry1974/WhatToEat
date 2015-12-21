const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


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
