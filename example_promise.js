 var Promise = require('es6-promise').Promise;
//
// function getTempCallback(location, callback) {
//   callback (undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Raleigh', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//
//   } else {
//     console.log('success', temp);
//   }
//
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('city not found, yo!')
//     }, 1000);
//   });
// }
//
// getTempPromise('Raleigh').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('error', err);
// })

//Challenge Area
function addPromise(a, b) {
    return new Promise (function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve (a * b);
      } else {
        reject ('both vars need to be numbers');
      }
    });
}

addPromise(10, 'temp').then (function (myProduct) {
  console.log('Product == ' + myProduct);
}, function (err) {
  console.log('error', err);
})

//addPromise(1, 2);
