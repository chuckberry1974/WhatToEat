

var selects = document.querySelectorAll('.random')

Array.from(selects).forEach(element => {
  element.addEventListener('change', function(event) {
    window.fetch('/list')
    .then(function (response){ return response.json() })
    .then(function(data) {
      var calories; //  ????

      data.forEach(function (foodname) {
        if (foodname.name === event.target.value) {
          calories = foodname.calories[0];
        }
      })

      console.log(calories);


      // How do I know where to output this calroies?
      if (document.getElementById('results_container').textContent = calories) {document.querySelector('#mainDish').innerHTML= calories}



    })
  })
})

// activities.addEventListener('change', function () {
//   window.fetch('/list')
//     .then(function (response) {
//       return response.json().then(function (data) {
//         console.log('data:', data)
        // data.forEach(function (foodname) {
        //   if (foodname.name === document.getElementById('foodChoice').value) {
        //     document.getElementById('mainDish').textContent = foodname.calories[0]
//             // var datafood = foodname.calories[0]
//             document.getElementById('results_container').textContent = document.querySelector('#mainDish').innerHTML
//           }
//         })
//       })
//     })
// })

// var myFunctionA = function () {


// var myFunctionB = function () {
//   window.fetch('/list')
//       .then(function (response) {
//         return response.json().then(function (data) {
//           console.log('data:', data)
//           data.forEach(function (drinksname) {
//             if (drinksname.name === document.getElementById('drinks').value) {
//               document.getElementById('Drinks').textContent = drinksname.calories[0]
//               // var datadrink = drinksname.calories[0]
//               document.getElementById('results_container').textContent = document.querySelector('#Drinks').innerHTML
//             }
//           })
//         })
//       })
// }
//
// var myFunctionC = function () {
//   window.fetch('/list')
//       .then(function (response) {
//         return response.json().then(function (data) {
//           console.log('data:', data)
//           data.forEach(function (junkfoodname) {
//             if (junkfoodname.name === document.getElementById('junkfood').value) {
//               document.getElementById('snacks').textContent = junkfoodname.calories[0]
//               // var datajunk = junkfoodname.calories[0]
//               document.getElementById('results_container').textContent = document.querySelector('#snacks').innerHTML
//             }
//           })
//         })
//       })
// }

// document.addEventListener('change', function () {
//   var valueA = parseInt(document.getElementById('mainDish').innerHTML, 10) || 0
//   var valueB = parseInt(document.getElementById('Drinks').innerHTML, 10) || 0
//   var valueC = parseInt(document.getElementById('snacks').innerHTML, 10) || 0
//
//   var sum = valueA + valueB + valueC
//
//   console.log('A' + valueA)
//   console.log('B' + valueB)
// console.log('C' + valueC)
//   document.getElementById('results_container').innerHTML = sum
// })
