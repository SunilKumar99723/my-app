// JavaScript Array Iteration
console .log("===================JavaScript Array Iteration===========")
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
console .log("For Each ----- "+numbers);
function myFunction(value, index, array) {
  txt += value ;
  console .log(txt);
}

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log("map() ----  "+numbers2)

//Array filter()

const number3 = [45, 4, 9, 16, 25];
const over18 = number3.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("number over 18 ----  "+over18)

//  Array reduce()

const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log("reduce() ..sum ----  "+sum)

let sum2 = numbers.reduce(myFunction, 100);
console.log("reduce() ..sum +100----  "+sum2)

