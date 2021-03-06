
var selects = document.querySelectorAll('.random')

Array.from(selects).forEach(element => {
  element.addEventListener('change', function (event) {
    window.fetch('/list')
    .then(function (response) { return response.json() })
      .then(function (data) {
        var calories
        data.forEach(function (foodname) {
          if (foodname.name === event.target.value) {
            calories = foodname.calories[0]
          }
        })

        var id = event.target.getAttribute('id')

        if (id === 'foodChoice') {
          document.getElementById('mainDish').textContent = calories
        } else if (id === 'drinks') {
          document.getElementById('Drinks').textContent = calories
        } else if (id === 'junkfood') {
          document.getElementById('snacks').textContent = calories
        }

        var valueA = parseInt(document.getElementById('mainDish').innerHTML, 10) || 0
          var valueB = parseInt(document.getElementById('Drinks').innerHTML, 10) || 0
          var valueC = parseInt(document.getElementById('snacks').innerHTML, 10) || 0

          document.getElementById('results_container').innerHTML = valueA + valueB + valueC

        // document.getElementById('results_container').innerHTML = parseInt(document.getElementById('mainDish').innerHTML, 10)
        // + parseInt(document.getElementById('Drinks').innerHTML, 10)
      })
  })
})

function calCounter() {
  var gender, age, weight, height, basM, basF
  age = document.getElementById('Age').value
  weight = document.getElementById('Weight').value
  height = document.getElementById('Height').value
  if (document.getElementById('Male').checked === true) {
    basM = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    document.getElementById('bm').innerHTML = basM
  } else {
    basF = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    document.getElementById('bm').innerHTML = basF
  }
}
