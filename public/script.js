  var data =
    [
    {
              "name":"coke",
            "category":"drinks",
            "sizes":["small","large"],
            "calories": [97, 200]
          },

          {
              "name":"diet coke",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [3, 6]
          },
          {
              "name":"beer",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [150, 250]
          },

          {
              "name":"orange juice",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [115, 140]
          },

          {
              "name":"coffee",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [97, 120]

          },

          {   "name":"milk, whole",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [150, 280]
          },

          {
              "name":"hamburger",
              "category":"food",
              "sizes":["small","large"],
              "calories": [280, 450]
          },

          {
              "name":"cheeseburger",
              "category":"food",
              "sizes":["small","large"],
              "calories": [300, 500]
          },

          {
              "name":"fries",
              "category":"junk food",
              "sizes":["small","large"],
              "calories": [150, 200]
          },

          {
              "name":"regular pizza",
              "category":"food",
              "sizes":["small","large"],
              "calories": [350, 500]
          },

          {   "name":"noodle",
              "category":"food",
              "sizes":["small","large"],
              "calories": [130, 200]
          },

          {   "name":"fried rice",
              "category":"food",
              "sizes":["small","large"],
              "calories": [80, 180]
          },

          {   "name":"nuggets",
              "category":"junk food",
              "sizes":["small","large"],
              "calories": [120, 200]
          },

          {   "name":"spagatti",
              "category":"junk food",
              "sizes":["small","large"],
              "calories": [60, 80],

          },

          {   "name":"sliced cooked pork",
              "category":"food",
              "sizes":["small","large"],
              "calories": [130, 230]
          },

          {   "name":"bread per slice",
              "category":"junk food",
              "sizes":["small","large"],
              "calories": [75, 140]
          },

          {   "name":"Potatoes",
              "category":"food",
              "sizes":["small","large"],
              "calories": [120, 180]
          }


      ]
  var myFunctionA = function () {
    data.forEach(function (foodname) {
      if (foodname.name === document.getElementById('foodChoice').value) {
      document.getElementById('mainDish').textContent = foodname.calories[0]
      var datafood = foodname.calories[0]
      document.getElementById('results_container').textContent = document.querySelector('#mainDish').innerHTML
      }
    })
  }

  var myFunctionB = function () {
    data.forEach(function (drinksname) {
    if (drinksname.name === document.getElementById('drinks').value) {
    document.getElementById('Drinks').textContent = drinksname.calories[0]
    var datadrink = drinksname.calories[0]
  }
  })}

  var myFunctionC = function () {
    data.forEach(function (junkfoodname) {
    if (junkfoodname.name === document.getElementById('junkfood').value) {
    document.getElementById('snacks').textContent = junkfoodname.calories[0]
    var datajunk = junkfoodname.calories[0]
    // console.log(datajunk)
  }
  })}

  document.addEventListener("change", function() {

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
