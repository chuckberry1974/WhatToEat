function myFunction() {
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
              "name":"Beer",
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


          {
              "name":"hamburger",
              "category":"food",
              "sizes":["small","large"],
              "calories": [280, 450]
          },

          {
              "name":"Cheeseburger",
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
              "calories": [300, 500]
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
          },

          {   "name":"Milk, whole",
              "category":"drinks",
              "sizes":["small","large"],
              "calories": [150, 280]
          }

      ]
  console.log(data[0].calories[0])
data.forEach(function (x) {
if (x.name === document.getElementById('foodChoice').value)
document.getElementById('mainDish').textContent = x.calories[0]
})

}
