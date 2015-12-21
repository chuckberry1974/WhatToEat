var myFunctionA = function () {
  window.fetch('/list')
    .then(function (response) {
      return response.json().then(function (data) {
      console.log('data:', data)
      data.forEach(function (foodname) {
        if (foodname.name === document.getElementById('foodChoice').value) {
          document.getElementById('mainDish').textContent = foodname.calories[0]
          var datafood = foodname.calories[0]
          document.getElementById('results_container').textContent = document.querySelector('#mainDish').innerHTML
        }
      })
    })
  })
}
  var myFunctionB = function () {
    data = fetchWrapper()
    data.forEach(function (drinksname) {
      if (drinksname.name === document.getElementById('drinks').value) {
      document.getElementById('Drinks').textContent = drinksname.calories[0]
      var datadrink = drinksname.calories[0]
  }
  })}

  var myFunctionC = function () {
    data = fetchWrapper()
    data.forEach(function (junkfoodname) {
    if (junkfoodname.name === document.getElementById('junkfood').value) {
    document.getElementById('snacks').textContent = junkfoodname.calories[0]
    var datajunk = junkfoodname.calories[0]
    // console.log(datajunk)
  }
  })}

  document.addEventListener('change', function() {

    var valueA = parseInt(document.getElementById("mainDish").innerHTML, 10) || 0
    var valueB = parseInt(document.getElementById("Drinks").innerHTML, 10) || 0
    var valueC = parseInt(document.getElementById("snacks").innerHTML, 10) || 0

    var sum = valueA + valueB + valueC
    console.log(valueA);
    console.log(valueB);
    console.log(sum);


      // var sum = parseInt(document.getElementById("mainDish").innerHTML, 10) +
      // parseInt(document.getElementById("Drinks").innerHTML, 10) +
      // parseInt(document.getElementById("snacks").innerHTML, 10)
      // console.log(parseInt(document.getElementById("mainDish").innerHTML, 10))
      // console.log(parseInt(document.getElementById("Drinks").innerHTML, 10))
      // console.log(parseInt(document.getElementById("snacks").innerHTML, 10))
      // console.log('sum is', sum)
      document.getElementById('results_container').innerHTML = sum
  })
