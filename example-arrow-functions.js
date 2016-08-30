var names = ['Andrew', 'Erin', 'Jeff', 'Scott'];
//
// names.forEach(function (name) {
//   console.log("forEach", name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('sup', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Scott'));

// var person = {
//   name: 'Scotty',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says hi to '+ name);
//     })
//   }
// }
//
// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) =>
{
  return a+b;
};
console.log(addStatement(2,3));
console.log(addStatement(9,4));

var addExpression = (a,b) => a +b;
console.log(addExpression(1,3));
console.log(addExpression(9,0));
